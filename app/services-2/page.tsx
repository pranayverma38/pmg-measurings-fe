import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/services-2/Section1";
import Section2 from "@/components/sections/services-2/Section2";
import Section3 from "@/components/sections/index-2/Section4";
import Section4 from "@/components/sections/about-3/Section3";
import Section5 from "@/components/sections/services-2/Section3";

export default function Services_2() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
            </Layout>
        </>
    );
}
