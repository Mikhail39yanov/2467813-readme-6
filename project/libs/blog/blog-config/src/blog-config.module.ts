import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import applicationConfig from './configurations/app.config';
import rabbitBlogConfig from './configurations/rabbit.config';
import { PathEnvironments } from '@project/constant';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      load: [applicationConfig, rabbitBlogConfig],
      envFilePath: PathEnvironments.Blog,
    }),
  ],
})
export class BlogConfigModule {}
