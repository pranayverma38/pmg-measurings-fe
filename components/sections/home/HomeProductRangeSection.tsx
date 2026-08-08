import HomeProductRange from "@/components/sections/home/HomeProductRange";
import { getProductCoverUrl } from "@/lib/productImages";
import type { ProductSeries } from "@/data/products/series";
import { PRODUCT_CATEGORIES } from "@/lib/productCategories";

const PRODUCT_SERIES = PRODUCT_CATEGORIES.flatMap((category) => category.series) as ProductSeries[];

export default function HomeProductRangeSection() {
    const products = PRODUCT_SERIES.map((series) => ({
        series,
        img: getProductCoverUrl(series),
    }));

    return <HomeProductRange products={products} />;
}
