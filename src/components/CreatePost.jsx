import React, {useState} from 'react';
import {createPost, deletePostById} from "../store/postSlice.js";
import {useDispatch} from "react-redux";
import {Link, useNavigate} from "react-router-dom";

const CreatePost = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [post, setPost] = useState({
        title: '',
        body: '',
        userId: 1
    })
    const onCreatePost = () => {
        if (!post.title || !post.body) {
            alert('please fill form')
            return
        }

        dispatch(createPost({user: post}))
        // navigate('/')
    };
    return (
        <div className="container mt-4 w-50">
            <Link to="/" className="btn btn-dark mb-3">Go Back</Link>
            <h1 className="mb-3">Create Post</h1>
            <div className="card p-5">
                <div className="mb-3">
                    <input type="text"
                           className="form-control"
                           placeholder="Title"
                           onChange={event => post.title = event.target.value}
                    />
                </div>
                <div className="mb-3">
                    <textarea type="text"
                              rows="5"
                              className="form-control"
                              placeholder="Enter post content"
                              onChange={event => post.body = event.target.value}
                    />
                </div>
                <button className="btn btn-success" onClick={onCreatePost}>Create</button>
            </div>
        </div>
    );
};

export default CreatePost;
