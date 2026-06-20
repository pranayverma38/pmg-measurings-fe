import { MobileMenuCloneProvider } from "@/components/layout/MobileMenuCloneContext";
import BackToTop from "@/components/elements/BackToTopServer";
import ParallaxSceneEffect from "@/components/effects/ParallaxSceneEffect";
import Footer1 from "@/components/layout/footer/Footer1";
import Footer2 from "@/components/layout/footer/Footer2";
import Footer3 from "@/components/layout/footer/Footer3";
import Footer4 from "@/components/layout/footer/Footer4";
import Footer5 from "@/components/layout/footer/Footer5";
import Footer6 from "@/components/layout/footer/Footer6";
import Footer7 from "@/components/layout/footer/Footer7";
import Footer8 from "@/components/layout/footer/Footer8";
import Footer9 from "@/components/layout/footer/Footer9";
import Footer10 from "@/components/layout/footer/Footer10";
import Footer11 from "@/components/layout/footer/Footer11";
import Footer12 from "@/components/layout/footer/Footer12";
import Footer13 from "@/components/layout/footer/Footer13";
import Footer14 from "@/components/layout/footer/Footer14";
import Footer15 from "@/components/layout/footer/Footer15";
import Header1 from "@/components/layout/header/Header1";
import Header2 from "@/components/layout/header/Header2";
import Header3 from "@/components/layout/header/Header3";
import Header4 from "@/components/layout/header/Header4";
import Header5 from "@/components/layout/header/Header5";
import Header7 from "@/components/layout/header/Header7";
import Header8 from "@/components/layout/header/Header8";
import Header9 from "@/components/layout/header/Header9";
import Header10 from "@/components/layout/header/Header10";
import Header12 from "@/components/layout/header/Header12";
import Header13 from "@/components/layout/header/Header13";
import Header14 from "@/components/layout/header/Header14";
import Header15 from "@/components/layout/header/Header15";
import ServerEffects from "@/components/layout/ServerEffects";

interface HeaderProps {
    style?: string;
}

const HEADER_COMPONENTS: Record<number, React.ComponentType<HeaderProps>> = {
    1: Header1,
    2: Header2,
    3: Header3,
    4: Header4,
    5: Header5,
    6: Header1,
    7: Header7,
    8: Header8,
    9: Header9,
    10: Header10,
    11: Header1,
    12: Header12,
    13: Header13,
    14: Header14,
    15: Header15,
};

const FOOTER_COMPONENTS = {
    1: Footer1,
    2: Footer2,
    3: Footer3,
    4: Footer4,
    5: Footer5,
    6: Footer6,
    7: Footer7,
    8: Footer8,
    9: Footer9,
    10: Footer10,
    11: Footer11,
    12: Footer12,
    13: Footer13,
    14: Footer14,
    15: Footer15,
} as const;

function Header({ style, headerProps }: { style?: number; headerProps?: HeaderProps }) {
    if (!style) {
        return <Header1 {...(headerProps ?? {})} />;
    }
    const HeaderComponent = HEADER_COMPONENTS[style];
    return HeaderComponent ? <HeaderComponent {...(headerProps ?? {})} /> : <Header1 {...(headerProps ?? {})} />;
}

function Footer({ style }: { style?: number }) {
    if (!style) {
        return <Footer1 />;
    }
    const FooterComponent = FOOTER_COMPONENTS[style as keyof typeof FOOTER_COMPONENTS];
    return FooterComponent ? <FooterComponent /> : <Footer1 />;
}

interface LayoutProps {
    children?: React.ReactNode;
    headerStyle?: number;
    footerStyle?: number;
    mainClass?: string;
    noFooter?: boolean;
    headerProps?: HeaderProps;
}

export default function Layout({
    children,
    headerStyle,
    footerStyle,
    mainClass = "bg-neutral-0",
    noFooter = false,
    headerProps,
}: LayoutProps) {
    return (
        <MobileMenuCloneProvider>
            <ServerEffects />
            <div id="top" />
            <Header style={headerStyle} headerProps={headerProps} />
            <div id="smooth-wrapper">
                <div id="smooth-content" className="z-index-3">
                    <main className={mainClass}>{children}</main>
                    {!noFooter && footerStyle === 2 && (
                        <div className="footer-placeholder" aria-hidden="true" />
                    )}
                    {!noFooter && footerStyle !== 2 && (
                        <Footer style={footerStyle} />
                    )}
                </div>
                {!noFooter && footerStyle === 2 && (
                    <Footer style={footerStyle} />
                )}
            </div>
            <ParallaxSceneEffect />
            <BackToTop />
        </MobileMenuCloneProvider>
    );
}
