export const Name = {
  Min: 3,
  Max: 50,
} as const;

export const Password = {
  Min: 6,
  Max: 12,
} as const;

export const AuthUser = {
  Exists: 'User with this email exists',
  NotFound: 'User not found',
  PasswordWrong: 'User password is wrong',
  IsNotLogged: 'The token is invalid or expired.',
  ComparePassword: 'The new password is the same as the old one.',
  TokenError: 'Ошибка при создании токена.',
} as const;

export const AuthenticationResponseMessage = {
  LoggedSuccess: 'User has been successfully logged.',
  UpdateTokens: 'tokens have been updated',
  LoggedError: 'Password or Login is wrong.',
  UserFound: 'User found',
  UserNotFound: 'User not found',
  UserExist: 'User with the email already exists',
  UserCreated: 'The new user has been successfully created.',
  UpdateUserPassword: 'The user has successfully updated the password.',
  NewTokens: 'Get a new access/refresh tokens.',
} as const;

export const CreateUserMessages = {
  firstName: {
    invalidFormat: 'firstName is required',
    lengthField: `min length is ${Name.Min}, max is ${Name.Max}`,
  },
  lastName: {
    invalidFormat: 'lastName is required',
    lengthField: `min length is ${Name.Min}, max is ${Name.Max}`,
  },
  email: {
    invalidFormat: 'email must be a valid address',
  },
  password: {
    invalidFormat: 'password is required',
    lengthField: `min length for password is ${Password.Min}, max is ${Password.Max}`,
  },
  newPassword: {
    invalidFormat: 'newPassword is required',
    lengthField: `min length for password is ${Password.Min}, max is ${Password.Max}`,
  },
} as const;
