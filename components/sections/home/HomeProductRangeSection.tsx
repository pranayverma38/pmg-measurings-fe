import HomeProductRange from "@/components/sections/home/HomeProductRange";
import { getProductCoverUrl } from "@/lib/productImages";
import type { ProductSeries } from "@/data/products/series";

const FEATURED_SERIES = [
    "MASTER SERIES",
    "SIGNATURE SERIES",
    "SIDE LOCK SERIES",
    "LOCK SERIES",
    "GLASS SERIES",
    "GRIP SERIES",
    "ECO SERIES",
    "NEW ECO SERIES",
] as const satisfies readonly ProductSeries[];

export default function HomeProductRangeSection() {
    const products = FEATURED_SERIES.map((series) => ({
        series,
        img: getProductCoverUrl(series),
    }));

    return <HomeProductRange products={products} />;
}
