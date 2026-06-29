import HomeLayout from "@/components/layout/HomeLayout";
import HomeTestimonials from "@/components/sections/home/HomeTestimonials";
import Section1 from "@/components/sections/index-6/Section1";
import Section5 from "@/components/sections/index-2/Section5";

export default function HomePage() {
    return (
        <HomeLayout>
            <Section1 />
            <Section5 />
            <HomeTestimonials />
        </HomeLayout>
    );
}
