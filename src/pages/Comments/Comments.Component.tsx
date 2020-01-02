import React, { useEffect, useRef, useState } from 'react';
import CommentsView from "./Comments.View";
import  axios from 'axios';
import { apiService } from "../../utils/api-service";

interface Props {

}

const CommentsComponent: React.FunctionComponent<Props> = () => {
    const source = useRef(axios.CancelToken.source());

    const [commentCount, setCommentCount] = useState(0);

    async function fetchComments() {
        const response = await apiService.get("/comments", source.current.token);
        if (response) {
            setCommentCount(response.length);
        }
    }

    useEffect(() => {
        fetchComments();

        return () => {
            // Cancel API
            source.current.cancel();
        }
    }, []);

    return <CommentsView commentCount={commentCount} />
};

export default CommentsComponent