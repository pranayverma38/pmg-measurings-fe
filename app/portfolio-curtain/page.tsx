import Layout from "@/components/layout/Layout";
import Slideshow from "@/components/slideshow/Slideshow";
import { SLIDESHOW_PROJECTS } from "@/components/slideshow/projects";

export default function PortfolioCurtain() {
    return (
        <Layout headerStyle={1} headerProps={{ style: "style-1" }} noFooter>
            <Slideshow variant="curtain" projects={SLIDESHOW_PROJECTS} />
        </Layout>
    );
}
