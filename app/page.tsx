import HomeLayout from "@/components/layout/HomeLayout";
import HomeProductRangeSection from "@/components/sections/home/HomeProductRangeSection";
import HomeSection8 from "@/components/sections/home/HomeSection8";
import HomeTestimonials from "@/components/sections/home/HomeTestimonials";
import HomeTestimonialsGrid from "@/components/sections/home/HomeTestimonialsGrid";
import Section1 from "@/components/sections/index-6/Section1";
import Section5 from "@/components/sections/index-2/Section5";

export default function HomePage() {
    return (
        <HomeLayout>
            <Section1 />
            <Section5 />
            <HomeProductRangeSection />
            <HomeTestimonialsGrid />
            <HomeSection8 />
        </HomeLayout>
    );
}
