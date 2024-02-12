import axios from "axios";
import { Post } from "./post.entities";
import { PostGateway } from "./post.gateway";


export class PostRepositoryImplementation implements PostGateway {

    private url: string;

    constructor(url: string) {
        this.url = url
    }

    async getPosts(): Promise<Post[]> {
        const response = await axios.get(this.url);
        return response.data;

    }

    async getPost(id: string): Promise<Post> {
        return await axios.get(`${this.url}/${id}`);
    }
    
    async createPost(post: Post): Promise<Post> {
        return await axios.post(this.url, post);
    }

    async updatePost(post: Post): Promise<Post> {
        return await axios.put(`${this.url}/${post.id}`, post);
    }

    async deletePost(id: string): Promise<void> {
        return await axios.delete(`${this.url}/${id}`);
    }
    
}