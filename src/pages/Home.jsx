import React, {useRef, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {deletePostById, getPostById} from "../store/postSlice.js";

const Home = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const userIdRef = useRef(null)
    const post = useSelector(state => ({...state.app.post}))

    const getPostByPostId = () => {
        const userId = userIdRef.current.value
        if (!userId) {
            alert('Please add post id')
            return
        }

        dispatch(getPostById({id: userId}))
    };


    const deletePostByPostId = () => {
        dispatch(deletePostById({id:post.id}))
        navigate('/')
    };

    return (
        <main className="container my-3">
            <div className="col-md-6 mx-auto">
                <h1 className="mb-3">Fetch Post</h1>
                <input type="search" id="inputPassword5" className="form-control"
                       aria-describedby="passwordHelpBlock"
                       placeholder="Enter user id"
                       ref={userIdRef}
                />
                <div className="d-flex justify-content-center gap-xl-3 mt-3">
                    <button className="btn btn-info" onClick={getPostByPostId}>Fetch Post By User ID</button>
                    <Link to="/posts" className="btn btn-primary">Create Post</Link>
                </div>
            </div>
            {post.title || post.body ? <div className="card mt-4">
                <div className="card-body">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
                <div className="card-footer d-flex justify-content-end gap-3">
                    <button className="btn btn-danger" onClick={deletePostByPostId}>Delete</button>
                    <Link to={`/posts/${post.id}`} className="btn btn-info">Edit</Link>
                </div>
            </div> : null}
        </main>
    );
};

export default Home;
