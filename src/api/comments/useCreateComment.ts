import { fetchDummyApi } from './../fetchDummyApi';
import { useMutation } from "react-query";

import { CommentCreate } from "../../Models";

export const useCreateComment = (commentData:CommentCreate) => {
    const url = `https://dummyapi.io/data/v1/comment/create`;

    return useMutation(()=>fetchDummyApi(url,"POST",{body:JSON.stringify(commentData)}))
};
