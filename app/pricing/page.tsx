import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/index-2/Section12";
import Section2 from "@/components/sections/services-details/Section4";
import Section3 from "@/components/sections/about-3/Section7";

export default function Pricing() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 className="pt-100" showNoise={false} />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
