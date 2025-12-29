import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { addPost } from './slice/posts'
import { nanoid } from '@reduxjs/toolkit';
import { useState } from 'react';
import { selectAllUsers } from '../redux/slice/user/userSlicePost';

export default function AddPostForm() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const users = useSelector(selectAllUsers);
    const [userId, setUserId] = useState([]);

    const onTitleChanged = e => setTitle(e.target.value);
    const onContentChanged = e => setContent(e.target.value);
    const onAuthorChanged = e => setUserId(e.target.value);

    const onSavePostClick = e => {
        e.preventDefault();
        if (title && content && userId) {
            dispatch(addPost(title, content, userId));
            setTitle('');
            setContent('');
            setUserId('');
        }
    }
const userOptions = Array.isArray(users)
  ? users.map(user => (
      <option key={user.id} value={user.id}>{user.name}</option>
    ))
  : [];

const canSave = Boolean(title) && Boolean(content) && Boolean(userId);  
    return (
        <section>
            <h2>Add a New Post</h2>
            <form onSubmit={onSavePostClick}>
                <label htmlFor="postTitle">Post Title:</label>
                <input 
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={onTitleChanged}
                />
                <label htmlFor="postAuthor">Author:</label>
                
                <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
                    <option value=""></option>
                    {userOptions}
                </select>

                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={onContentChanged}
                />
                <button type="submit" disabled={!canSave}>Save Post</button>    
            </form>
        </section>
    )
}