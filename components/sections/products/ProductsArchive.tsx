import {
    PRODUCT_SERIES,
    getProductDetailsBySeries,
    productHref,
} from "@/data/products";
import { PRODUCT_CATEGORIES } from "@/lib/productCategories";
import { getProductCoverUrl } from "@/lib/productImages";
import ProductsArchiveView, {
    type ProductCategoryData,
} from "@/components/sections/products/ProductsArchiveView";

export default function ProductsArchive() {
    const categories: ProductCategoryData[] = PRODUCT_CATEGORIES.map((category, index) => ({
        id: category.id,
        label: category.label,
        shortLabel: category.shortLabel,
        description: category.description,
        index,
        products: category.series.map((series) => ({
            series,
            cover: getProductCoverUrl(series),
            href: productHref(series),
            details: getProductDetailsBySeries(series),
        })),
    }));

    return <ProductsArchiveView categories={categories} totalSeries={PRODUCT_SERIES.length} />;
}
