import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Post } from './schemas/posts.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>
  ) {}

  async getPosts(): Promise<Post[]> {
    return this.postModel.find().lean();
  }

  async getPostsByUserId(userId: string): Promise<Post[]> {
    return this.postModel.find({ userId: userId }).lean();
  }

  async getPostById(id: string): Promise<Post> {
    return this.postModel.findById({ _id: id }).lean();
  }

  async getPostsByContent(searchCondition: string): Promise<Post[]> {
    const regex = new RegExp(searchCondition, 'i');
    return this.postModel.find({ $or: [
      {title: { $regex: searchCondition }}, 
      {content: { $regex: searchCondition }}
    ]})
  }

  async getPostsByCategory(categorie: string): Promise<Post[]> {
    const regex = new RegExp(categorie, 'i');
    return this.postModel.find({categories: { $regex: categorie }})
  }

  async getPostsByAuthor(author: string): Promise<Post[]> {
    const regex = new RegExp(author, 'i');
    return this.postModel.find({author: { $regex: author }})
  }

  async addPost(createPostDto: CreatePostDto): Promise<Post> {
    const createPost = new this.postModel(createPostDto);
    return createPost.save();
  }

  async updatePost(
    id: string,
    updatePostDto: UpdatePostDto,
  ): Promise<Post> {
    return this.postModel.updateOne({ _id: id }, updatePostDto).lean();
  }

  async deletePost(id: string): Promise<Post> {
    return this.postModel.deleteOne({ _id: id }).lean();
  }

};