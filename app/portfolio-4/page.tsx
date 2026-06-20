import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/portfolio-4/Section1";
import Section2 from "@/components/sections/about-3/Section7";

export default function Portfolio4Page() {
    return (
        <Layout headerStyle={2} footerStyle={2}>
            <Section1 />
            <Section2 />
        </Layout>
    );
}
