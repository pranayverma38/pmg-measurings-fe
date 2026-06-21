import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/product-details/Section1";

export default function ShopDetailsPage() {
    return (
        <>
            <Layout headerStyle={16} footerStyle={16} headerProps={{ textStyle: "dark" }}>
                <Section1 />
            </Layout>
        </>
    );
}
