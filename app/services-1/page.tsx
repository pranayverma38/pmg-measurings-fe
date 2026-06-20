import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/services-1/Section1";
import Section2 from "@/components/sections/index-1/Section4";
import Section3 from "@/components/sections/about-3/Section5";
import Section4 from "@/components/sections/index-2/Section12";
import Section5 from "@/components/sections/index-1/Section11";
import Section6 from "@/components/sections/about-1/Section4";

export default function Services_1() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 className="pt-0" showNoise={false} />
                <Section5 classList="border-top-100" />
                <Section6 classList="bg-neutral-50" />
            </Layout>
        </>
    );
}
