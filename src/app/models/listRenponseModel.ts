import { ResponseModel } from "./responseModel";

export interface ListReponseModel<T> extends ResponseModel{
    data:T[];
}