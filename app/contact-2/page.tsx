import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/about-1/Section4";
import Image from "next/image";

export default function Contact2Page() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <div className="pt-85">
                    <div className="at-banner-thumb overflow-hidden scale-up-img pt-md-0 pt-20">
                        <Image className="img-cover scale-up" data-speed=".8" src="/assets/imgs/pages/img-166.webp" alt="orisa" width={1920} height={800} />
                    </div>
                </div>
                <Section1 />
            </Layout>
        </>
    );
}
