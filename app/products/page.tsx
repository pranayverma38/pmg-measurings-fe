import Layout from "@/components/layout/Layout";
import ProductsArchive from "@/components/sections/products/ProductsArchive";

export default function ProductsPage() {
    return (
        <Layout headerStyle={16} footerStyle={16} headerProps={{ textStyle: "light" }}>
            <ProductsArchive />
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        .products-page .page-content > .row {
                            margin-inline: 0;
                        }

                        .products-hero__grid {
                            display: grid;
                            gap: 40px;
                            align-items: start;
                        }
                        .products-hero__highlights {
                            display: grid;
                            gap: 14px;
                        }
                        .products-hero__highlights li {
                            display: flex;
                            align-items: flex-start;
                            gap: 12px;
                            font-size: 0.95rem;
                            font-weight: 500;
                            line-height: 1.5;
                            color: rgba(255, 255, 255, 0.78);
                        }
                        .products-hero__aside {
                            display: grid;
                            gap: 16px;
                        }
                        .products-hero__stat-card {
                            padding: 28px 24px;
                            background: #111111;
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            border-radius: 12px;
                        }
                        .products-hero__stat-card--muted {
                            background: #1a1a1a;
                            border-color: rgba(255, 255, 255, 0.1);
                        }
                        .products-hero__stat-card--muted .products-hero__stat-value,
                        .products-hero__stat-card--muted .products-hero__stat-label {
                            color: #fff;
                        }
                        .products-hero__stat-card--muted .products-hero__stat-label {
                            color: rgba(255, 255, 255, 0.72);
                        }
                        .products-hero__stat-value {
                            margin: 0 0 8px;
                            font-size: 2.5rem;
                            font-weight: 600;
                            line-height: 1;
                            color: #ffffff;
                        }
                        .products-hero__stat-label {
                            margin: 0;
                            font-size: 0.9rem;
                            font-weight: 500;
                            line-height: 1.55;
                            color: rgba(255, 255, 255, 0.58);
                        }
                        .products-hero__catalogue-btn {
                            display: inline-flex;
                            justify-content: center;
                            width: 100%;
                            background: #ed431c !important;
                            color: #fff !important;
                            border: 1px solid #ed431c;
                        }

                        .products-stats {
                            background: #111111;
                            border-top: 1px solid rgba(255, 255, 255, 0.08);
                            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
                        }
                        .products-stats__grid {
                            display: grid;
                            grid-template-columns: 1fr;
                            gap: 0;
                            padding: 48px 0;
                        }
                        .products-stats__item {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            text-align: center;
                            padding: 32px 24px;
                        }
                        .products-stats__item + .products-stats__item {
                            border-top: 1px solid rgba(255, 255, 255, 0.08);
                        }
                        .products-stats__value {
                            font-size: 2rem;
                            font-weight: 600;
                            line-height: 1.1;
                            color: #ffffff;
                        }
                        .products-stats__label {
                            max-width: 15rem;
                            font-size: 0.95rem;
                            font-weight: 500;
                            line-height: 1.6;
                            color: rgba(255, 255, 255, 0.62);
                        }

                        .products-nav {
                            position: sticky;
                            top: 0;
                            z-index: 20;
                            background: rgba(8, 8, 8, 0.94);
                            backdrop-filter: blur(16px);
                            -webkit-backdrop-filter: blur(16px);
                            border-bottom: 1px solid rgba(255, 255, 255, 0.07);
                        }
                        .products-nav__inner {
                            display: flex;
                            gap: 8px;
                            padding: 14px 0;
                            overflow-x: auto;
                            scrollbar-width: none;
                            -ms-overflow-style: none;
                        }
                        .products-nav__inner::-webkit-scrollbar {
                            display: none;
                        }
                        .products-nav__pill {
                            flex-shrink: 0;
                            padding: 10px 18px;
                            font-size: 0.85rem;
                            font-weight: 500;
                            line-height: 1;
                            color: rgba(255, 255, 255, 0.58);
                            background: transparent;
                            border: 1px solid rgba(255, 255, 255, 0.12);
                            border-radius: 999px;
                            cursor: pointer;
                            transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
                        }
                        .products-nav__pill:hover {
                            color: #ffffff;
                            border-color: rgba(255, 255, 255, 0.3);
                        }
                        .products-nav__pill.is-active {
                            color: #fff;
                            background: #ed431c;
                            border-color: #ed431c;
                        }

                        .products-category + .products-category {
                            margin-top: 80px;
                            padding-top: 80px;
                            border-top: 1px solid rgba(255, 255, 255, 0.08);
                        }
                        .products-category__header {
                            display: grid;
                            grid-template-columns: auto 1fr auto;
                            gap: 20px 24px;
                            align-items: end;
                            margin-bottom: 36px;
                        }
                        .products-category__index {
                            font-size: 0.8rem;
                            font-weight: 600;
                            letter-spacing: 0.12em;
                            color: rgba(255, 255, 255, 0.35);
                        }
                        .products-category__title {
                            margin: 0 0 8px;
                            font-size: 1.5rem;
                            font-weight: 600;
                            line-height: 1.25;
                            color: #ffffff;
                        }
                        .products-category__description {
                            margin: 0;
                            font-size: 0.95rem;
                            line-height: 1.6;
                            color: rgba(255, 255, 255, 0.62);
                        }
                        .products-category__count {
                            flex-shrink: 0;
                            font-size: 0.8rem;
                            font-weight: 500;
                            letter-spacing: 0.06em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.42);
                        }

                        .products-grid {
                            display: grid;
                            grid-template-columns: repeat(2, minmax(0, 1fr));
                            gap: 20px;
                        }
                        .products-card {
                            display: flex;
                            flex-direction: column;
                            height: 100%;
                            color: inherit;
                            text-decoration: none;
                            background: #111111;
                            border: 1px solid rgba(255, 255, 255, 0.08);
                            border-radius: 12px;
                            overflow: hidden;
                            transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
                        }
                        .products-card:hover {
                            transform: translateY(-4px);
                            border-color: rgba(237, 67, 28, 0.35);
                            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
                        }
                        .products-card:focus-visible {
                            outline: 2px solid #ed431c;
                            outline-offset: 3px;
                            transform: translateY(-4px);
                            border-color: rgba(237, 67, 28, 0.35);
                            box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
                        }
                        .products-card__media {
                            position: relative;
                            aspect-ratio: 1 / 1;
                            background: linear-gradient(180deg, #1a1a1a 0%, #141414 100%);
                            overflow: hidden;
                        }
                        .products-card__img {
                            object-fit: contain;
                            padding: 20px;
                            transition: transform 0.3s ease, opacity 0.3s ease;
                        }
                        .products-card__overlay {
                            position: absolute;
                            inset: 0;
                            display: flex;
                            flex-direction: column;
                            justify-content: flex-end;
                            gap: 12px;
                            padding: 18px;
                            color: #fff;
                            background: rgba(1, 13, 33, 0.8);
                            opacity: 0;
                            transform: translateY(10px);
                            transition: opacity 0.25s ease, transform 0.25s ease;
                            pointer-events: none;
                            z-index: 1;
                        }
                        .products-card__overlay-copy {
                            display: grid;
                            gap: 5px;
                        }
                        .products-card__overlay-list {
                            display: grid;
                            gap: 4px;
                            margin: 0;
                            padding: 0;
                            list-style: none;
                        }
                        .products-card__overlay-label {
                            font-size: 0.66rem;
                            font-weight: 600;
                            letter-spacing: 0.08em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.78);
                        }
                        .products-card__overlay-text {
                            margin: 0;
                            font-size: 0.78rem;
                            font-weight: 500;
                            line-height: 1.35;
                            color: #fff;
                        }
                        .products-card__overlay-text--small {
                            font-size: 0.72rem;
                            font-weight: 400;
                            color: rgba(255, 255, 255, 0.92);
                        }
                        .products-card__arrow {
                            position: absolute;
                            top: 14px;
                            right: 14px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 36px;
                            height: 36px;
                            color: #fff;
                            background: #ed431c;
                            border: 1px solid transparent;
                            border-radius: 50%;
                            opacity: 0;
                            transform: translateY(6px);
                            transition: opacity 0.2s ease, transform 0.2s ease;
                            z-index: 2;
                        }
                        .products-card:hover .products-card__arrow,
                        .products-card:focus-visible .products-card__arrow {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        .products-card:hover .products-card__img,
                        .products-card:focus-visible .products-card__img {
                            transform: scale(1.04);
                            opacity: 0.18;
                        }
                        .products-card:hover .products-card__overlay,
                        .products-card:focus-visible .products-card__overlay {
                            opacity: 1;
                            transform: translateY(0);
                        }
                        .products-card__body {
                            display: flex;
                            flex-direction: column;
                            flex: 1;
                            gap: 10px;
                            padding: 18px 18px 20px;
                        }
                        .products-card__tag {
                            align-self: flex-start;
                            padding: 4px 10px;
                            font-size: 0.7rem;
                            font-weight: 600;
                            letter-spacing: 0.06em;
                            text-transform: uppercase;
                            color: rgba(255, 255, 255, 0.55);
                            background: rgba(255, 255, 255, 0.07);
                            border-radius: 999px;
                        }
                        .products-card__title {
                            margin: 0;
                            font-size: 1rem;
                            font-weight: 600;
                            line-height: 1.35;
                            color: #ffffff;
                        }
                        .products-card__link {
                            display: inline-flex;
                            align-items: center;
                            gap: 8px;
                            font-size: 0.85rem;
                            font-weight: 500;
                            color: #ed431c;
                            transition: gap 0.2s ease;
                        }
                        .products-card:hover .products-card__link {
                            gap: 12px;
                        }

                        .products-cta {
                            padding: 72px 0 80px;
                            background: #0d0d0d;
                            border-top: 1px solid rgba(255,255,255,0.06);
                        }
                        .products-cta__layout {
                            display: flex;
                            flex-direction: column;
                            align-items: flex-start;
                            gap: 32px;
                        }
                        .products-cta__label {
                            color: rgba(255, 255, 255, 0.72) !important;
                        }
                        .products-cta__copy {
                            max-width: 38rem;
                        }
                        .products-cta__copy h2,
                        .products-cta__copy p {
                            color: #fff;
                        }
                        .products-cta__copy p {
                            color: rgba(255, 255, 255, 0.72);
                        }
                        .products-cta__btn {
                            background: #ed431c !important;
                            color: #fff !important;
                            border-color: #ed431c !important;
                        }
                        .products-cta__btn:hover {
                            background: #d93a17 !important;
                            border-color: #d93a17 !important;
                        }

                        @media (min-width: 768px) {
                            .products-hero__grid {
                                grid-template-columns: 1.4fr 0.9fr;
                                gap: 48px;
                            }
                            .products-stats__grid {
                                grid-template-columns: repeat(3, 1fr);
                                padding: 56px 0;
                            }
                            .products-stats__item {
                                padding: 16px 32px;
                            }
                            .products-stats__item + .products-stats__item {
                                border-top: none;
                                border-left: 1px solid rgba(255, 255, 255, 0.08);
                            }
                            .products-grid {
                                grid-template-columns: repeat(3, minmax(0, 1fr));
                                gap: 24px;
                            }
                            .products-cta__layout {
                                flex-direction: row;
                                align-items: center;
                                justify-content: space-between;
                                gap: 48px;
                            }
                        }
                        @media (min-width: 992px) {
                            .products-grid {
                                grid-template-columns: repeat(4, minmax(0, 1fr));
                            }
                        }
                        @media (max-width: 575px) {
                            .products-hero__stat-card {
                                display: none;
                            }
                            .products-hero__aside {
                                display: grid;
                            }
                            .products-category__header {
                                grid-template-columns: 1fr auto;
                            }
                            .products-category__index {
                                display: none;
                            }
                        }
                    `,
                }}
            />
        </Layout>
    );
}
