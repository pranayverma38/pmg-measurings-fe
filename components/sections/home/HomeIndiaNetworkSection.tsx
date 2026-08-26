"use client";

import { useEffect, useMemo, useState } from "react";

type NetworkRegion = "all" | "north" | "west" | "south" | "east";
type PartnerType = "Distributor" | "Dealer";

type RegionCard = {
    id: Exclude<NetworkRegion, "all">;
    title: string;
    states: string;
};

type PartnerLocation = {
    id: string;
    city: string;
    state: string;
    type: PartnerType;
    region: Exclude<NetworkRegion, "all">;
    lat: number;
    lng: number;
};

type MapFocus = {
    center: [number, number];
    zoom: number;
};

type PigeonMapsModule = typeof import("pigeon-maps");
type LoadedPigeonMaps = Pick<PigeonMapsModule, "Map" | "Overlay">;

const REGION_CARDS: RegionCard[] = [
    {
        id: "north",
        title: "NORTH",
        states: "Delhi NCR, Punjab, Haryana, Rajasthan, UP",
    },
    {
        id: "west",
        title: "WEST",
        states: "Gujarat, Maharashtra, MP",
    },
    {
        id: "south",
        title: "SOUTH",
        states: "Karnataka, Telangana, Tamil Nadu, Kerala",
    },
    {
        id: "east",
        title: "EAST & NORTH-EAST",
        states: "West Bengal, Bihar, Odisha, Assam",
    },
] as const;

const PARTNER_LOCATIONS: PartnerLocation[] = [
    { id: "delhi", city: "New Delhi", state: "Delhi NCR", type: "Distributor", region: "north", lat: 28.6139, lng: 77.209 },
    { id: "ludhiana", city: "Ludhiana", state: "Punjab", type: "Dealer", region: "north", lat: 30.901, lng: 75.8573 },
    { id: "gurugram", city: "Gurugram", state: "Haryana", type: "Dealer", region: "north", lat: 28.4595, lng: 77.0266 },
    { id: "jaipur", city: "Jaipur", state: "Rajasthan", type: "Dealer", region: "north", lat: 26.9124, lng: 75.7873 },
    { id: "lucknow", city: "Lucknow", state: "UP", type: "Dealer", region: "north", lat: 26.8467, lng: 80.9462 },
    { id: "rajkot", city: "Rajkot", state: "Gujarat", type: "Dealer", region: "west", lat: 22.3039, lng: 70.8022 },
    { id: "ahmedabad", city: "Ahmedabad", state: "Gujarat", type: "Distributor", region: "west", lat: 23.0225, lng: 72.5714 },
    { id: "mumbai", city: "Mumbai", state: "Maharashtra", type: "Distributor", region: "west", lat: 19.076, lng: 72.8777 },
    { id: "pune", city: "Pune", state: "Maharashtra", type: "Dealer", region: "west", lat: 18.5204, lng: 73.8567 },
    { id: "nagpur", city: "Nagpur", state: "Maharashtra", type: "Dealer", region: "west", lat: 21.1458, lng: 79.0882 },
    { id: "indore", city: "Indore", state: "MP", type: "Dealer", region: "west", lat: 22.7196, lng: 75.8577 },
    { id: "bengaluru", city: "Bengaluru", state: "Karnataka", type: "Distributor", region: "south", lat: 12.9716, lng: 77.5946 },
    { id: "hyderabad", city: "Hyderabad", state: "Telangana", type: "Dealer", region: "south", lat: 17.385, lng: 78.4867 },
    { id: "chennai", city: "Chennai", state: "Tamil Nadu", type: "Dealer", region: "south", lat: 13.0827, lng: 80.2707 },
    { id: "kochi", city: "Kochi", state: "Kerala", type: "Dealer", region: "south", lat: 9.9312, lng: 76.2673 },
    { id: "coimbatore", city: "Coimbatore", state: "Tamil Nadu", type: "Dealer", region: "south", lat: 11.0168, lng: 76.9558 },
    { id: "kolkata", city: "Kolkata", state: "West Bengal", type: "Distributor", region: "east", lat: 22.5726, lng: 88.3639 },
    { id: "patna", city: "Patna", state: "Bihar", type: "Dealer", region: "east", lat: 25.5941, lng: 85.1376 },
    { id: "bhubaneswar", city: "Bhubaneswar", state: "Odisha", type: "Dealer", region: "east", lat: 20.2961, lng: 85.8245 },
    { id: "guwahati", city: "Guwahati", state: "Assam", type: "Dealer", region: "east", lat: 26.1445, lng: 91.7362 },
    { id: "siliguri", city: "Siliguri", state: "West Bengal", type: "Dealer", region: "east", lat: 26.7271, lng: 88.3953 },
] as const;

