import React from 'react';
import Post from './Post/Post';
import useStyles from "./PostsStyles"

const Posts = () => {
    const classes = useStyles();
    return (
        <div>
            <h2> All Post</h2>
            <Post></Post>
            <Post></Post>
        </div>
    );
};

export default Posts;