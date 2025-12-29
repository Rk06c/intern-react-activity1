import React from 'react'
import { useSelector } from 'react-redux'
import AddPostForm from './AddPostForm.jsx'
import { selectAllPosts } from './slice/posts'
import { PostAuthor } from './slice/user/PostAuthor.jsx'  




export default function listPosts() {

    const posts = useSelector(selectAllPosts)
     
    const renderPosts = posts.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 100)}</p>
            <PostAuthor userId={post.userId} />

        </article>
    ))

  return (
    <>
      <h2>Posts</h2>
      <AddPostForm />
      {renderPosts}
      
    </>
  )
}


