import './Comments.Style.scss';
import React, { memo } from 'react';

interface Props {
    commentCount: number | string;
}
const CommentsView = memo(({ commentCount }: Props) => {
    return (
        <><h4>Comments: {commentCount}</h4></>
    );
});

export default CommentsView;