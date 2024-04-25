import * as jspb from 'google-protobuf'



export class ChangePasswordRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): ChangePasswordRequest;

  getOldpassword(): string;
  setOldpassword(value: string): ChangePasswordRequest;

  getNewpassword(): string;
  setNewpassword(value: string): ChangePasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
  static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
  export type AsObject = {
    token: string,
    oldpassword: string,
    newpassword: string,
  }
}

export class ChangePasswordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ChangePasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChangePasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ChangePasswordResponse): ChangePasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ChangePasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChangePasswordResponse;
  static deserializeBinaryFromReader(message: ChangePasswordResponse, reader: jspb.BinaryReader): ChangePasswordResponse;
}

export namespace ChangePasswordResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class GetUserRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): GetUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserRequest;
  static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
  export type AsObject = {
    token: string,
  }
}

export class GetUserResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): GetUserResponse;
  hasUser(): boolean;
  clearUser(): GetUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserResponse): GetUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserResponse;
  static deserializeBinaryFromReader(message: GetUserResponse, reader: jspb.BinaryReader): GetUserResponse;
}

export namespace GetUserResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class UpdateUserSubmissionsRequest extends jspb.Message {
  getToken(): string;
  setToken(value: string): UpdateUserSubmissionsRequest;

  getQueid(): string;
  setQueid(value: string): UpdateUserSubmissionsRequest;

  getDifficulty(): string;
  setDifficulty(value: string): UpdateUserSubmissionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserSubmissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserSubmissionsRequest): UpdateUserSubmissionsRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserSubmissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserSubmissionsRequest;
  static deserializeBinaryFromReader(message: UpdateUserSubmissionsRequest, reader: jspb.BinaryReader): UpdateUserSubmissionsRequest;
}

export namespace UpdateUserSubmissionsRequest {
  export type AsObject = {
    token: string,
    queid: string,
    difficulty: string,
  }
}

export class UpdateUserSubmissionsResponse extends jspb.Message {
  getUser(): User | undefined;
  setUser(value?: User): UpdateUserSubmissionsResponse;
  hasUser(): boolean;
  clearUser(): UpdateUserSubmissionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserSubmissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserSubmissionsResponse): UpdateUserSubmissionsResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateUserSubmissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserSubmissionsResponse;
  static deserializeBinaryFromReader(message: UpdateUserSubmissionsResponse, reader: jspb.BinaryReader): UpdateUserSubmissionsResponse;
}

export namespace UpdateUserSubmissionsResponse {
  export type AsObject = {
    user?: User.AsObject,
  }
}

export class RegisterUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): RegisterUserRequest;

  getPassword(): string;
  setPassword(value: string): RegisterUserRequest;

  getName(): string;
  setName(value: string): RegisterUserRequest;

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
    name: string,
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

  getEasyProblemCount(): number;
  setEasyProblemCount(value: number): User;

  getMediumProblemCount(): number;
  setMediumProblemCount(value: number): User;

  getHardProblemCount(): number;
  setHardProblemCount(value: number): User;

  getSolvedProblemsList(): Array<string>;
  setSolvedProblemsList(value: Array<string>): User;
  clearSolvedProblemsList(): User;
  addSolvedProblems(value: string, index?: number): User;

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
    easyProblemCount: number,
    mediumProblemCount: number,
    hardProblemCount: number,
    solvedProblemsList: Array<string>,
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

