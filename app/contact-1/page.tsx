import Layout from "@/components/layout/Layout";
import Section6 from "@/components/sections/about-1/Section4";
import Section2 from "@/components/sections/about-2/Section4";

export default function Contact1Page() {
    return (
        <Layout headerStyle={16} footerStyle={16} headerProps={{ textStyle: "dark" }}>
            <Section6 classList="bg-neutral-50" />
            <Section2 />
        </Layout>
    );
}
