import Layout from "@/components/layout/Layout";
import CursorTrailEffect from "@/components/effects/CursorTrailEffect";
import Section1 from "@/components/sections/index-10/Section1";
import Section2 from "@/components/sections/index-10/Section2";
import Section3 from "@/components/sections/index-10/Section3";
import Section4 from "@/components/sections/index-10/Section4";
import Section5 from "@/components/sections/index-10/Section5";
import Section6 from "@/components/sections/index-10/Section6";

export default function Home_10() {
    return (
        <Layout headerStyle={10} footerStyle={10}>
            <Section1 />
            <CursorTrailEffect />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
        </Layout>
    );
}
