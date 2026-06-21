import RevealText from "@/components/effects/RevealText";
import TeamCard1 from "@/components/cards/TeamCard1";
import { PRODUCT_SERIES, productHref } from "@/data/products";
import { getProductCoverImage } from "@/lib/productImages";

export default function ProductsArchive() {
    return (
        <section className="sec-1-shop-archive-1 overflow-hidden pt-150 pb-120">
            <div className="container">
                <div className="row align-items-center pb-60">
                    <div className="col-lg-6">
                        <h1 className="section-title fw-600 lh-1 reveal-text">
                            <RevealText>Our Products</RevealText>
                        </h1>
                    </div>
                    <div className="col-lg-5 ms-auto">
                        <p className="fz-font-md mb-0">
                            Explore PMG&apos;s full range of precision measuring tools — engineered for
                            accuracy, durability, and professional performance across every series.
                        </p>
                    </div>
                </div>

                <div className="row g-4 align-items-stretch">
                    {PRODUCT_SERIES.map((series) => {
                        const cover = getProductCoverImage(series);

                        return (
                            <TeamCard1
                                key={series}
                                classList="col-lg-3 col-md-4 col-sm-6"
                                linkPost={productHref(series)}
                                img={cover ?? "/assets/imgs/logopmg/pmglogo.png"}
                                name={series}
                                position=""
                                hideContent
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
