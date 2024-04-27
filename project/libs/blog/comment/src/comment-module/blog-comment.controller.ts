import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
} from '@nestjs/common';

import { BlogCommentService } from './blog-comment.service';
import { fillDto } from '@project/helpers';
import { CreateCommentDto } from '../dto/create-comment.dto';
import { CommentRdo } from '../rdo/comment.rdo';
import { AppRoutes, Path, AuthToken, SortDirection } from '@project/constant';
import { ApiHeader, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentResponseMessage } from '../const';
import { CommentWithPaginationRdo } from '../rdo/comment-with-pagination.rdo';
import { BlogCommentQuery } from './blog-comment.query';

@ApiTags(AppRoutes.Comments)
@Controller(`${AppRoutes.Posts}/:postId/${Path.Comments}`)
export class BlogCommentController {
  constructor(private readonly blogCommentService: BlogCommentService) {}

  @ApiResponse({
    type: CommentWithPaginationRdo,
    status: HttpStatus.OK,
    description: CommentResponseMessage.CommentListSuccess,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: CommentResponseMessage.NotFound,
  })
  @ApiQuery({
    name: 'limit',
    type: 'number',
    required: false,
  })
  @ApiQuery({
    name: 'sortDirection',
    enum: SortDirection,
    required: false,
  })
  @ApiQuery({
    name: 'page',
    type: 'number',
    required: false,
  })
  @Get()
  public async show(
    @Param('postId') postId: string,
    @Query() query: BlogCommentQuery
  ) {
    const commentsWithPagination = await this.blogCommentService.getAllComments(
      postId,
      query
    );

    const result = {
      ...commentsWithPagination,
      entities: commentsWithPagination.entities.map((comment) =>
        comment.toPOJO()
      ),
    };
    return fillDto(CommentWithPaginationRdo, result);
  }

  @ApiResponse({
    type: CreateCommentDto,
    status: HttpStatus.CREATED,
    description: CommentResponseMessage.CreatedSuccess,
  })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: CommentResponseMessage.NotFound,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: CommentResponseMessage.IsNotLogged,
  })
  @ApiHeader({
    name: AuthToken.Name,
    description: AuthToken.Description,
    required: true,
  })
  @Post()
  public async create(
    @Param('postId') postId: string,
    @Body() dto: CreateCommentDto
  ) {
    const newComment = await this.blogCommentService.createComment(postId, dto);
    return fillDto(CommentRdo, newComment.toPOJO());
  }

  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: CommentResponseMessage.NotFound,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: CommentResponseMessage.IsNotLogged,
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: CommentResponseMessage.DeleteSuccess,
  })
  @ApiHeader({
    name: AuthToken.Name,
    description: AuthToken.Description,
    required: true,
  })
  @Delete(':commentId')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async destroy(@Param('commentId') id: string) {
    await this.blogCommentService.deleteComment(id);
  }
}
