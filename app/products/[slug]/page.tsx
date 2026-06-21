import { notFound } from "next/navigation";
import Layout from "@/components/layout/Layout";
import Section1 from "@/components/sections/product-details/Section1";
import { PRODUCT_SERIES, getProductBySlug, productSlug } from "@/data/products";

type ProductSeriesPageProps = {
    params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
    return PRODUCT_SERIES.map((series) => ({
        slug: productSlug(series),
    }));
}

export default async function ProductSeriesPage({ params }: ProductSeriesPageProps) {
    const { slug } = await params;
    const series = getProductBySlug(slug);

    if (!series) {
        notFound();
    }

    return (
        <Layout headerStyle={16} footerStyle={16} headerProps={{ textStyle: "dark" }}>
            <Section1 series={series} />
        </Layout>
    );
}
