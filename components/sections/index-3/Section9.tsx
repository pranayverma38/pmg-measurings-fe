import RevealText from "@/components/effects/RevealText";
import TeamCard1 from "@/components/cards/TeamCard1";

// Home 3 Section 9 - Team

const PMG_PRODUCTS_BASE = "/assets/imgs/pmgproducts";

const productSrc = (series: string, file: string) =>
    `${PMG_PRODUCTS_BASE}/${encodeURIComponent(series)}/${file}`;

const TEAM = [
    { classList: "col-lg-3 col-md-6", linkPost: "/team-details", img: productSrc("SIDE LOCK SERIES", "IMG_8269.png"), name: "PMG Side Lock Series" },
    { classList: "col-lg-3 col-md-6", linkPost: "/team-details", img: productSrc("NEW ECO SERIES", "IMG_8280.png"), name: "PMG New Eco Series" },
    { classList: "col-lg-3 col-md-6", linkPost: "/team-details", img: productSrc("LOCK SERIES", "IMG_8051.png"), name: "PMG Lock Series" },
    { classList: "col-lg-3 col-md-6", linkPost: "/team-details", img: productSrc("SIGNATURE SERIES", "IMG_8162.png"), name: "PMG Signature Series" },
];

export default function Section9() {
    return (
        <section className="home-3-section-9 p-relative">
            {/* Background grid */}
            <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-n1 opacity-10">
                {[0, 1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                        key={i}
                        className={
                            i === 3
                                ? "position-relative h-100 border-r border-dark/01 md:border-none"
                                : "position-relative h-100 overflow-hidden d-md-block border-dark/01"
                        }
                    >
                        <div className="absolute bottom-0 left-0 right-0 border-white/10" />
                        {i === 3 && (
                            <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
                        )}
                    </div>
                ))}
            </div>

            <div className="pt-120 pb-120 overflow-hidden">
                <div className="container">
                    <div className="row align-items-center pb-60">
                        <div className="col-lg-5 h-100">
                            <h1 className="section-title fw-500 fz-ds-1 lh-1 reveal-text">
                                <RevealText>LEGACY OF PRECISION</RevealText>
                            </h1>
                        </div>
                        <div className="col-lg-5 ms-auto">
                            <p className="fz-font-md mb-0">
                                PMG was founded on a singular mission: to redefine the standards of industrial
                                measurement. Our journey began with a commitment to precision engineering and the
                                relentless pursuit of durability. Over decades, we have evolved from a specialized
                                manufacturer into a global leader in hand tools, delivering excellence to the most
                                demanding markets worldwide.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 align-items-stretch">
                        {TEAM.map((member, index) => {
                            const isParallax = index === 0 || index === 2;

                            if (isParallax) {
                                return (
                                    <div
                                        key={index}
                                        className={member.classList}
                                        data-parallax
                                        data-parallax-speed="0.9"
                                    >
                                        <TeamCard1
                                            linkPost={member.linkPost}
                                            img={member.img}
                                            name={member.name}
                                            position=""
                                            hideContent
                                        />
                                    </div>
                                );
                            }

                            return (
                                <TeamCard1
                                    key={index}
                                    classList={member.classList}
                                    linkPost={member.linkPost}
                                    img={member.img}
                                    name={member.name}
                                    position=""
                                    hideContent
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
