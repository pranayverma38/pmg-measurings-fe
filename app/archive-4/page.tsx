import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/archive-4/Section1";
import Section2 from "@/components/sections/index-3/Section12";


export default function Archive_4() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
