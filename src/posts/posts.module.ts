import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsEntity } from './posts.entity';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
@Module({
  controllers: [PostsController],
  imports: [TypeOrmModule.forFeature([PostsEntity])],
  providers: [PostsService],
})
export class PostsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
