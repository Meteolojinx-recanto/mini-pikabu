import fs from 'fs';
import { IPost } from '@src/interfaces/IPost';
import { CreatePostDto } from '@src/dto/CreatePost.dto';

const filename = './src/db/db.json';
let data: IPost[] = [];

const DB = {
    init() {
        try {
            const fileContents = fs.readFileSync(filename);
            data = JSON.parse(fileContents.toString());
        } catch (error) {
            data = [];
        }
    },
    getItems(): IPost[] {
        return data;
    },
    adItem(item: CreatePostDto) {
        data.push(item);
        this.save()
    },
    save() {
        fs.writeFileSync(filename, JSON.stringify(data, null, 4));
    }
};

export default DB;