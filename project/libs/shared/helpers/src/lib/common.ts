import { ClassTransformOptions, plainToInstance } from 'class-transformer';

type TPlainObject = Record<string, unknown>;

export function fillDto<T, V extends TPlainObject>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions
): T;
export function fillDto<T, V extends TPlainObject[]>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions
): T[];
export function fillDto<T, V extends TPlainObject>(
  DtoClass: new () => T,
  plainObject: V,
  options?: ClassTransformOptions
): T | T[] {
  return plainToInstance(DtoClass, plainObject, {
    excludeExtraneousValues: true,
    ...options,
  });
}

export const getMongoConnectionString = ({
  username,
  password,
  host,
  port,
  databaseName,
  authDatabase,
}): string =>
  `mongodb://${username}:${password}@${host}:${port}/${databaseName}?authSource=${authDatabase}`;
