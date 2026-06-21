import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/about-1/Section1";
import Section2 from "@/components/sections/index-2/Section9";
import Section3 from "@/components/sections/about-1/Section2";
import Section4 from "@/components/sections/about-1/Section3";
import Section5 from "@/components/sections/index-3/Section9";
import Section6 from "@/components/sections/about-1/Section4";
import Section7 from "@/components/sections/index-3/Section11";
import Section8 from "@/components/sections/about-1/Section5";

export default function About_1() {
    return (
        <>
            <Layout headerStyle={16} footerStyle={16} headerProps={{ textStyle: "dark" }}>
                <Section1 />
                <Section2 />
                {/* <Section3 /> */}
                {/* <Section4 /> */}
                <Section5 />
                <Section6 classList="bg-neutral-50" />
                {/* <Section7 /> */}
                {/* <Section8 /> */}
            </Layout>
        </>
    );
}
