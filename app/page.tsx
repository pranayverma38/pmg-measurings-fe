import HomeLayout from "@/components/layout/HomeLayout";
import AboutStory from "@/components/sections/about-1/AboutStory";
import HomeProductRangeSection from "@/components/sections/home/HomeProductRangeSection";
import HomeTestimonials from "@/components/sections/home/HomeTestimonials";
// import HomeTestimonialsGrid from "@/components/sections/home/HomeTestimonialsGrid";
import Section1 from "@/components/sections/index-6/Section1";
import Section5 from "@/components/sections/index-2/Section5";

export default function HomePage() {
    return (
        <HomeLayout>
            <Section1 />
            <Section5 />
            <HomeProductRangeSection />
            {/* <HomeTestimonialsGrid /> */}
            <AboutStory showHero={false} showProductRange={false} />
        </HomeLayout>
    );
}
