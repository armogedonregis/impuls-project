// выбор темы
export const ChoiseTheme = () => {
    return (
        <div className="sub-darkLight">
            <div className="darkLight-btn">
                <span className="icon active" id="light-icon">
                    <i className="la la-sun"></i>
                </span>
                <span className="icon" id="dark-icon">
                    <i className="la la-moon"></i>
                </span>
            </div>
        </div>
    )
};