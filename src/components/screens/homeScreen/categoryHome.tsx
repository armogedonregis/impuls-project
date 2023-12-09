import { categoryType } from "@/types/categoriesType";
import Link from "next/link";

export const CategoryHome: React.FC<{
    categories: categoryType[]
}> = (props) => {
    return (
        <section className="tc-categories-style10 px-lg-5">
            {
                props.categories
                ? <div className="cat-content">
                {props.categories.map(item => (
                    <Link key={item.id} href={`category/${item.url ? item.url : ""}`} className="category"> {item.name} <span className="num"> {item.count} </span> 
                    </Link>
                ))}
                </div> : null
            }
        </section>
    )
}