import { Module } from '@nestjs/common';
import { CommentModule } from '@project/comment';
import { PostModule } from '@project/post';
import { BlogConfigModule } from '@project/blog-config';
import { LikeModule } from '@project/likes';

@Module({
  imports: [BlogConfigModule, CommentModule, PostModule, LikeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
