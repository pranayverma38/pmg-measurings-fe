import Link from "next/link";
import Image from "next/image";

export type ArticleCard1Props = {
    classList?: string;
    category?: string;
    linkPost: string;
    linkAuthor: string;
    img: string;
    title: string;
    author: string;
    date: string;
};

export default function ArticleCard1({
    classList = "",
    category,
    linkPost,
    linkAuthor,
    img,
    title,
    author,
    date,
}: ArticleCard1Props) {
    return (
        <div className={`blog-card ${classList} mb-30`} data-category={category}>
            <div className="blog-card__thumb hover-effect-1">
                <Link href={linkPost} className="blog-card__img-link">
                    <Image
                        src={img}
                        className="blog-card__img22"
                        alt="orisa"
                        width={450}
                        height={350}
                    />
                </Link>
            </div>
            <div className="blog-card__content">
                <h6 className="blog-card__title">
                    <Link href={linkPost} className="blog-card__title-link">
                        {title}
                    </Link>
                </h6>
                <p className="blog-card__meta">
                    <span className="blog-card__meta-text">By </span>
                    <Link href={linkAuthor} className="blog-card__author">
                        {author}
                    </Link>
                    <span className="blog-card__meta-text"> – {date}</span>
                </p>
            </div>
        </div>
    );
}
