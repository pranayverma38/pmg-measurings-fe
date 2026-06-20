import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/contact-1/Section1";
import Section2 from "@/components/sections/about-2/Section4";
export default function Contact1Page() {
    return (
        <Layout headerStyle={2} footerStyle={2}>
            <Section1 />
            <Section2 />
        </Layout>
    );
}
