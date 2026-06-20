import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/team-details/Section-1";
import Section2 from "@/components/sections/team-details/Section-2";


export default function Team() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
