// Use Cases (Используемые случаи) - Реализация бизнес-логики

import { Post } from "./post.entities";
import { PostGateway } from "./post.gateway";


interface PostUseCases {
    getPosts(): Promise<Post[]>;
    getPost(id: string): Promise<Post>;
    createPost(post:  Omit<Post, 'id'>): Promise<Post>;
    updatePost(post: Post): Promise<Post>;
    deletePost(id: string): Promise<void>;

}

export class PostUseCasesImplementation implements PostUseCases {
    constructor(private postGateway: PostGateway) {}

    async getPosts(): Promise<Post[]> {
        return this.postGateway.getPosts();
    }

    async getPost(id: string): Promise<Post> {
        return this.postGateway.getPost(id);
    }

    async createPost(post: Post): Promise<Post> {
        return this.postGateway.createPost(post);
    }

    async updatePost(post: Post): Promise<Post> {
        return this.postGateway.updatePost(post);
    }
    async  deletePost(id: string): Promise<void> {
        return this.postGateway.deletePost(id);
    }
}
