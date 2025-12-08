import { PostModel } from "@/src/models/post/post-model";
import { PostRepository } from "./post-repository";

const ROOT_DIR = process.cwd();

export class JsonPostRepository implements PostRepository {
    async findAll(): Promise<PostModel[]> { }
}

export const PostRepository = new JsonPostRepository();