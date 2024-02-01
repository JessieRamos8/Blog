import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post as BlogPost } from './schemas/posts.schema';
import { CreatePostDto, UpdatePostDto } from './dto/post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly PostsService: PostsService) {}

  @Get('')
  getPosts(): Promise<BlogPost[]> {
    return this.PostsService.getPosts();
  }

  @Get('user/:userId')
  getPostsByuserId(@Param('userId') userId: string): Promise<BlogPost[]> {
    return this.PostsService.getPostsByUserId(userId);
  }

  @Get(':id')
  getPostById(@Param('id') id): Promise<BlogPost> {
    return this.PostsService.getPostById(id);
  }

  @Get(':searchCondition')
  getPostsByContent(@Param('searchCondition') searchCondition): Promise<BlogPost[]> {
    return this.PostsService.getPostsByContent(searchCondition);
  }
  
  @Get(':categorie')
  getPostsByCategory(@Param('categorie') categorie): Promise<BlogPost[]> {
    return this.PostsService.getPostsByCategory(categorie);
  }

  @Get(':author')
  getPostsByAuthor(@Param('author') author): Promise<BlogPost[]> {
    return this.PostsService.getPostsByAuthor(author);
  }

  @Post('')
  addPost(@Body() createPostDto: CreatePostDto): Promise<BlogPost> {
    return this.PostsService.addPost(createPostDto);
  }

  @Put(':id')
  updatePost(
    @Param('id') id: string,
    @Body() updatePostDto: UpdatePostDto,
  ): Promise<BlogPost> {
    return this.PostsService.updatePost(id, updatePostDto);
  }

  @Delete(':id')
  deletePost(@Param('id') id: string): Promise<BlogPost> {
    return this.PostsService.deletePost(id);
  }

}
