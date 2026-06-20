import Layout from "@/components/layout/Layout";
import Slideshow from "@/components/slideshow/Slideshow";
import { SLIDESHOW_PROJECTS } from "@/components/slideshow/projects";

export default function PortfolioCinema() {
    return (
        <Layout headerStyle={2} noFooter>
            <Slideshow variant="cinema" projects={SLIDESHOW_PROJECTS} />
        </Layout>
    );
}
