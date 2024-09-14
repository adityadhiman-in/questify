import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "light",
    user: null,
    token : null,
    posts : []
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setMode : (state)=>{
            state.mode = state.mode === "light"? "dark" : "light";
        },
        setLogin: (state, action)=>{
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout : (state)=>{
            state.user = null;
            state.token = null;
        },
        setFriends : (state, action)=>{
            if(state.user){
                state.user.friends = action.payload.friends;
            }
            else{
                console.log("user friends not existed");
            }
        },
        setPosts : (state, action) =>{
            state.posts = action.payload.posts;
        },
        setPost : (state, action) =>{
            const updatedPosts = state.posts.map(post =>{
                if(post._id === action.payload.post._id){
                    return action.payload.post;
                }
                return post;
            });
        },
        deletePost : (state, action) =>{
            const updatedPosts = state.posts.filter(post => post._id!== action.payload.postId);
            state.posts = updatedPosts;
        }
    }
});
export const {setMode, setLogin,setLogout, setFriends, setPost, setPosts, deletePost} = authSlice.actions;
export default authSlice.reducer;