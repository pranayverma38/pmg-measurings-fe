import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/archive-1/Section1";
import Section2 from "@/components/sections/archive-1/Section2";
import Section3 from "@/components/sections/index-3/Section12";


export default function Archive_1() {
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
