// Main Section1 component - now imports server component
import type { ProductSeries } from "@/data/products";
import Section1Server from "./Section1Server";
import ProductDetailsPinEffect from "./ProductDetailsPinEffect";

type Section1Props = {
    series?: ProductSeries;
};

export default function Section1({ series }: Section1Props) {
    return (
        <>
            <Section1Server series={series} />
            <ProductDetailsPinEffect />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        @media (min-width: 992px) {
                            .sec-1-shop-details .product-details-container {
                                width: 100%;
                                max-width: 1380px;
                                margin-left: auto;
                                margin-right: auto;
                                padding-left: 15px;
                                padding-right: 15px;
                            }
                        }
                    `,
                }}
            />
        </>
    );
}
