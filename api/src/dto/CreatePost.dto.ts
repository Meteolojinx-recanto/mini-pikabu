export class CreatePostDto {
    id: string;
    post: string;
    author: string;
    image: string;
    constructor (id: string, post: string, author: string, image: string){
        this.id = id;
        this.post = post;
        this.author = author;
        this.image = image;
    }
};