import Image from "next/image";
import Link from "next/link";
import RevealText from "@/components/effects/RevealText";

const rail1Images = [
    "/assets/imgs/pages/home-8/sec7-img-1.webp",
    "/assets/imgs/pages/home-8/sec7-img-2.webp",
    "/assets/imgs/pages/home-8/sec7-img-3.webp",
    "/assets/imgs/pages/home-8/sec7-img-1.webp",
    "/assets/imgs/pages/home-8/sec7-img-2.webp",
    "/assets/imgs/pages/home-8/sec7-img-3.webp",
    "/assets/imgs/pages/home-8/sec7-img-1.webp",
    "/assets/imgs/pages/home-8/sec7-img-2.webp",
    "/assets/imgs/pages/home-8/sec7-img-3.webp",
];

const rail2Images = [
    "/assets/imgs/pages/home-8/sec7-img-4.webp",
    "/assets/imgs/pages/home-8/sec7-img-5.webp",
    "/assets/imgs/pages/home-8/sec7-img-6.webp",
    "/assets/imgs/pages/home-8/sec7-img-4.webp",
    "/assets/imgs/pages/home-8/sec7-img-5.webp",
    "/assets/imgs/pages/home-8/sec7-img-6.webp",
    "/assets/imgs/pages/home-8/sec7-img-4.webp",
    "/assets/imgs/pages/home-8/sec7-img-5.webp",
    "/assets/imgs/pages/home-8/sec7-img-6.webp",
];

function ArrowIcon() {
    return (
        <>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 0 9.9375 0L3.1875 0C2.77329 0 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
            </svg>
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 0 9.9375 0L3.1875 0C2.77329 0 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
            </svg>
        </>
    );
}

export default function Section7() {
    return (
        <section className="sec-7-home-8">
            <div className="container-fluid sec-7-home-8__container">
                <div className="sec-7-home-8__top d-flex align-items-end justify-content-between flex-wrap gap-3">
                    <h2 className="sec-7-home-8__title mb-0 at_fade_anim reveal-text" data-start="100%" data-delay=".1" data-fade-from="bottom">
                        <RevealText>Let&apos;s Craft Something Extraordinary Together</RevealText>
                    </h2>
                    <Link className="sec-7-home-8__cta at-btn btn-sm at_fade_anim" href="/contact-1">
                        <span>
                            <span className="text-1">Get a free quote</span>
                            <span className="text-2">Get a free quote</span>
                        </span>
                        <i>
                            <ArrowIcon />
                        </i>
                    </Link>
                </div>
            </div>

            {/* Rails (uses Swiper like Home 7 sec-3 + GSAP scroll-move-right/left) */}
            <div className="sec-7-home-8__rails">
                {/* Row 1: move right-to-left (Swiper loop), scroll drives whole rail left -> right */}
                <div className="sec-7-home-8__rail">
                    <div className="swiper about-me-slider-active at-item-anime-area">
                        <div className="swiper-wrapper">
                            {Array.from({ length: 6 }).flatMap((_, setIdx) =>
                                rail1Images.map((src, i) => (
                                    <div className="swiper-slide" key={`r1-${setIdx}-${i}`}>
                                        <div className="about-me-slider-thumb at-item-anime marque">
                                            <Image className="w-100 rounded-4" src={src} alt="orisa" width={600} height={400} />
                                        </div>
                                    </div>
                                ))
                            )}
                            <div className="swiper-slide" key="r1-last">
                                <div className="about-me-slider-thumb at-item-anime marque">
                                    <Image className="w-100 rounded-4" src={rail1Images[0]} alt="orisa" width={600} height={400} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Row 2: move left-to-right (visual reverse), scroll drives whole rail right -> left */}
                <div className="sec-7-home-8__rail sec-7-home-8__rail--reverse">
                    <div className="swiper about-me-slider-active at-item-anime-area-2">
                        <div className="swiper-wrapper">
                            {Array.from({ length: 6 }).flatMap((_, setIdx) =>
                                rail2Images.map((src, i) => (
                                    <div className="swiper-slide" key={`r2-${setIdx}-${i}`}>
                                        <div className="about-me-slider-thumb at-item-anime-2 marque">
                                            <Image className="w-100 rounded-4" src={src} alt="orisa" width={600} height={400} />
                                        </div>
                                    </div>
                                ))
                            )}
                            <div className="swiper-slide" key="r2-last">
                                <div className="about-me-slider-thumb at-item-anime-2 marque">
                                    <Image className="w-100 rounded-4" src={rail2Images[0]} alt="orisa" width={600} height={400} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid sec-7-home-8__container">
                <div className="sec-7-home-8__about d-flex align-items-start gap-4 at_fade_anim">
                    <div className="sec-7-home-8__mark" aria-hidden="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M41.5 0H0L41.5 41.5H0L41.5 83H83L41.5 41.5H83L41.5 0Z" fill="currentColor" />
                        </svg>
                    </div>
                    <p className="sec-7-home-8__desc mb-0">
                        <span className="fw-600 reveal-text"><RevealText>Orisa is a digital agency creating impactful digital experiences. We think like strategists and execute with clarity, creativity, and performance.</RevealText></span>
                    </p>
                </div>
            </div>
        </section>
    );
}
