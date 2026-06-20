import Layout from "@/components/layout/Layout";
import Slideshow from "@/components/slideshow/Slideshow";
import { SLIDESHOW_PROJECTS } from "@/components/slideshow/projects";

export default function PortfolioHorizontal() {
    return (
        <Layout headerStyle={2} noFooter>
            <Slideshow variant="horizontal" projects={SLIDESHOW_PROJECTS} />
        </Layout>
    );
}
