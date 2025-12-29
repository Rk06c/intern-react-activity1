import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
    { id: 3, title: 'Third Post', content: 'This is the third post.' }
]

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action) => {
            state.push(action.payload)

        },
        prepare:(title, content, userid) => {
            return {
                payload: {
                    id: nanoid(),
                    title,
                    content,
                    userId: userid
                }
            }
        }
    }
    }

})
export const selectAllPosts = (state) => state.posts
export  default postSlice.reducer
export const { addPost } = postSlice.actions