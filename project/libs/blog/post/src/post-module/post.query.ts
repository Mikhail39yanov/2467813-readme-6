import { Transform } from 'class-transformer';
import {
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
  IsBoolean,
} from 'class-validator';

import {
  BooleanEnum,
  SortDirection,
  SortOption,
  TSortDirection,
  TSortOption,
  TTypePost,
  TypePost,
} from '@project/constant';

import { PostCount } from '../const';

export class PostQuery {
  @Transform(({ value }) => +value || PostCount.Default)
  @IsNumber()
  @IsOptional()
  public limit: number = PostCount.Default;

  @IsIn(Object.values(SortDirection))
  @IsOptional()
  public sortDirection: TSortDirection = SortDirection.Desc;

  @IsIn(Object.values(SortOption))
  @IsOptional()
  public sortOption?: TSortOption = SortOption.Date;

  @Transform(({ value }) => +value || PostCount.PageDefault)
  @IsOptional()
  public page: number = PostCount.PageDefault;

  @IsString()
  @IsOptional()
  public userId?: string;

  @Transform(({ value }) => {
    if (value === BooleanEnum.True) {
      return true;
    } else if (value === BooleanEnum.False) {
      return false;
    } else {
      return value;
    }
  })
  @IsBoolean()
  @IsOptional()
  public isPublished?: boolean;

  @IsIn(Object.values(TypePost))
  @IsOptional()
  public typePost?: TTypePost;

  @Transform(({ value }) => value.split(',').filter((tag) => tag.trim() !== ''))
  @IsString({ each: true })
  @IsOptional()
  public tags?: string[];

  @IsString()
  @IsOptional()
  public search?: string;
}
