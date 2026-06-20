import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/product/Section1";
import Section2 from "@/components/sections/product/Section2";
import Section3 from "@/components/sections/product/Section3";
import Section4 from "@/components/sections/product/Section4"
import Section5 from "@/components/sections/index-5/Section8";
export default function ShopArchivePage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
                <Section3 classList="bg-neutral-50" />
                <Section4 />
                <Section5 />
            </Layout>
        </>
    );
}
