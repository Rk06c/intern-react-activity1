import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@gmail.com' }
]

const userSlicePost = createSlice({
    name: "userPost",
    initialState,
    reducers: {

    }
});

export const selectAllUsers = (state) => state.userPost;
export default userSlicePost.reducer;