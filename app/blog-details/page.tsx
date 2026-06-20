import Layout from "@/components/layout/Layout";

import Section1 from "@/components/sections/blog-details/Section1";
import Section2 from "@/components/sections/blog-details/Section2";


export default function Blog_details() {
    return (
        <>
            <Layout headerStyle={2} footerStyle={2}>
                <Section1 />
                <Section2 />
            </Layout>
        </>
    );
}
