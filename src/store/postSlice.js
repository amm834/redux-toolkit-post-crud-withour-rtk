import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getPostById = createAsyncThunk('posts-index', ({id}) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id).then(res => res.json())
})

export const deletePostById = createAsyncThunk('posts-delete', ({id}) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id, {
        method: 'DELETE',
    }).then(res => res.json())
})

export const createPost = createAsyncThunk('posts-create', ({user}) => {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(user),
    }).then(res => res.json())
})

export const editPostById = createAsyncThunk('posts-edit', ({post}) => {
    console.log(post)
    return fetch('https://jsonplaceholder.typicode.com/posts/' + post?.id, {
        method: 'PUT',
        body: JSON.stringify(post),
    }).then(res => res.json())
})


const postSlice = createSlice({
    name: 'post',
    initialState: {
        post: {},
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        // post index
        builder.addCase(getPostById.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getPostById.fulfilled, (state, action) => {
            state.loading = false
            state.post = action.payload
        })
        builder.addCase(getPostById.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        // post delete
        builder.addCase(deletePostById.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deletePostById.fulfilled, (state, action) => {
            state.loading = false
        })
        builder.addCase(deletePostById.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        // post create
        builder.addCase(createPost.pending, (state) => {
            state.loading = true
        })
        builder.addCase(createPost.fulfilled, (state, action) => {
            state.loading = false
        })
        builder.addCase(createPost.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

        // post edit
        builder.addCase(editPostById.pending, (state) => {
            state.loading = true
        })
        builder.addCase(editPostById.fulfilled, (state, action) => {
            state.loading = false
        })
        builder.addCase(editPostById.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
        })

    }
})

export default postSlice.reducer