import Image from "next/image";
import Link from "next/link";
import MainMenuHome from "@/components/layout/MainMenuHome";
import SideBarHome from "@/components/layout/SideBarHome";
import HeaderInteractive from "./HeaderInteractive";

const HEADER_LOGOS = {
    home: {
        src: "/assets/imgs/logopmg/IMG_4842.jpeg",
        width: 1228,
        height: 867,
    },
    white: {
        src: "/assets/imgs/logopmg/white.png",
        width: 760,
        height: 532,
    },
} as const;

interface HeaderHomeProps {
    style?: string;
    textStyle?: "light" | "dark";
    logoVariant?: keyof typeof HEADER_LOGOS;
}

export default function HeaderHome({ style, textStyle = "light", logoVariant = "white" }: HeaderHomeProps = {}) {
    const logo = HEADER_LOGOS[logoVariant];
    const menuStyleClass = style ? ` ${style}` : "";
    const isDarkText = textStyle === "dark";
    const headerClassName = [
        "at-header-area",
        "at-header-spacing",
        "header-transparent",
        "header-home",
        isDarkText ? "header-home--dark" : "text-white",
    ].join(" ");
    const menuClassName = isDarkText
        ? `at-main-menu d-inline-flex justify-content-center${menuStyleClass}`
        : `at-main-menu menu-light${menuStyleClass} d-inline-flex justify-content-center`;
    return (
        <>
            <header>
                <div className={headerClassName}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-6">
                                <div className="at-header-logo">
                                    <Link href="/" className="d-inline-flex align-items-center text-decoration-none">
                                        <Image
                                            width={logo.width}
                                            height={logo.height}
                                            src={logo.src}
                                            alt="PMG"
                                            priority
                                            className="header-home__logo"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-8 mx-auto d-none d-md-flex justify-content-center">
                                <div className={menuClassName}>
                                    <nav className="at-mobile-menu-active">
                                        <MainMenuHome />
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-2 col-6">
                                <div className="at-header-right gap-3 d-flex justify-content-end align-items-center">
                                    <button
                                        className={`at-menu-bar at-header-sidebar-btn d-md-none${isDarkText ? "" : " text-white"}`}
                                        type="button"
                                        aria-label="Open menu"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path
                                                d="M1 2C1 1.73478 1.10536 1.48043 1.29289 1.29289C1.48043 1.10536 1.73478 1 2 1H6C6.26522 1 6.51957 1.10536 6.70711 1.29289C6.89464 1.48043 7 1.73478 7 2V6C7 6.26522 6.89464 6.51957 6.70711 6.70711C6.51957 6.89464 6.26522 7 6 7H2C1.73478 7 1.48043 6.89464 1.29289 6.70711C1.10536 6.51957 1 6.26522 1 6V2ZM11 2C11 1.73478 11.1054 1.48043 11.2929 1.29289C11.4804 1.10536 11.7348 1 12 1H16C16.2652 1 16.5196 1.10536 16.7071 1.29289C16.8946 1.48043 17 1.73478 17 2V6C17 6.26522 16.8946 6.51957 16.7071 6.70711C16.5196 6.89464 16.2652 7 16 7H12C11.7348 7 11.4804 6.89464 11.2929 6.70711C11.1054 6.51957 11 6.26522 11 6V2ZM1 12C1 11.7348 1.10536 11.4804 1.29289 11.2929C1.48043 11.1054 1.73478 11 2 11H6C6.26522 11 6.51957 11.1054 6.70711 11.2929C6.89464 11.4804 7 11.7348 7 12V16C7 16.2652 6.89464 16.5196 6.70711 16.7071C6.51957 16.8946 6.26522 17 6 17H2C1.73478 17 1.48043 16.8946 1.29289 16.7071C1.10536 16.5196 1 16.2652 1 16V12ZM11 12C11 11.7348 11.1054 11.4804 11.2929 11.2929C11.4804 11.1054 11.7348 11 12 11H16C16.2652 11 16.5196 11.1054 16.7071 11.2929C16.8946 11.4804 17 11.7348 17 12V16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17H12C11.7348 17 11.4804 16.89464 11.2929 16.7071C11.1054 16.5196 11 16.2652 11 16V12Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <button id="header-sticky" className="hamburger-open-btn hamburger-sticky-menu">
                    <span>MENU</span>
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path
                                d="M4 5C4 4.73478 4.10536 4.48043 4.29289 4.29289C4.48043 4.10536 4.73478 4 5 4H9C9.26522 4 9.51957 4.10536 9.70711 4.29289C9.89464 4.48043 10 4.73478 10 5V9C10 9.26522 9.89464 9.51957 9.70711 9.70711C9.51957 9.89464 9.26522 10 9 10H5C4.73478 10 4.48043 9.89464 4.29289 9.70711C4.10536 9.51957 4 9.26522 4 9V5ZM14 5C14 4.73478 14.1054 4.48043 14.2929 4.29289C14.4804 4.10536 14.7348 4 15 4H19C19.2652 4 19.5196 4.10536 19.7071 4.29289C19.8946 4.48043 20 4.73478 20 5V9C20 9.26522 19.8946 9.51957 19.7071 9.70711C19.5196 9.89464 19.2652 10 19 10H15C14.7348 10 14.4804 9.89464 14.2929 9.70711C14.1054 9.51957 14 9.26522 14 9V5ZM4 15C4 14.7348 4.10536 14.4804 4.29289 14.2929C4.48043 14.1054 4.73478 14 5 14H9C9.26522 14 9.51957 14.1054 9.70711 14.2929C9.89464 14.4804 10 14.7348 10 15V19C10 19.2652 9.89464 19.5196 9.70711 19.7071C9.51957 19.8946 9.26522 20 9 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15ZM14 15C14 14.7348 14.1054 14.4804 14.2929 14.2929C14.4804 14.1054 14.7348 14 15 14H19C19.2652 14 19.5196 14.1054 19.7071 14.2929C19.8946 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H15C14.7348 20 14.4804 19.8946 14.2929 19.7071C14.1054 19.5196 14 19.2652 14 19V15Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </button>
            </header>
            <SideBarHome />
            <HeaderInteractive />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .header-home.at-header-spacing {
                            padding-top: 22px;
                        }
                        .header-home:not(.header-home--dark) .at-main-menu nav > ul > li > a,
                        .header-home:not(.header-home--dark) .at-main-menu nav > ul > li > a:hover,
                        .header-home:not(.header-home--dark) .at-main-menu nav > ul > li:hover.has-dropdown > a,
                        .header-home:not(.header-home--dark) .at-main-menu nav > ul > li.has-dropdown > a {
                            color: #fff;
                        }
                        .header-home:not(.header-home--dark) .at-main-menu nav > ul > li.has-dropdown > a::after {
                            filter: invert(1);
                        }
                        .header-home:not(.header-home--dark) .at-main-menu nav ul li .submenu li a {
                            color: var(--at-neutral-700, #333);
                        }
                        .header-home:not(.header-home--dark) .at-main-menu nav ul li .submenu li:hover > a {
                            color: var(--at-neutral-900, #000) !important;
                        }
                        .header-home:not(.header-home--dark) .at-header-logo a {
                            color: #fff;
                        }
                        .header-home--dark .at-main-menu nav > ul > li > a,
                        .header-home--dark .at-main-menu nav > ul > li > a:hover,
                        .header-home--dark .at-main-menu nav > ul > li:hover.has-dropdown > a,
                        .header-home--dark .at-main-menu nav > ul > li.has-dropdown > a {
                            color: var(--at-common-black, #000);
                        }
                        .header-home--dark .at-main-menu nav > ul > li.has-dropdown > a::after {
                            filter: none;
                        }
                        .header-home--dark .at-header-logo a,
                        .header-home--dark .at-header-sidebar-btn {
                            color: var(--at-common-black, #000);
                        }
                        .header-home .header-home__logo {
                            display: block;
                            object-fit: contain;
                            width: auto;
                            height: 48px;
                            max-width: min(200px, 52vw);
                        }
                        @media (min-width: 768px) {
                            .header-home .header-home__logo {
                                height: 68px;
                                max-width: min(260px, 28vw);
                            }
                        }
                        .header-home:not(.header-home--dark) .hamburger-sticky-menu {
                            color: #fff;
                            border-color: rgba(255, 255, 255, 0.3);
                            background: rgba(255, 255, 255, 0.15);
                        }
                        .header-home--dark .hamburger-sticky-menu {
                            color: var(--at-common-black, #000);
                            border-color: rgba(0, 0, 0, 0.15);
                            background: rgba(0, 0, 0, 0.05);
                        }
                        @media (min-width: 768px) {
                            .header-home.at-header-area {
                                width: 90%;
                                max-width: 90%;
                                left: 0;
                                right: 0;
                                margin-left: auto;
                                margin-right: auto;
                            }
                        }

                        /* Products megamenu — 3-column dropdown */
                        .header-home .at-main-menu nav > ul > li.has-products-megamenu {
                            position: static;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu.at-megamenu {
                            left: 50%;
                            right: auto;
                            width: min(920px, calc(100vw - 40px));
                            padding: 28px 28px 0;
                            border-radius: 18px;
                            border: 1px solid rgba(15, 15, 15, 0.08);
                            box-shadow:
                                0 4px 6px -1px rgba(15, 15, 15, 0.04),
                                0 24px 48px -12px rgba(15, 15, 15, 0.14);
                            transform: translateX(-50%) scale(1, 0);
                            transform-origin: top center;
                            background:
                                linear-gradient(180deg, rgba(255, 255, 255, 0.98) 0%, rgba(250, 250, 250, 0.96) 100%);
                        }
                        .header-home .at-main-menu nav > ul > li.has-products-megamenu:hover > .products-megamenu {
                            transform: translateX(-50%) scale(1);
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__col {
                            height: auto;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__col-head {
                            margin-bottom: 4px;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__title-wrap {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            gap: 10px;
                            position: relative;
                            padding: 0 0 10px;
                            margin: 0 0 8px;
                            border-bottom: 1px solid rgba(15, 15, 15, 0.08);
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__title-wrap svg {
                            position: absolute;
                            top: 2px;
                            right: 0;
                            flex-shrink: 0;
                            color: var(--at-theme-primary, #F0460E);
                            opacity: 0;
                            transform: translate(-4px, 4px);
                            transition: opacity 0.3s ease, transform 0.3s ease;
                            pointer-events: none;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__col:hover .products-megamenu__title-wrap svg {
                            opacity: 1;
                            transform: translate(0, 0);
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__title {
                            display: block;
                            padding: 0 18px 0 0;
                            font-size: 13px;
                            font-weight: 700;
                            line-height: 1.25;
                            letter-spacing: 0.06em;
                            text-transform: uppercase;
                            white-space: nowrap;
                            color: var(--at-common-black, #0f0f0f);
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__desc {
                            margin: 0;
                            min-height: 36px;
                            font-size: 12px;
                            line-height: 1.5;
                            color: var(--at-neutral-500, #737373);
                            letter-spacing: -0.01em;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__list {
                            margin: 0;
                            padding: 0;
                            list-style: none;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__list li {
                            width: 100%;
                            padding: 0;
                            margin: 0;
                            border-radius: 8px;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__list li a {
                            position: relative;
                            display: flex;
                            align-items: center;
                            width: 100%;
                            padding: 9px 12px 9px 14px;
                            font-size: 13px;
                            font-weight: 500;
                            line-height: 1.35;
                            letter-spacing: -0.01em;
                            color: var(--at-neutral-600, #525252);
                            border-radius: 8px;
                            transition:
                                color 0.25s ease,
                                background 0.25s ease,
                                padding-left 0.25s ease;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__list li a::before {
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 50%;
                            width: 2px;
                            height: 0;
                            border-radius: 2px;
                            background: var(--at-theme-primary, #F0460E);
                            transform: translateY(-50%);
                            transition: height 0.25s ease;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__list li a:hover {
                            color: var(--at-common-black, #0f0f0f);
                            background: rgba(240, 70, 14, 0.06);
                            padding-left: 18px;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__list li a:hover::before {
                            height: 60%;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__footer {
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            gap: 16px;
                            margin-top: 20px;
                            padding: 16px 4px 20px;
                            border-top: 1px solid rgba(15, 15, 15, 0.08);
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__footer-text {
                            margin: 0;
                            max-width: 420px;
                            font-size: 12px;
                            line-height: 1.5;
                            color: var(--at-neutral-500, #737373);
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__footer-link {
                            display: inline-flex;
                            align-items: center;
                            gap: 8px;
                            flex-shrink: 0;
                            padding: 10px 18px;
                            font-size: 13px;
                            font-weight: 600;
                            letter-spacing: -0.01em;
                            color: #fff;
                            text-decoration: none;
                            border-radius: 999px;
                            background: var(--at-common-black, #0f0f0f);
                            transition: background 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__footer-link svg {
                            transition: transform 0.25s ease;
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__footer-link:hover {
                            color: #fff;
                            background: var(--at-theme-primary, #F0460E);
                            transform: translateY(-1px);
                            box-shadow: 0 8px 20px -6px rgba(240, 70, 14, 0.45);
                        }
                        .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__footer-link:hover svg {
                            transform: translate(2px, -2px);
                        }
                        @media (max-width: 991px) {
                            .header-home .at-main-menu nav ul li .products-megamenu.at-megamenu {
                                width: min(720px, calc(100vw - 32px));
                            }
                            .header-home .at-main-menu nav ul li .products-megamenu .products-megamenu__title {
                                white-space: normal;
                            }
                        }
                    `,
                }}
            />
        </>
    );
}
