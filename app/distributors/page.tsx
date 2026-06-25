import Layout from "@/components/layout/Layout";
import DistributorHero from "@/components/sections/distributors/Section1";
import DistributorBenefits from "@/components/sections/distributors/Section2";
import DistributorInquiry from "@/components/sections/distributors/Section3";
import StatsStrip from "@/components/sections/distributors/StatsStrip";

export default function DistributorsPage() {
    return (
        <Layout headerStyle={16} footerStyle={16} headerProps={{ textStyle: "dark" }}>
            <div className="distributors-page">
                <DistributorHero />
                <StatsStrip />
                <DistributorBenefits />
                <DistributorInquiry classList="bg-neutral-50" />
            </div>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .distributors-content > .row {
                            margin-inline: 0;
                        }
                        .distributors-journey-list .journey-list__item {
                            padding-inline: 0;
                        }
                    `,
                }}
            />
        </Layout>
    );
}
