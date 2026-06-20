import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/faqs/Section1";
import Section2 from "@/components/sections/faqs/Section2";
import Section3 from "@/components/sections/faqs/Section3";
import Section4 from "@/components/sections/faqs/Section4";

export default function FaqsPage() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
            </Layout>
        </>
    );
}
