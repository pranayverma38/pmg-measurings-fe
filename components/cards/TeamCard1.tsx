import Link from "next/link";
import Image from "next/image";

const ARROW_ICON_SVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M7.85986 2.43872L1.7123 8.58629L0.702148 7.57614L6.84971 1.42857H1.43131V0H9.28843V7.85714H7.85986V2.43872Z" fill="currentColor" />
    </svg>
);

export type TeamCard1Props = {
    linkPost: string;
    img: string;
    name: string;
    position: string;
    classList?: string;
    hideContent?: boolean;
};

export default function TeamCard1({ linkPost, img, name, position, classList = "", hideContent = false }: TeamCard1Props) {
    return (
        <div className={[classList, "changeless"].filter(Boolean).join(" ")}>
            <div className="team-card">
                <div
                    className="team-card-image"
                    style={hideContent ? { aspectRatio: "1 / 1", width: "100%" } : undefined}
                >
                    <div className={`anim-zoomin${hideContent ? " position-relative h-100 w-100" : ""}`}>
                        <Image
                            src={img}
                            alt={name}
                            className="img-cover object-fit-cover"
                            {...(hideContent
                                ? { fill: true, sizes: "(max-width: 768px) 50vw, 25vw" }
                                : { width: 450, height: 550 })}
                        />
                    </div>
                </div>
                <Link href={linkPost} className="team-card-icon">
                    {ARROW_ICON_SVG}
                </Link>
                {!hideContent && (
                    <div className="team-card-content">
                        <Link href={linkPost} className="team-card-name">
                            <h6 className="text-white fz-font-2xl">{name}</h6>
                        </Link>
                        <p className="team-card-position fz-font-sm m-0 common-white">{position}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
