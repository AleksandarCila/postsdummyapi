import { fetchDummyApi } from './../fetchDummyApi';
import { useMutation } from "react-query";

import { Post } from "../../Models";

export const useUpdatePost = (postId:string) => {
    const url = `https://dummyapi.io/data/v1/post/${postId}`;

    return useMutation((postData:Post)=>fetchDummyApi(url,"PUT",{body:JSON.stringify(postData)}))
};
