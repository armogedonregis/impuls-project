import { Dispatch, SetStateAction } from "react";

// выбор темы
export const ChoiseTheme: React.FC<{
    isDark: boolean
    setDark: Dispatch<SetStateAction<boolean>>
}> = ({isDark, setDark}) => {
    return (
        <div className="sub-darkLight">
            <div className="darkLight-btn">
                <span 
                    className={`icon ${isDark ? "" : "active"}`} id="light-icon"
                    onClick={() => setDark(prev => false)}
                >
                    <i className="la la-sun"></i>
                </span>
                <span
                    className={`icon ${isDark ? "active" : ""}`} id="dark-icon"
                    onClick={() => setDark(prev => true)}
                >
                    <i className="la la-moon"></i>
                </span>
            </div>
        </div>
    )
};