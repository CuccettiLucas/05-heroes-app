import { heroApi } from "../api/hero.api"
import type { SumarryInformationResponse } from "../types/summary-information";

export const getSummaryAction = async () =>{
    const {data} = await heroApi.get<SumarryInformationResponse>("/summary");
    
    return data;
}