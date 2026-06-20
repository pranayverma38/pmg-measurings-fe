import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/portfolio-details-4/Section1";
import S2 from "@/components/sections/portfolio-details-3/Section2";
import S3 from "@/components/sections/portfolio-details-3/Section3";
import S5 from "@/components/sections/portfolio-details-3/Section5";
import S7 from "@/components/sections/portfolio-details-3/Section7";

export default function PortfolioDetails4() {
    return (
        <Layout headerStyle={2} footerStyle={2}>
            <Section1 />
            <S2 />
            <S3 />
            <S5 />
            <S7 />
        </Layout>
    );
}
