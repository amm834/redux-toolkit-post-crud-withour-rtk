import React, {useRef} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {editPostById} from "../store/postSlice.js";

const EditPost = () => {
    const navigate = useNavigate();
    const {id} = useParams()
    const dispatch = useDispatch();

    const titleRef = useRef(null)
    const bodyRef = useRef(null)


    const onEditFormSubmit = (event) => {
        event.preventDefault()

        dispatch(editPostById({
            post: {
                id,
                title: titleRef.current.value,
                body: bodyRef.current.value
            }
        }))
        navigate('/')
    };
    return (
        <div className="container mt-4">
            <form className="w-50 mx-auto" onSubmit={onEditFormSubmit}>
                <h1 className="mb-4">Edit post</h1>
                <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Title"
                           ref={titleRef}
                    />
                </div>
                <div className="mb-3">
                    <textarea rows="4" type="text" className="form-control" placeholder="Body" ref={bodyRef}/>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
            </form>
        </div>
    );
};

export default EditPost;
