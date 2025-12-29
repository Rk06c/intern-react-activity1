import { configureStore } from '@reduxjs/toolkit'

import counterReducer from '../slice/counterSlice.js'
import userReducer from '../slice/userSlice1.js'
import postReducer from '../slice/posts.js'
import userPostReducer from '../slice/user/userSlicePost.js'

export const store = configureStore({
    reducer: {
        // add reducers here
        counter: counterReducer,
        user: userReducer,
        posts: postReducer,
        userPost: userPostReducer
    }
})