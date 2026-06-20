import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/portfolio-details-5/Section1";
import S2 from "@/components/sections/portfolio-details-3/Section2";
import S3 from "@/components/sections/portfolio-details-3/Section3";
import S4 from "@/components/sections/portfolio-details-3/Section4";
import S5 from "@/components/sections/portfolio-details-3/Section5";
import S6 from "@/components/sections/portfolio-details-3/Section6";
import S8 from "@/components/sections/portfolio-details-3/Section8";

export default function PortfolioDetails5() {
    return (
        <Layout headerStyle={1} footerStyle={2} headerProps={{ style: "style-1" }}>
            <Section1 />
            <S2 />
            <S3 />
            <S4 />
            <S5 />
            <S6 />
            <S8 />
        </Layout>
    );
}