const REGION_VIEWS: Record<NetworkRegion, MapFocus> = {
    all: { center: [22.9734, 78.6569], zoom: 4.45 },
    north: { center: [28.5, 78.2], zoom: 5.35 },
    west: { center: [21.6, 74.7], zoom: 5.2 },
    south: { center: [13.4, 78.2], zoom: 5.25 },
    east: { center: [24.1, 87.8], zoom: 5.05 },
};

const MAP_TILE_PROVIDER = (x: number, y: number, z: number, dpr?: number) => {
    const scale = (dpr ?? 1) >= 2 ? "@2x" : "";
    const subdomain = ["a", "b", "c"][(x + y) % 3];

    return `https://${subdomain}.basemaps.cartocdn.com/light_all/${z}/${x}/${y}${scale}.png`;
};

export default function HomeIndiaNetworkSection() {
    const [pigeonMaps, setPigeonMaps] = useState<LoadedPigeonMaps | null>(null);
    const [activeRegion, setActiveRegion] = useState<NetworkRegion>("all");
    const [activeLocationId, setActiveLocationId] = useState<string>("delhi");
    const [mapHeight, setMapHeight] = useState<number>(320);

    useEffect(() => {
        let isMounted = true;

        import("pigeon-maps")
            .then((mod) => {
                if (isMounted) {
                    setPigeonMaps({ Map: mod.Map, Overlay: mod.Overlay });
                }
            })
            .catch(() => {
                if (isMounted) {
                    setPigeonMaps(null);
                }
            });

        return () => {
            isMounted = false;
        };
    }, []);

    const visibleLocations = useMemo(() => {
        if (activeRegion === "all") {
            return PARTNER_LOCATIONS;
        }

        return PARTNER_LOCATIONS.filter((location) => location.region === activeRegion);
    }, [activeRegion]);

    const activeLocation =
        visibleLocations.find((location) => location.id === activeLocationId) ??
        PARTNER_LOCATIONS.find((location) => location.id === activeLocationId) ??
        visibleLocations[0] ??
        PARTNER_LOCATIONS[0];

    const PigeonMap = pigeonMaps?.Map;
    const PigeonOverlay = pigeonMaps?.Overlay;
    const activeView = REGION_VIEWS[activeRegion];
    const desktopPanelHeight = mapHeight + 24;

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        const updateHeight = () => {
            const nextHeight = window.innerWidth >= 1100 ? 430 : 320;
            setMapHeight((current) => (current !== nextHeight ? nextHeight : current));
        };

        updateHeight();
        window.addEventListener("resize", updateHeight);

        return () => {
            window.removeEventListener("resize", updateHeight);
        };
    }, []);

    return (
        <section className="pmg-network" aria-labelledby="pmg-network-title">
            <div className="container-fluid">
                <div className="pmg-network__shell">
                    <div className="pmg-network__header">
                        <span className="pmg-network__eyebrow">PMG INDIA NETWORK</span>
                        <h2 id="pmg-network-title" className="pmg-network__title">
                            PMG IS GROWING ACROSS INDIA.
                        </h2>
                        <p className="pmg-network__lead">
                            Distributors and dealers across north, west, south and east India — with new partners
                            joining every quarter.
                        </p>
                    </div>

                    <div
                        className="pmg-network__layout"
                        style={{ ["--pmg-network-panel-height" as string]: `${desktopPanelHeight}px` }}
                    >
                        <div className="pmg-network__map-card">
                            <div className="pmg-network__map-surface">
                                <div className="pmg-network__map-frame">
                                    {PigeonMap && PigeonOverlay ? (
                                        <PigeonMap
                                            provider={MAP_TILE_PROVIDER}
                                            center={activeView.center}
                                            zoom={activeView.zoom}
                                            minZoom={4}
                                            maxZoom={7}
                                            animate
                                            metaWheelZoom={false}
                                            mouseEvents
                                            attribution={false}
                                            twoFingerDrag={false}
                                            height={mapHeight}
                                            defaultCenter={[22.9734, 78.6569]}
                                            defaultZoom={4.45}
                                        >
                                            {visibleLocations.map((location) => {
                                                const isActive = location.id === activeLocation.id;

                                                return (
                                                    <PigeonOverlay
                                                        key={location.id}
                                                        anchor={[location.lat, location.lng]}
                                                        offset={[16, 16]}
                                                    >
                                                        <button
                                                            type="button"
                                                            className={`pmg-network__marker pmg-network__marker--${location.type.toLowerCase()}${
                                                                isActive ? " is-active" : ""
                                                            }`}
                                                            onMouseEnter={() => setActiveLocationId(location.id)}
                                                            onFocus={() => setActiveLocationId(location.id)}
                                                            onClick={() => setActiveLocationId(location.id)}
                                                            aria-label={`${location.city}, ${location.state} ${location.type}`}
                                                        >
                                                            <span className="pmg-network__marker-core" />
                                                        </button>
                                                    </PigeonOverlay>
                                                );
                                            })}
                                        </PigeonMap>
                                    ) : (
                                        <div className="pmg-network__map-loading" aria-hidden="true" />
                                    )}

                                    {activeLocation && (
                                        <div className="pmg-network__map-info">
                                            <strong>{activeLocation.city}</strong>
                                            <span>
                                                {activeLocation.state} · {activeLocation.type}
                                            </span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="pmg-network__content">
                            <div className="pmg-network__legend" aria-label="Partner type legend">
                                <span className="pmg-network__legend-item">
                                    <span className="pmg-network__legend-dot pmg-network__legend-dot--distributor" />
                                    Distributor
                                </span>
                                <span className="pmg-network__legend-item">
                                    <span className="pmg-network__legend-dot pmg-network__legend-dot--dealer" />
                                    Dealer
                                </span>
                            </div>

                            <div className="pmg-network__regions">
                                {REGION_CARDS.map((region) => (
                                    <button
                                        key={region.id}
                                        type="button"
                                        className={`pmg-network__region-card${
                                            activeRegion === region.id ? " is-active" : ""
                                        }`}
                                        onMouseEnter={() => {
                                            setActiveRegion(region.id);
                                            const firstMatch = PARTNER_LOCATIONS.find(
                                                (location) => location.region === region.id
                                            );
                                            if (firstMatch) {
                                                setActiveLocationId(firstMatch.id);
                                            }
                                        }}
                                        onFocus={() => {
                                            setActiveRegion(region.id);
                                            const firstMatch = PARTNER_LOCATIONS.find(
                                                (location) => location.region === region.id
                                            );
                                            if (firstMatch) {
                                                setActiveLocationId(firstMatch.id);
                                            }
                                        }}
                                        onClick={() => {
                                            setActiveRegion((current) => (current === region.id ? "all" : region.id));
                                            const firstMatch = PARTNER_LOCATIONS.find(
                                                (location) => location.region === region.id
                                            );
                                            if (firstMatch) {
                                                setActiveLocationId(firstMatch.id);
                                            }
                                        }}
                                    >
                                        <h3 className="pmg-network__region-title">{region.title}</h3>
                                        <p className="pmg-network__region-states">{region.states}</p>
                                    </button>
                                ))}
                            </div>

                            <div className="pmg-network__table-card">
                                <div className="pmg-network__table">
                                    {visibleLocations.map((location) => (
                                        <button
                                            key={location.id}
                                            type="button"
                                            className={`pmg-network__table-row${
                                                activeLocation.id === location.id ? " is-active" : ""
                                            }`}
                                            onMouseEnter={() => {
                                                setActiveLocationId(location.id);
                                            }}
                                            onFocus={() => {
                                                setActiveLocationId(location.id);
                                            }}
                                            onClick={() => {
                                                setActiveLocationId(location.id);
                                            }}
                                        >
                                            <span>{location.city}</span>
                                            <span>{location.state}</span>
                                            <span>{location.type}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .pmg-network {
                            position: relative;
                            overflow: hidden;
                            padding: clamp(54px, 6vw, 78px) 0;
                            background:
                                radial-gradient(circle at 10% 0%, rgba(196, 37, 41, 0.07), transparent 24%),
                                radial-gradient(circle at 100% 100%, rgba(23, 162, 184, 0.08), transparent 28%),
                                linear-gradient(180deg, #f8f8f8 0%, #f2f2f3 100%);
                        }

                        .pmg-network .container-fluid {
                            position: relative;
                            z-index: 1;
                        }

                        .pmg-network__shell {
                            max-width: 1440px;
                            margin: 0 auto;
                            padding: 0 clamp(14px, 3vw, 28px);
                        }

                        .pmg-network__header {
                            max-width: 48rem;
                            margin-bottom: clamp(22px, 3vw, 30px);
                        }

                        .pmg-network__eyebrow {
                            display: inline-flex;
                            margin-bottom: 14px;
                            color: #c42529;
                            font-size: 12px;
                            font-weight: 700;
                            letter-spacing: 0.22em;
                            text-transform: uppercase;
                        }

                        .pmg-network__title {
                            margin: 0;
                            color: #111111;
                            font-size: clamp(2.2rem, 5vw, 4.45rem);
                            line-height: 0.96;
                            letter-spacing: -0.05em;
                            font-weight: 700;
                            text-transform: uppercase;
                        }

                        .pmg-network__lead {
                            margin: 18px 0 0;
                            max-width: 38rem;
                            color: rgba(17, 17, 17, 0.62);
                            font-size: clamp(1rem, 1.35vw, 1.12rem);
                            line-height: 1.7;
                        }

                        .pmg-network__layout {
                            display: grid;
                            grid-template-columns: minmax(0, 1fr);
                            gap: clamp(16px, 2.2vw, 22px);
                            align-items: stretch;
                        }

                        @media (min-width: 1100px) {
                            .pmg-network__layout {
                                grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
                            }
                        }

                        .pmg-network__map-card,
                        .pmg-network__table-card,
                        .pmg-network__region-card,
                        .pmg-network__content {
                            border: 1px solid rgba(17, 17, 17, 0.07);
                            background: rgba(255, 255, 255, 0.88);
                            box-shadow: 0 18px 44px rgba(15, 23, 42, 0.06);
                            backdrop-filter: blur(12px);
                        }

                        .pmg-network__map-card {
                            border-radius: 28px;
                            padding: 12px;
                            transition: transform 0.3s ease, box-shadow 0.3s ease;
                        }

                        .pmg-network__map-card:hover {
                            transform: translateY(-4px);
                            box-shadow: 0 24px 56px rgba(15, 23, 42, 0.1);
                        }

                        .pmg-network__map-surface {
                            position: relative;
                            height: 100%;
                            border-radius: 24px;
                            background: linear-gradient(180deg, rgba(255, 255, 255, 0.85), rgba(246, 247, 249, 0.75));
                            overflow: hidden;
                        }

                        .pmg-network__map-surface::before {
                            content: "";
                            position: absolute;
                            inset: 0;
                            background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(17, 17, 17, 0.02));
                            pointer-events: none;
                            z-index: 2;
                        }

                        .pmg-network__map-frame {
                            position: relative;
                            height: 100%;
                            min-height: 320px;
                        }

                        .pmg-network__map-loading {
                            height: 100%;
                            min-height: inherit;
                            background:
                                radial-gradient(circle at 20% 20%, rgba(196, 37, 41, 0.08), transparent 22%),
                                linear-gradient(135deg, rgba(255, 255, 255, 0.88), rgba(240, 243, 246, 0.9));
                        }

                        .pmg-network__map-frame :global(.pigeon-overlays) {
                            z-index: 4;
                        }

                        .pmg-network__map-frame :global(canvas),
                        .pmg-network__map-frame :global(img) {
                            border-radius: 20px;
                        }

                        .pmg-network__marker {
                            position: relative;
                            display: inline-flex;
                            align-items: center;
                            justify-content: center;
                            width: 20px;
                            height: 20px;
                            padding: 0;
                            border: 0;
                            background: transparent;
                            border-radius: 999px;
                            transform: translate(-50%, -50%);
                            transition: transform 0.22s ease;
                        }

                        .pmg-network__marker::before {
                            content: "";
                            position: absolute;
                            inset: 0;
                            border-radius: inherit;
                            animation: pmg-network-marker-ring 2.8s ease-out infinite;
                            opacity: 0.6;
                        }

                        .pmg-network__marker-core {
                            position: relative;
                            z-index: 1;
                            width: 10px;
                            height: 10px;
                            border-radius: inherit;
                            box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.9);
                            animation: pmg-network-marker-breathe 3.2s ease-in-out infinite;
                        }

                        .pmg-network__marker:hover,
                        .pmg-network__marker.is-active {
                            transform: translate(-50%, -50%) scale(1.12);
                        }

                        .pmg-network__marker--distributor {
                            color: #c42529;
                        }

                        .pmg-network__marker--dealer {
                            color: #22a6d5;
                        }

                        .pmg-network__marker--distributor::before,
                        .pmg-network__marker--distributor .pmg-network__marker-core {
                            background: #c42529;
                        }

                        .pmg-network__marker--dealer::before,
                        .pmg-network__marker--dealer .pmg-network__marker-core {
                            background: #22a6d5;
                        }

                        .pmg-network__map-info {
                            position: absolute;
                            right: 14px;
                            bottom: 14px;
                            z-index: 5;
                            display: grid;
                            gap: 4px;
                            min-width: 150px;
                            padding: 12px 14px;
                            border-radius: 14px;
                            border: 1px solid rgba(17, 17, 17, 0.08);
                            background: rgba(255, 255, 255, 0.96);
                            box-shadow: 0 20px 36px rgba(15, 23, 42, 0.12);
                        }

                        .pmg-network__map-info strong {
                            color: #111111;
                            font-size: 14px;
                            font-weight: 700;
                            line-height: 1.1;
                            text-transform: uppercase;
                        }

                        .pmg-network__map-info span {
                            color: rgba(17, 17, 17, 0.58);
                            font-size: 12px;
                            line-height: 1.4;
                        }

                        .pmg-network__content {
                            display: grid;
                            gap: 16px;
                            border-radius: 28px;
                            padding: 18px;
                        }

                        .pmg-network__legend {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 16px;
                            align-items: center;
                        }

                        .pmg-network__legend-item {
                            display: inline-flex;
                            align-items: center;
                            gap: 8px;
                            color: rgba(17, 17, 17, 0.7);
                            font-size: 13px;
                            font-weight: 500;
                        }

                        .pmg-network__legend-dot {
                            width: 10px;
                            height: 10px;
                            border-radius: 999px;
                        }

                        .pmg-network__legend-dot--distributor {
                            background: #c42529;
                        }

                        .pmg-network__legend-dot--dealer {
                            background: #22a6d5;
                        }

                        .pmg-network__regions {
                            display: grid;
                            grid-template-columns: repeat(2, minmax(0, 1fr));
                            gap: 12px;
                        }

                        .pmg-network__region-card {
                            position: relative;
                            padding: 14px 14px 16px;
                            border-radius: 18px;
                            text-align: left;
                            transition:
                                transform 0.24s ease,
                                border-color 0.24s ease,
                                box-shadow 0.24s ease,
                                background-color 0.24s ease;
                            overflow: hidden;
                        }

                        .pmg-network__region-card::before {
                            content: "";
                            position: absolute;
                            inset: 0;
                            background: linear-gradient(135deg, rgba(34, 166, 213, 0.08), rgba(196, 37, 41, 0.04));
                            opacity: 0;
                            transition: opacity 0.24s ease;
                            pointer-events: none;
                        }

                        .pmg-network__region-card:hover,
                        .pmg-network__region-card.is-active {
                            transform: translateY(-3px);
                            border-color: rgba(17, 17, 17, 0.12);
                            box-shadow: 0 24px 42px rgba(15, 23, 42, 0.08);
                            background: rgba(255, 255, 255, 0.98);
                        }

                        .pmg-network__region-card:hover::before,
                        .pmg-network__region-card.is-active::before {
                            opacity: 1;
                        }

                        .pmg-network__region-title {
                            margin: 0 0 8px;
                            color: #111111;
                            font-size: 1.1rem;
                            font-weight: 700;
                            letter-spacing: 0.1em;
                            text-transform: uppercase;
                        }

                        .pmg-network__region-states {
                            margin: 0;
                            color: rgba(17, 17, 17, 0.58);
                            font-size: 14px;
                            line-height: 1.65;
                        }

                        .pmg-network__table-card {
                            flex: 1 1 auto;
                            overflow: hidden;
                            border-radius: 22px;
                        }

                        @media (min-width: 1100px) {
                            .pmg-network__map-card,
                            .pmg-network__content {
                                height: var(--pmg-network-panel-height);
                            }

                            .pmg-network__content {
                                grid-template-rows: auto auto minmax(0, 1fr);
                            }
                        }

                        .pmg-network__table {
                            display: grid;
                            max-height: 230px;
                            overflow: auto;
                        }

                        .pmg-network__table-row {
                            display: grid;
                            grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.15fr) auto;
                            gap: 12px;
                            align-items: center;
                            width: 100%;
                            padding: 16px 18px;
                            border: 0;
                            border-bottom: 1px solid rgba(17, 17, 17, 0.08);
                            background: transparent;
                            color: #111111;
                            text-align: left;
                            transition:
                                background-color 0.2s ease,
                                transform 0.2s ease;
                        }

                        .pmg-network__table-row:last-child {
                            border-bottom: 0;
                        }

                        .pmg-network__table-row:hover,
                        .pmg-network__table-row.is-active {
                            background: rgba(17, 17, 17, 0.04);
                            transform: translateX(3px);
                        }

                        .pmg-network__table-row span {
                            color: rgba(17, 17, 17, 0.72);
                            font-size: 14px;
                            line-height: 1.45;
                        }

                        .pmg-network__table-row span:first-child {
                            color: #111111;
                        }

                        .pmg-network__table::-webkit-scrollbar {
                            width: 8px;
                        }

                        .pmg-network__table::-webkit-scrollbar-thumb {
                            background: rgba(17, 17, 17, 0.18);
                            border-radius: 999px;
                        }

                        @media (max-width: 767px) {
                            .pmg-network {
                                padding: 52px 0;
                            }

                            .pmg-network__regions {
                                grid-template-columns: minmax(0, 1fr);
                            }

                            .pmg-network__map-card {
                                padding: 12px;
                            }

                            .pmg-network__map-frame {
                                min-height: 300px;
                            }

                            .pmg-network__map-info {
                                right: 12px;
                                bottom: 12px;
                                min-width: 136px;
                            }

                            .pmg-network__content {
                                padding: 14px;
                            }

                            .pmg-network__table-row {
                                grid-template-columns: minmax(0, 1fr);
                                gap: 4px;
                            }
                        }

                        @keyframes pmg-network-marker-ring {
                            0%,
                            40% {
                                transform: scale(0.82);
                                opacity: 0.55;
                            }
                            100% {
                                transform: scale(1.9);
                                opacity: 0;
                            }
                        }

                        @keyframes pmg-network-marker-breathe {
                            0%,
                            100% {
                                filter: brightness(1);
                            }
                            50% {
                                filter: brightness(1.08);
                            }
                        }

                        @media (prefers-reduced-motion: reduce) {
                            .pmg-network__marker,
                            .pmg-network__region-card,
                            .pmg-network__map-card {
                                transition: none;
                                animation: none;
                            }

                            .pmg-network__marker::before,
                            .pmg-network__marker-core {
                                animation: none;
                            }
                        }
                    `,
                }}
            />
        </section>
    );
}
