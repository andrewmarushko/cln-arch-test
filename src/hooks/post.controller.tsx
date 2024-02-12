import { useState } from "react";
import { Post } from "../feature/todo/post.entities";
import { PostRepositoryImplementation } from "../feature/todo/post.repository";
import { PostUseCasesImplementation } from "../feature/todo/post.use-cases";


const apiUrl = 'http://localhost:3000/posts';


export const usePostController = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [form, setForm] = useState<Post>({  
        title: '',
        body: '',
        views: 0,
        id: ''
    })
  
    const postRepository = new PostRepositoryImplementation(apiUrl);
    const postUseCases = new PostUseCasesImplementation(postRepository);

    async function getAllPosts() {
        const posts = await postUseCases.getPosts();
        setPosts(posts);
    }

    async function addPost(post: Post) {
        await postUseCases.createPost(post);
        await getAllPosts();
    }

    const handleInputs = (e:React.ChangeEvent<HTMLInputElement>) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value
    })
  }

    
    return {
        posts,
        getAllPosts,
        addPost,
        handleInputs,
        form
    }

}