import { MobileMenuCloneProvider } from "@/components/layout/MobileMenuCloneContext";
import BackToTop from "@/components/elements/BackToTopServer";
import ParallaxSceneEffect from "@/components/effects/ParallaxSceneEffect";
import FooterHome from "@/components/layout/footer/FooterHome";
import HeaderHome from "@/components/layout/header/HeaderHome";
import ServerEffects from "@/components/layout/ServerEffects";

interface HomeLayoutProps {
    children?: React.ReactNode;
    mainClass?: string;
}

export default function HomeLayout({
    children,
    mainClass = "bg-neutral-50",
}: HomeLayoutProps) {
    return (
        <MobileMenuCloneProvider>
            <ServerEffects />
            <div id="top" />
            <HeaderHome logoVariant="home" />
            <div id="smooth-wrapper">
                <div id="smooth-content" className="z-index-3">
                    <main className={mainClass}>{children}</main>
                    <FooterHome />
                </div>
            </div>
            <ParallaxSceneEffect />
            <BackToTop />
        </MobileMenuCloneProvider>
    );
}
