import Layout from "@/components/layout/Layout";
import ServiceImageHoverEffect from "@/components/effects/ServiceImageHoverEffect";
import Section1 from "@/components/sections/index-1/Section1";
import Section2 from "@/components/sections/index-1/Section2";
import Section3 from "@/components/sections/index-1/Section3";
import Section4 from "@/components/sections/index-1/Section4";
import Section5 from "@/components/sections/index-1/Section5";
import Section6 from "@/components/sections/index-1/Section6";
import Section7 from "@/components/sections/index-1/Section7";
import Section8 from "@/components/sections/index-1/Section8";
import Section9 from "@/components/sections/index-1/Section9";
import Section10 from "@/components/sections/index-1/Section10";
import Section11 from "@/components/sections/index-1/Section11";
import Section12 from "@/components/sections/index-1/Section12";
import Section13 from "@/components/sections/index-1/Section13";
export default function Home() {
    return (
        <>
            <Layout>
                <Section1 />
                <Section2 />
                <Section3 />
                <ServiceImageHoverEffect>
                    <Section4 />
                </ServiceImageHoverEffect>
                <Section5 />
                <Section6 />
                <Section7 />
                <Section8 />
                <Section9 />
                <Section10 />
                <Section11 />
                <Section12 />
                <Section13 />
            </Layout>
        </>
    );
}
