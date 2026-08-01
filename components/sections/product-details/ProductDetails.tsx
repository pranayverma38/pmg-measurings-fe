import defaultProduct from "@/data/products/default";
import {
    getProductDetailsBySeries,
    productHref,
    type ProductSeries,
} from "@/data/products";
import { getRelatedSeries } from "@/lib/productCategories";
import {
    getProductCoverUrl,
    getProductImagesByColor,
    getProductImagesBySize,
} from "@/lib/productImages";
import ProductDetailsPinEffect from "./ProductDetailsPinEffect";
import ProductDetailsStyles from "./ProductDetailsStyles";
import ProductDetailsView from "./ProductDetailsView";

const FALLBACK_IMAGES = [
    "/assets/imgs/pages/product/product-details-1.webp",
    "/assets/imgs/pages/product/product-details-2.webp",
    "/assets/imgs/pages/product/product-details-3.webp",
    "/assets/imgs/pages/product/product-details-4.webp",
];

type ProductDetailsSectionProps = {
    series?: ProductSeries;
};

export default function ProductDetailsSection({ series }: ProductDetailsSectionProps) {
    const details = series ? getProductDetailsBySeries(series) : defaultProduct;
    const imagesBySize = series ? getProductImagesBySize(series, details.sizes) : {};
    const defaultSize = details.sizes[0] ?? "";
    const imagesByColor =
        series === "SPIRIT LEVEL" && defaultSize
            ? getProductImagesByColor(
                  series,
                  defaultSize,
                  details.colors.map((color) => color.title)
              )
            : {};

    const relatedProducts = series
        ? getRelatedSeries(series, 4).map((relatedSeries) => ({
              series: relatedSeries,
              href: productHref(relatedSeries),
              cover: getProductCoverUrl(relatedSeries),
          }))
        : [];

    return (
        <>
            <ProductDetailsView
                details={details}
                imagesBySize={imagesBySize}
                imagesByColor={imagesByColor}
                fallbackImages={FALLBACK_IMAGES}
                relatedProducts={relatedProducts}
            />
            <ProductDetailsPinEffect />
            <ProductDetailsStyles />
        </>
    );
}
