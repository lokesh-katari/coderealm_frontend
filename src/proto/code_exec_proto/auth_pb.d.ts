import * as jspb from 'google-protobuf'



export class RegisterUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RegisterUserRequest;

  getPassword(): string;
  setPassword(value: string): RegisterUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserRequest): RegisterUserRequest.AsObject;
  static serializeBinaryToWriter(message: RegisterUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserRequest;
  static deserializeBinaryFromReader(message: RegisterUserRequest, reader: jspb.BinaryReader): RegisterUserRequest;
}

export namespace RegisterUserRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class RegisterUserResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): RegisterUserResponse;

  getUser(): User | undefined;
  setUser(value?: User): RegisterUserResponse;
  hasUser(): boolean;
  clearUser(): RegisterUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RegisterUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RegisterUserResponse): RegisterUserResponse.AsObject;
  static serializeBinaryToWriter(message: RegisterUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RegisterUserResponse;
  static deserializeBinaryFromReader(message: RegisterUserResponse, reader: jspb.BinaryReader): RegisterUserResponse;
}

export namespace RegisterUserResponse {
  export type AsObject = {
    token: string,
    user?: User.AsObject,
  }
}

export class LoginUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginUserRequest;

  getPassword(): string;
  setPassword(value: string): LoginUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUserRequest): LoginUserRequest.AsObject;
  static serializeBinaryToWriter(message: LoginUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUserRequest;
  static deserializeBinaryFromReader(message: LoginUserRequest, reader: jspb.BinaryReader): LoginUserRequest;
}

export namespace LoginUserRequest {
  export type AsObject = {
    email: string,
    password: string,
  }
}

export class LoginUserResponse extends jspb.Message {
  getToken(): string;
  setToken(value: string): LoginUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUserResponse): LoginUserResponse.AsObject;
  static serializeBinaryToWriter(message: LoginUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUserResponse;
  static deserializeBinaryFromReader(message: LoginUserResponse, reader: jspb.BinaryReader): LoginUserResponse;
}

export namespace LoginUserResponse {
  export type AsObject = {
    token: string,
  }
}

export class User extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): User;

  getName(): string;
  setName(value: string): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    email: string,
    name: string,
  }
}

export class LogoutUserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): LogoutUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutUserRequest): LogoutUserRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutUserRequest;
  static deserializeBinaryFromReader(message: LogoutUserRequest, reader: jspb.BinaryReader): LogoutUserRequest;
}

export namespace LogoutUserRequest {
  export type AsObject = {
    token: string,
  }
}

export class LogoutUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LogoutUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutUserResponse): LogoutUserResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutUserResponse;
  static deserializeBinaryFromReader(message: LogoutUserResponse, reader: jspb.BinaryReader): LogoutUserResponse;
}

export namespace LogoutUserResponse {
  export type AsObject = {
    success: boolean,
  }
}

