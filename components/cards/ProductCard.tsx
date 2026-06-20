import Link from "next/link";
import Image from "next/image";

export type ProductCardProps = {
    link: string;
    img: string;
    title: string;
    brand: string;
    price: string;
    category?: string;
    className?: string;
    titleClassName?: string;
};

export default function ProductCard({
    link,
    img,
    title,
    brand,
    price,
    category,
    className = "",
    titleClassName = "",
}: ProductCardProps) {
    return (
        <div className={`product-card ${className} mb-30`} data-category={category}>
            <div className="product-card__inner">
                <div className="product-card__thumb hover-effect-1">
                    <Link href={link} className="product-card__img-link">
                        <Image
                            src={img}
                            className="product-card__img"
                            alt={title}
                            width={400}
                            height={500}
                        />
                    </Link>
                </div>
                <div className="product-card__content">
                    <p className="product-card__brand">{brand}</p>
                    <div className="product-card__row">
                        <h6 className="product-card__title">
                            <Link href={link} className={`product-card__title-link ${titleClassName}`}>
                                {title}
                            </Link>
                        </h6>
                        <p className="product-card__price">{price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
