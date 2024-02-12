/*
    Data Access (Доступ к данным) - Определение интерфейса TodoGateway для доступа к данным:
*/

import { Post } from './post.entities';

export interface PostGateway {
    getPosts(): Promise<Post[]>;
    getPost(id: string): Promise<Post>;
    createPost(post: Post): Promise<Post>;
    updatePost(post: Post): Promise<Post>;
    deletePost(id: string): Promise<void>;
}