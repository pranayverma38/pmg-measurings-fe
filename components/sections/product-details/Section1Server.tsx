import Image from "next/image";
import defaultProduct from "@/data/products/default";
import { getProductDetailsBySeries, type ProductSeries } from "@/data/products";
import { getProductImages } from "@/lib/productImages";
import Section1Interactive from "./Section1Interactive";

const GALLERY_IMGS: { src: string; width: number; height: number }[] = [
    { src: "/assets/imgs/pages/product/product-details-1.webp", width: 408, height: 476 },
    { src: "/assets/imgs/pages/product/product-details-2.webp", width: 407, height: 476 },
    { src: "/assets/imgs/pages/product/product-details-3.webp", width: 408, height: 476 },
    { src: "/assets/imgs/pages/product/product-details-4.webp", width: 407, height: 476 },
    { src: "/assets/imgs/pages/product/product-details-5.webp", width: 408, height: 476 },
    { src: "/assets/imgs/pages/product/product-details-6.webp", width: 407, height: 476 },
];

type Section1ServerProps = {
    series?: ProductSeries;
};

export default function Section1Server({ series }: Section1ServerProps) {
    const details = series ? getProductDetailsBySeries(series) : defaultProduct;
    const productImages = series ? getProductImages(series) : [];
    const galleryImgs =
        productImages.length > 0
            ? productImages.map((src) => ({ src, width: 408, height: 476 }))
            : GALLERY_IMGS;

    return (
        <section className="sec-1-shop-details pt-150 pb-120">
            <div className="container product-details-container">
                <div className="row align-items-start">
                    <div className="col-lg-5 sec-1-shop-details__gallery">
                        <div className="row g-3">
                            {galleryImgs.map((img, i) => (
                                <div key={img.src} className="col-6">
                                    <div
                                        className="position-relative overflow-hidden rounded-4 bg-neutral-50"
                                        style={{ aspectRatio: `${img.width} / ${img.height}` }}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={series ? `${details.title} ${i + 1}` : "Product"}
                                            fill
                                            sizes="(max-width: 992px) 50vw, 20vw"
                                            className="object-fit-contain p-2"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="sec-1-shop-details__sticky">
                            <Section1Interactive details={details} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
