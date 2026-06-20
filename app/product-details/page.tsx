import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/product-details/Section1";
import Section2 from "@/components/sections/product/Section3";
import Section3 from "@/components/sections/product-details/Section2";
import Section4 from "@/components/sections/product-details/Section3";
export default function ShopDetailsPage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 classList="bg-neutral-0" />
                <Section3 />
                <Section4 />
            </Layout>
        </>
    );
}
