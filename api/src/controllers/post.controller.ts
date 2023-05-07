import express, {Router, Request, Response} from 'express';
import fileDb from '@src/db/filrDb';
import { nanoid } from 'nanoid';
import multer from 'multer';
import path from 'path';
import {uploadPath} from '../../config'
import { CreatePostDto } from '@src/dto/CreatePost.dto';
import { IPost } from '@src/interfaces/IPost';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, uploadPath)
    }, 
    filename (req, file, cb) {
        cb(null, nanoid() + path.extname(file.originalname))
    }
});

const upload = multer({storage});

const controller: Router = express.Router();

controller.get('/', (req: Request, res: Response) => {
    const posts = fileDb.getItems();
    res.send(posts);
});

controller.post('/', upload.single('image'), (req: Request, res: Response) => {
    const {post} = req.body as IPost;
    let image  = '';
    let author = 'Anonymous';
    if(req.file) {
        image = req.file.filename
    };
    if (req.body.author) {
        author = req.body.author;
    };
    if (!post) {
        return res.status(400).send('Post is required');
    };
    const id = nanoid();
    const newPost = new CreatePostDto(id, post, author, image);
    fileDb.adItem(newPost);
    res.send(newPost);
});

export default controller;