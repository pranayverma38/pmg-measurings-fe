import Link from "next/link";
import Image from "next/image";

export type ArticleCard2Props = {
    classList?: string;
    categoryFilter?: string;
    linkPost: string;
    linkAuthor: string;
    img: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
};

export default function ArticleCard2({
    classList = "",
    categoryFilter = "",
    linkPost,
    linkAuthor,
    img,
    category,
    title,
    excerpt,
    author,
    date,
}: ArticleCard2Props) {
    return (
        <article
            className={`blog-card-2 ${classList}`.trim()}
            data-category={categoryFilter || undefined}
        >
            <div className="blog-card-2__left">
                <span className="blog-card-2__category">{category}</span>
                <h6 className="blog-card-2__title fw-600">
                    <Link href={linkPost} className="blog-card-2__title-link">
                        {title}
                    </Link>
                </h6>
            </div>
            <div className="blog-card-2__thumb hover-effect-1">
                <Link href={linkPost} className="blog-card-2__img-link">
                    <Image
                        src={img}
                        className="blog-card-2__img"
                        alt={title}
                        width={800}
                        height={500}
                    />
                </Link>
            </div>
            <div className="blog-card-2__right">
                <p className="blog-card-2__excerpt">{excerpt}</p>
                <p className="blog-card-2__meta">
                    <span className="blog-card-2__meta-text">By </span>
                    <Link href={linkAuthor} className="blog-card-2__author">
                        {author}
                    </Link>
                    <span className="blog-card-2__meta-text"> – {date}</span>
                </p>
            </div>
        </article>
    );
}
