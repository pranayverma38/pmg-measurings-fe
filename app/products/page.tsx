import Layout from "@/components/layout/Layout";
import ProductsArchive from "@/components/sections/products/ProductsArchive";

export default function ProductsPage() {
    return (
        <Layout headerStyle={16} footerStyle={16} headerProps={{ textStyle: "dark" }}>
            <ProductsArchive />
        </Layout>
    );
}
