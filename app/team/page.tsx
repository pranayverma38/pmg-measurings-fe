import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/services-1/Section1";
import Section2 from "@/components/sections/index-3/Section9";
import Section3 from "@/components/sections/index-5/Section7";

export default function Team() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
                <Section3 />
            </Layout>
        </>
    );
}
