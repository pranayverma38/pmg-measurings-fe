import Image from "next/image";

export default function Section2() {
    return (
        <section className="sec-2-home-10" aria-label="Studio showcase">
            <div className="fix anim-zoomin">
                <Image
                    data-speed=".8"
                    className="sec-2-home-10__img"
                    src="/assets/imgs/pages/home-10/sec-2-scene.webp"
                    alt="orisa"
                    width={1920}
                    height={771}
                    style={{ width: "auto", height: "auto" }}
                />
            </div>
        </section>
    );
}
