import { fetchDummyApi } from './../fetchDummyApi';
import { useMutation } from "react-query";

import { PostCreate } from "../../Models";

export const usePostCreate = () => {
    const url = `https://dummyapi.io/data/v1/post/create`;

    return useMutation((postData:PostCreate)=>fetchDummyApi(url,"POST",{body:JSON.stringify(postData)}))
};
