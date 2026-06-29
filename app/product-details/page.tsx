import Layout from "@/components/layout/Layout";
import ProductDetailsSection from "@/components/sections/product-details/ProductDetails";

export default function ShopDetailsPage() {
    return (
        <>
            <Layout headerStyle={16} footerStyle={16} headerProps={{ textStyle: "dark" }}>
                <ProductDetailsSection />
            </Layout>
        </>
    );
}
