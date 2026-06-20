import Image from "next/image";
import Link from "next/link";
import RevealText from "@/components/effects/RevealText";

export default function Section9() {
    return (
        <section className="sec-9-home-8">
            <div className="sec-9-home-8__bg" aria-hidden="true">
                <Image
                    src="/assets/imgs/pages/home-8/sec9-bg-blur.webp"
                    alt="orisa"
                    width={1920}
                    height={1080}
                    style={{ width: "auto", height: "auto" }}
                />
            </div>

            <div className="container-fluid sec-9-home-8__container">
                <div className="row align-items-center justify-content-between g-5">
                    {/* Left copy */}
                    <div className="col-xl-6">
                        <div className="sec-9-home-8__content">
                            <h2 className="sec-9-home-8__title at_fade_anim reveal-text">
                                <RevealText>Ready to architect your digital legacy?</RevealText>
                            </h2>
                            <p className="sec-9-home-8__lead at_fade_anim reveal-text">
                                <RevealText>Let&apos;s discuss how we can turn your vision into an impactful, human-centered digital reality.</RevealText>
                            </p>

                            <div className="sec-9-home-8__cta at_fade_anim">
                                <Link className="sec-9-home-8__cta-btn" href="/contact-1">
                                    <span>Start your design journey</span>
                                </Link>
                                <Link className="sec-9-home-8__cta-icon" href="/contact-1" aria-label="Start your design journey">
                                    <Image src="/assets/imgs/pages/home-8/sec9-btn-icon.svg" alt="orisa" width={48} height={48} />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right card */}
                    <div className="col-xl-5">
                        <Link className="sec-9-home-8__card" href="/contact-1" aria-label="Contact us">
                            <div className="sec-9-home-8__card-media">
                                <Image className="sec-9-home-8__card-visors w-100 scale-img-from-to" data-value-1="1.5" data-value-2="1" src="/assets/imgs/pages/home-8/sec9-card-visors.webp" alt="orisa" width={500} height={350} />
                            </div>
                            <div className="sec-9-home-8__card-overlay">
                                <span className="sec-9-home-8__card-kicker">
                                    <span>Contact us</span>
                                    <Image src="/assets/imgs/pages/home-8/sec9-arrow.svg" alt="orisa" width={16} height={16} />
                                </span>
                                <p className="sec-9-home-8__card-text mb-0">
                                    Great digital experiences begin with a conversation. Let&apos;s talk.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
