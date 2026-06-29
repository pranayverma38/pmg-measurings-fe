export default function ProductDetailsStyles() {
    return (
        <style
            dangerouslySetInnerHTML={{
                __html: `
                    .pd-page {
                        background: #fafafa;
                    }

                    .pd-page__breadcrumb {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: center;
                        gap: 8px;
                        margin-bottom: 32px;
                        font-size: 0.85rem;
                        font-weight: 500;
                        color: rgba(0, 0, 0, 0.48);
                    }
                    .pd-page__breadcrumb a {
                        color: inherit;
                        text-decoration: none;
                        transition: color 0.2s ease;
                    }
                    .pd-page__breadcrumb a:hover {
                        color: #111;
                    }
                    .pd-page__breadcrumb-sep {
                        color: rgba(0, 0, 0, 0.24);
                    }
                    .pd-page__breadcrumb-current {
                        color: #111;
                    }

                    .pd-page__hero {
                        display: grid;
                        gap: 40px;
                        align-items: start;
                    }

                    .pd-page__gallery {
                        display: grid;
                        gap: 16px;
                    }
                    .pd-page__main-image {
                        position: relative;
                        aspect-ratio: 1 / 1;
                        background: linear-gradient(145deg, #fff 0%, #f0f0f0 100%);
                        border: 1px solid rgba(0, 0, 0, 0.08);
                        border-radius: 16px;
                        overflow: hidden;
                    }
                    .pd-page__main-image img {
                        object-fit: contain;
                        padding: 32px;
                        transition: opacity 0.3s ease, transform 0.4s ease;
                    }
                    .pd-page__main-image.is-switching img {
                        opacity: 0.6;
                        transform: scale(0.98);
                    }
                    .pd-page__thumbs {
                        display: grid;
                        grid-template-columns: repeat(auto-fill, minmax(72px, 1fr));
                        gap: 10px;
                    }
                    .pd-page__thumb {
                        position: relative;
                        aspect-ratio: 1 / 1;
                        padding: 0;
                        background: #fff;
                        border: 2px solid rgba(0, 0, 0, 0.08);
                        border-radius: 10px;
                        overflow: hidden;
                        cursor: pointer;
                        transition: border-color 0.2s ease, box-shadow 0.2s ease;
                    }
                    .pd-page__thumb:hover {
                        border-color: rgba(0, 0, 0, 0.2);
                    }
                    .pd-page__thumb.is-active {
                        border-color: #111;
                        box-shadow: 0 0 0 1px #111;
                    }
                    .pd-page__thumb img {
                        object-fit: contain;
                        padding: 8px;
                    }

                    .pd-page__info {
                        display: grid;
                        gap: 24px;
                    }
                    .pd-page__badge {
                        display: inline-flex;
                        align-items: center;
                        align-self: flex-start;
                        padding: 6px 14px;
                        font-size: 0.72rem;
                        font-weight: 600;
                        letter-spacing: 0.08em;
                        text-transform: uppercase;
                        color: rgba(0, 0, 0, 0.62);
                        background: #fff;
                        border: 1px solid rgba(0, 0, 0, 0.1);
                        border-radius: 999px;
                    }
                    .pd-page__title {
                        margin: 0;
                        font-size: clamp(1.75rem, 4vw, 2.75rem);
                        font-weight: 600;
                        line-height: 1.12;
                        letter-spacing: -0.03em;
                        color: #111;
                    }
                    .pd-page__excerpt {
                        margin: 0;
                        font-size: 1.05rem;
                        font-weight: 500;
                        line-height: 1.65;
                        color: rgba(0, 0, 0, 0.62);
                    }
                    .pd-page__quick-specs {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 12px;
                    }
                    .pd-page__quick-spec {
                        padding: 16px 18px;
                        background: #fff;
                        border: 1px solid rgba(0, 0, 0, 0.08);
                        border-radius: 12px;
                    }
                    .pd-page__quick-spec-label {
                        display: block;
                        margin-bottom: 6px;
                        font-size: 0.72rem;
                        font-weight: 600;
                        letter-spacing: 0.06em;
                        text-transform: uppercase;
                        color: rgba(0, 0, 0, 0.42);
                    }
                    .pd-page__quick-spec-value {
                        font-size: 0.95rem;
                        font-weight: 600;
                        line-height: 1.4;
                        color: #111;
                    }

                    .pd-page__option-label {
                        display: block;
                        margin-bottom: 12px;
                        font-size: 0.85rem;
                        font-weight: 600;
                        letter-spacing: 0.04em;
                        text-transform: uppercase;
                        color: rgba(0, 0, 0, 0.55);
                    }
                    .pd-page__sizes {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 10px;
                    }
                    .pd-page__size {
                        min-width: 52px;
                        height: 48px;
                        padding: 0 16px;
                        font-size: 0.9rem;
                        font-weight: 600;
                        color: #111;
                        background: #fff;
                        border: 2px solid rgba(0, 0, 0, 0.1);
                        border-radius: 10px;
                        cursor: pointer;
                        transition: border-color 0.2s ease, background 0.2s ease, color 0.2s ease;
                    }
                    .pd-page__size:hover {
                        border-color: rgba(0, 0, 0, 0.28);
                    }
                    .pd-page__size.is-active {
                        color: #fff;
                        background: #111;
                        border-color: #111;
                    }
                    .pd-page__colors {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 12px;
                    }
                    .pd-page__color {
                        width: 40px;
                        height: 40px;
                        padding: 0;
                        border: 3px solid transparent;
                        border-radius: 50%;
                        cursor: pointer;
                        box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.12);
                        transition: transform 0.2s ease, box-shadow 0.2s ease;
                    }
                    .pd-page__color:hover {
                        transform: scale(1.08);
                    }
                    .pd-page__color.is-active {
                        box-shadow: 0 0 0 2px #fff, 0 0 0 4px #111;
                    }

                    .pd-page__actions {
                        display: flex;
                        flex-wrap: wrap;
                        gap: 12px;
                        padding-top: 8px;
                    }
                    .pd-page__btn {
                        display: inline-flex;
                        align-items: center;
                        justify-content: center;
                        gap: 10px;
                        padding: 16px 28px;
                        font-size: 0.9rem;
                        font-weight: 600;
                        text-decoration: none;
                        border-radius: 999px;
                        transition: transform 0.2s ease, background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
                    }
                    .pd-page__btn:hover {
                        transform: translateY(-2px);
                    }
                    .pd-page__btn--primary {
                        color: #fff;
                        background: #111;
                        border: 1px solid #111;
                    }
                    .pd-page__btn--primary:hover {
                        color: #fff;
                        background: #333;
                        border-color: #333;
                    }
                    .pd-page__btn--outline {
                        color: #111;
                        background: transparent;
                        border: 1px solid rgba(0, 0, 0, 0.18);
                    }
                    .pd-page__btn--outline:hover {
                        color: #111;
                        border-color: rgba(0, 0, 0, 0.4);
                    }

                    .pd-page__details {
                        margin-top: 80px;
                        padding-top: 80px;
                        border-top: 1px solid rgba(0, 0, 0, 0.08);
                    }
                    .pd-page__details-grid {
                        display: grid;
                        gap: 48px;
                    }
                    .pd-page__section-label {
                        display: inline-flex;
                        margin-bottom: 20px;
                        font-size: 0.75rem;
                        font-weight: 600;
                        letter-spacing: 0.1em;
                        text-transform: uppercase;
                        color: rgba(0, 0, 0, 0.42);
                    }
                    .pd-page__description p {
                        margin: 0 0 18px;
                        font-size: 1rem;
                        font-weight: 500;
                        line-height: 1.75;
                        color: rgba(0, 0, 0, 0.72);
                    }
                    .pd-page__description p:last-child {
                        margin-bottom: 0;
                    }
                    .pd-page__description p:first-child {
                        font-size: 1.1rem;
                        color: #111;
                    }
                    .pd-page__specs-card {
                        padding: 32px;
                        background: #fff;
                        border: 1px solid rgba(0, 0, 0, 0.08);
                        border-radius: 16px;
                    }
                    .pd-page__specs-title {
                        margin: 0 0 24px;
                        font-size: 1.25rem;
                        font-weight: 600;
                        color: #111;
                    }
                    .pd-page__specs-list {
                        display: grid;
                        gap: 0;
                        margin: 0;
                        padding: 0;
                        list-style: none;
                    }
                    .pd-page__specs-item {
                        display: grid;
                        grid-template-columns: 1fr 1.2fr;
                        gap: 16px;
                        padding: 16px 0;
                        border-bottom: 1px solid rgba(0, 0, 0, 0.06);
                    }
                    .pd-page__specs-item:last-child {
                        border-bottom: none;
                        padding-bottom: 0;
                    }
                    .pd-page__specs-item dt {
                        font-size: 0.9rem;
                        font-weight: 500;
                        color: rgba(0, 0, 0, 0.52);
                    }
                    .pd-page__specs-item dd {
                        margin: 0;
                        font-size: 0.95rem;
                        font-weight: 600;
                        color: #111;
                    }

                    .pd-page__highlights {
                        margin-top: 80px;
                        padding: 64px 0;
                        background: #111;
                    }
                    .pd-page__highlights-grid {
                        display: grid;
                        gap: 32px;
                    }
                    .pd-page__highlight {
                        display: flex;
                        gap: 20px;
                        align-items: flex-start;
                    }
                    .pd-page__highlight-icon {
                        flex-shrink: 0;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 48px;
                        height: 48px;
                        color: #fff;
                        background: rgba(255, 255, 255, 0.08);
                        border-radius: 12px;
                    }
                    .pd-page__highlight-title {
                        margin: 0 0 8px;
                        font-size: 1rem;
                        font-weight: 600;
                        color: #fff;
                    }
                    .pd-page__highlight-text {
                        margin: 0;
                        font-size: 0.9rem;
                        font-weight: 500;
                        line-height: 1.6;
                        color: rgba(255, 255, 255, 0.68);
                    }

                    .pd-page__related {
                        padding: 80px 0;
                        background: #fafafa;
                    }
                    .pd-page__related-header {
                        display: flex;
                        flex-wrap: wrap;
                        align-items: flex-end;
                        justify-content: space-between;
                        gap: 20px;
                        margin-bottom: 40px;
                    }
                    .pd-page__related-title {
                        margin: 0 0 8px;
                        font-size: 1.75rem;
                        font-weight: 600;
                        letter-spacing: -0.02em;
                        color: #111;
                    }
                    .pd-page__related-subtitle {
                        margin: 0;
                        font-size: 0.95rem;
                        color: rgba(0, 0, 0, 0.58);
                    }
                    .pd-page__related-link {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        font-size: 0.9rem;
                        font-weight: 600;
                        color: #111;
                        text-decoration: none;
                        transition: gap 0.2s ease;
                    }
                    .pd-page__related-link:hover {
                        gap: 12px;
                    }
                    .pd-page__related-grid {
                        display: grid;
                        grid-template-columns: repeat(2, minmax(0, 1fr));
                        gap: 20px;
                    }
                    .pd-page__related-card {
                        display: flex;
                        flex-direction: column;
                        height: 100%;
                        color: inherit;
                        text-decoration: none;
                        background: #fff;
                        border: 1px solid rgba(0, 0, 0, 0.08);
                        border-radius: 12px;
                        overflow: hidden;
                        transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
                    }
                    .pd-page__related-card:hover {
                        transform: translateY(-4px);
                        border-color: rgba(0, 0, 0, 0.16);
                        box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
                    }
                    .pd-page__related-media {
                        position: relative;
                        aspect-ratio: 4 / 3;
                        background: linear-gradient(180deg, #f7f7f7 0%, #efefef 100%);
                    }
                    .pd-page__related-media img {
                        object-fit: contain;
                        padding: 20px;
                    }
                    .pd-page__related-body {
                        display: flex;
                        flex-direction: column;
                        gap: 8px;
                        padding: 18px 18px 20px;
                    }
                    .pd-page__related-tag {
                        align-self: flex-start;
                        padding: 4px 10px;
                        font-size: 0.7rem;
                        font-weight: 600;
                        letter-spacing: 0.06em;
                        text-transform: uppercase;
                        color: rgba(0, 0, 0, 0.55);
                        background: #f3f3f3;
                        border-radius: 999px;
                    }
                    .pd-page__related-name {
                        margin: 0;
                        font-size: 1rem;
                        font-weight: 600;
                        color: #111;
                    }

                    .pd-page__cta {
                        padding: 72px 0 96px;
                        background: #fff;
                        border-top: 1px solid rgba(0, 0, 0, 0.08);
                    }
                    .pd-page__cta-inner {
                        display: flex;
                        flex-direction: column;
                        align-items: flex-start;
                        gap: 24px;
                        padding: 48px;
                        background: linear-gradient(135deg, #111 0%, #2a2a2a 100%);
                        border-radius: 20px;
                    }
                    .pd-page__cta-label {
                        font-size: 0.75rem;
                        font-weight: 600;
                        letter-spacing: 0.1em;
                        text-transform: uppercase;
                        color: rgba(255, 255, 255, 0.55);
                    }
                    .pd-page__cta-title {
                        margin: 0;
                        max-width: 28rem;
                        font-size: clamp(1.5rem, 3vw, 2rem);
                        font-weight: 600;
                        line-height: 1.25;
                        color: #fff;
                    }
                    .pd-page__cta-text {
                        margin: 0;
                        max-width: 32rem;
                        font-size: 0.95rem;
                        line-height: 1.65;
                        color: rgba(255, 255, 255, 0.68);
                    }

                    @media (min-width: 768px) {
                        .pd-page__hero {
                            grid-template-columns: 1fr 1fr;
                            gap: 56px;
                        }
                        .pd-page__details-grid {
                            grid-template-columns: 1.1fr 0.9fr;
                            gap: 64px;
                            align-items: start;
                        }
                        .pd-page__highlights-grid {
                            grid-template-columns: repeat(3, minmax(0, 1fr));
                        }
                        .pd-page__related-grid {
                            grid-template-columns: repeat(4, minmax(0, 1fr));
                        }
                        .pd-page__cta-inner {
                            flex-direction: row;
                            align-items: center;
                            justify-content: space-between;
                        }
                    }

                    @media (min-width: 992px) {
                        .pd-page__hero {
                            grid-template-columns: 1.05fr 0.95fr;
                            gap: 72px;
                        }
                    }

                    @media (max-width: 767px) {
                        .pd-page__quick-specs {
                            grid-template-columns: 1fr;
                        }
                        .pd-page__specs-item {
                            grid-template-columns: 1fr;
                            gap: 4px;
                        }
                        .pd-page__details {
                            margin-top: 56px;
                            padding-top: 56px;
                        }
                        .pd-page__highlights {
                            margin-top: 56px;
                        }
                        .pd-page__related {
                            padding: 56px 0;
                        }
                        .pd-page__cta-inner {
                            padding: 32px 24px;
                        }
                    }
                `,
            }}
        />
    );
}
