export const getCategory = (value: string | string[] | undefined) => {
    switch(value) {
        case "gastronomy":
            return 1
        case "tourism":
            return 2
        case "culture":
            return 3
        case "trend-fashion":
            return 4
        case "education":
            return 5
        case "health":
            return 6
        case "culture":
            return 7
        case "finance-law":
            return 8
        case "investments":
            return 9
        case "sport":
            return 10
        case "impuls-tv-en":
            return 11
        case "business-launch":
            return 12
        default:
            return 1
    }
}

export const getFullCategory = (value: number) => {
    switch(value) {
        case 1:
            return "Gastronomy"
        case 2:
            return "Tourism"
        case 3:
            return "Culture"
        case 4:
            return "Trend & Fashion"
        case 5:
            return "Education"
        case 6:
            return "Health"
        case 7:
            return "Business culture"
        case 8:
            return "Finance & Law"
        case 9:
            return "Investments"
        case 10:
            return "Sport"
        case 11:
            return "Impuls TV"
        case 12:
            return "Networking"
        default:
            return "Gastronomy"
    }
}