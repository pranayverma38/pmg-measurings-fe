import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/product-cart/Section1";
import Section2 from "@/components/sections/product-cart/Section2";
export default function ShopCartPage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
