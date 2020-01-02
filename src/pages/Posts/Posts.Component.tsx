import React, { useEffect, useRef, useState } from 'react';
import PostsView from "./Posts.View";
import  axios from 'axios';
import { apiService } from "../../utils/api-service";

interface Props {

}

const PostsComponent: React.FunctionComponent<Props> = () => {
    const source = useRef(axios.CancelToken.source());

    const [postCount, setPostCount] = useState(0);

    async function fetchPosts() {
        const response = await apiService.get("/posts", source.current.token);
         if (response) {
             setPostCount(response.length);
         }
    }

    useEffect(() => {
        fetchPosts();

        return () => {
            // Cancel API
            source.current.cancel();
        }
    }, []);

    return <PostsView postCount={postCount} />
};

export default PostsComponent