// выбор категорий

export const DropDownCategory = () => {
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
                        <div className="w-50">
                            <a className="dropdown-item" href="#">Category 1</a>
                            <a className="dropdown-item" href="#">Category 2</a>
                            <a className="dropdown-item" href="#">Category 3</a>
                            <a className="dropdown-item" href="#">Category 4</a>
                            <a className="dropdown-item" href="#">Category 5</a>
                            <a className="dropdown-item" href="#">Category 6</a>
                            <a className="dropdown-item" href="#">Category 7</a>
                        </div>
                        {/* <!-- Second Row --> */}
                        <div className="w-50">
                            <a className="dropdown-item" href="#">Category 8</a>
                            <a className="dropdown-item" href="#">Category 9</a>
                            <a className="dropdown-item" href="#">Category 10</a>
                            <a className="dropdown-item" href="#">Category 11</a>
                            <a className="dropdown-item" href="#">Category 12</a>
                            <a className="dropdown-item" href="#">Category 13</a>
                            <a className="dropdown-item" href="#">Category 14</a>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    );
};