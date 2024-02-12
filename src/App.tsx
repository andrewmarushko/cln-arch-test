import { useEffect } from "react";
import { usePostController } from "./hooks/post.controller"

function App() {
  const { posts, getAllPosts, addPost, handleInputs, form } = usePostController();

  useEffect(() => {
    getAllPosts();
  }, [])

  return (
    <>
      <div>
        {
          posts.length > 0 ? posts.map(post => (
              <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
          )) : <p>Loading...</p>
        }
         </div>

        <form>
          <input name="title" value={form.title} type="text" placeholder="Title" onChange={handleInputs} />
          <input name="body"  value={form.body} type="text" placeholder="Body" onChange={handleInputs}/>
          <button type="button" onClick={() => addPost( form )}>Add</button>
        </form>
     </>
  )
}

export default App
