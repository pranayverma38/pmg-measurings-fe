import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/portfolio-details-1/Section1";
import Section2 from "@/components/sections/portfolio-details-1/Section2";
export default function PortfolioDetails() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
