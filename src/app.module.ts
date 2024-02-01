import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import databaseConfig from './config/database.config';
import { UsersController } from './users/users.controller';
import { PostsController } from './posts/posts.controller';
import { AuthController } from './auth/auth.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

//Modules
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get('database.uri'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    PostsModule
  ],
  controllers: [
    AppController, 
    AuthController, 
    UsersController, 
    PostsController
  ],
  providers: [
    AppService,
  ],
})

export class AppModule {}
