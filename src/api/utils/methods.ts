const API_STATUS_NUMBERS = {
    UNAUTHORIZED: 401,
    TOO_MANY_REQUESTS: 429
}


export const getAPIError = (status: number) : string => {
    switch(status){
        case API_STATUS_NUMBERS.UNAUTHORIZED:
            return "Invalid Api Key";
        case API_STATUS_NUMBERS.TOO_MANY_REQUESTS:
            return "Too many API requests"
        default:
            return "Generic Error"
    }
}