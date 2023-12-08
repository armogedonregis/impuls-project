import { categoryType } from "@/types/categoriesType";

// выбор категорий
export const DropDownCategory: React.FC<{
    categories: categoryType[]
}> = (props) => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <a className="nav-link active" href="#">
                    Inicio
                </a>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All categories <small className="hot">impuls</small>
                </a>
                <div className="dropdownMenu" aria-labelledby="navbarDropdown1">
                    <div className="d-flex flex-wrap">
                        {/* <!-- First Row --> */}
                        {
                            props.categories
                            ? <div className="w-50">
                                {
                                    props.categories.map(item => {
                                        return item.id < 7
                                        ? <a key={item.id} className="dropdown-item" href={item.url}>{item.name}</a>
                                        : null
                                    })
                                }
                            </div> : null
                        }
                        {/* <!-- Second Row --> */}
                        {
                            props.categories
                            ? <div className="w-50">
                            {
                                props.categories.map(item => {
                                    return item.id > 6
                                    ? <a key={item.id} className="dropdown-item" href={item.url}>{item.name}</a>
                                    : null
                                })
                            }
                            </div> : null
                        }
                    </div>
                </div>
            </li>
        </ul>
    );
};