import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/services-details/Section1";
import Section2 from "@/components/sections/services-details/Section2";
import Section3 from "@/components/sections/services-details/Section3";
import Section4 from "@/components/sections/services-details/Section4";
import Section5 from "@/components/sections/services-details/Section5";
import Section6 from "@/components/sections/index-3/Section12";

export default function Services_details() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Section5 />
                <Section6 />
            </Layout>
        </>
    );
}
