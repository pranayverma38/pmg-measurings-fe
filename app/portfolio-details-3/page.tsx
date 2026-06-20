import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/portfolio-details-3/Section1";
import Section2 from "@/components/sections/portfolio-details-3/Section2";
import Section3 from "@/components/sections/portfolio-details-3/Section3";
import Section4 from "@/components/sections/portfolio-details-3/Section4";
import Section5 from "@/components/sections/portfolio-details-3/Section5";
import Section6 from "@/components/sections/portfolio-details-3/Section6";
import Section7 from "@/components/sections/portfolio-details-3/Section7";
import Section8 from "@/components/sections/portfolio-details-3/Section8";

export default function PortfolioDetails3() {
    return (
        <Layout headerStyle={2} footerStyle={2}>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
        </Layout>
    );
}
