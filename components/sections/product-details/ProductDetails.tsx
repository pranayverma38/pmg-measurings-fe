import defaultProduct from "@/data/products/default";
import {
    getProductDetailsBySeries,
    productHref,
    type ProductSeries,
} from "@/data/products";
import { getRelatedSeries } from "@/lib/productCategories";
import { getProductCoverImage, getProductImages } from "@/lib/productImages";
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
    const productImages = series ? getProductImages(series) : [];
    const images = productImages.length > 0 ? productImages : FALLBACK_IMAGES;

    const relatedProducts = series
        ? getRelatedSeries(series, 4).map((relatedSeries) => ({
              series: relatedSeries,
              href: productHref(relatedSeries),
              cover: getProductCoverImage(relatedSeries) ?? "/assets/imgs/logopmg/pmglogo.png",
          }))
        : [];

    return (
        <>
            <ProductDetailsView
                details={details}
                images={images}
                relatedProducts={relatedProducts}
            />
            <ProductDetailsPinEffect />
            <ProductDetailsStyles />
        </>
    );
}
