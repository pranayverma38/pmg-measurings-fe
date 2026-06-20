import Layout from "@/components/layout/Layout";
import Slideshow from "@/components/slideshow/Slideshow";
import { SLIDESHOW_PROJECTS } from "@/components/slideshow/projects";

export default function PortfolioStack() {
    return (
        <Layout headerStyle={2} noFooter>
            <Slideshow variant="stack" projects={SLIDESHOW_PROJECTS} />
        </Layout>
    );
}
