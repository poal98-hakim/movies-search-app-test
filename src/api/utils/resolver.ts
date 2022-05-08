import { AxiosError, AxiosResponse } from "axios";
import { IResolver } from "../../models/Resolver"

function instanceOfAxiosError(object: any): object is AxiosError {
    return 'response' in object;
}

export default async function resolver<T>(apiCall: () => Promise<AxiosResponse<T, any>>, always: () => void) : Promise<IResolver<T>>{
    let result : IResolver<T> = {} as IResolver<T>;
    try{
        const _res = await apiCall();
        result.data = _res.data;
    }
    catch(error: any | Error | AxiosError){ // to catch any error if present
        if(instanceOfAxiosError(error)){
            result.errorStatus = error.response?.status || 500;
        }
        else{
            result.errorStatus = 500
        }
    }
    finally{
        always();
    }

    return result;
}