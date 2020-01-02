import './Posts.Style.scss';
import React, { memo } from 'react';

interface Props {
    postCount: number | string;
}
const PostsView = memo(({ postCount }: Props) => {
    return (
        <><h4>Posts: {postCount}</h4></>
    );
});

export default PostsView;