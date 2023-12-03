import { categoryData } from "@/components/data/categoryData";
import Link from "next/link";

export const CategoryHome = () => {
    return (
        <section className="tc-categories-style10 px-lg-5">
            <div className="cat-content">
                {categoryData.map(item => (
                    <Link key={item.id} href="#" className="category"> {item.title} <span className="num"> {item.numberPost} </span> </Link>
                ))}
            </div>
        </section>
    );
};