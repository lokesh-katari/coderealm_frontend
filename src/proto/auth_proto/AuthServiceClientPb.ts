/**
 * @fileoverview gRPC-Web generated client stub for auth
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.4.2
// 	protoc              v3.12.4
// source: auth.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as auth_pb from './auth_pb';


export class AuthServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorRegisterUser = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/RegisterUser',
    grpcWeb.MethodType.UNARY,
    auth_pb.RegisterUserRequest,
    auth_pb.RegisterUserResponse,
    (request: auth_pb.RegisterUserRequest) => {
      return request.serializeBinary();
    },
    auth_pb.RegisterUserResponse.deserializeBinary
  );

  registerUser(
    request: auth_pb.RegisterUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.RegisterUserResponse>;

  registerUser(
    request: auth_pb.RegisterUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.RegisterUserResponse) => void): grpcWeb.ClientReadableStream<auth_pb.RegisterUserResponse>;

  registerUser(
    request: auth_pb.RegisterUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.RegisterUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/RegisterUser',
        request,
        metadata || {},
        this.methodDescriptorRegisterUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/RegisterUser',
    request,
    metadata || {},
    this.methodDescriptorRegisterUser);
  }

  methodDescriptorLoginUser = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/LoginUser',
    grpcWeb.MethodType.UNARY,
    auth_pb.LoginUserRequest,
    auth_pb.LoginUserResponse,
    (request: auth_pb.LoginUserRequest) => {
      return request.serializeBinary();
    },
    auth_pb.LoginUserResponse.deserializeBinary
  );

  loginUser(
    request: auth_pb.LoginUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.LoginUserResponse>;

  loginUser(
    request: auth_pb.LoginUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.LoginUserResponse) => void): grpcWeb.ClientReadableStream<auth_pb.LoginUserResponse>;

  loginUser(
    request: auth_pb.LoginUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.LoginUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/LoginUser',
        request,
        metadata || {},
        this.methodDescriptorLoginUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/LoginUser',
    request,
    metadata || {},
    this.methodDescriptorLoginUser);
  }

  methodDescriptorLogoutUser = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/LogoutUser',
    grpcWeb.MethodType.UNARY,
    auth_pb.LogoutUserRequest,
    auth_pb.LogoutUserResponse,
    (request: auth_pb.LogoutUserRequest) => {
      return request.serializeBinary();
    },
    auth_pb.LogoutUserResponse.deserializeBinary
  );

  logoutUser(
    request: auth_pb.LogoutUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.LogoutUserResponse>;

  logoutUser(
    request: auth_pb.LogoutUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.LogoutUserResponse) => void): grpcWeb.ClientReadableStream<auth_pb.LogoutUserResponse>;

  logoutUser(
    request: auth_pb.LogoutUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.LogoutUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/LogoutUser',
        request,
        metadata || {},
        this.methodDescriptorLogoutUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/LogoutUser',
    request,
    metadata || {},
    this.methodDescriptorLogoutUser);
  }

  methodDescriptorGetUser = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/GetUser',
    grpcWeb.MethodType.UNARY,
    auth_pb.GetUserRequest,
    auth_pb.GetUserResponse,
    (request: auth_pb.GetUserRequest) => {
      return request.serializeBinary();
    },
    auth_pb.GetUserResponse.deserializeBinary
  );

  getUser(
    request: auth_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.GetUserResponse>;

  getUser(
    request: auth_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.GetUserResponse) => void): grpcWeb.ClientReadableStream<auth_pb.GetUserResponse>;

  getUser(
    request: auth_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.GetUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/GetUser',
        request,
        metadata || {},
        this.methodDescriptorGetUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/GetUser',
    request,
    metadata || {},
    this.methodDescriptorGetUser);
  }

  methodDescriptorUpdateUserSubmissions = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/UpdateUserSubmissions',
    grpcWeb.MethodType.UNARY,
    auth_pb.UpdateUserSubmissionsRequest,
    auth_pb.UpdateUserSubmissionsResponse,
    (request: auth_pb.UpdateUserSubmissionsRequest) => {
      return request.serializeBinary();
    },
    auth_pb.UpdateUserSubmissionsResponse.deserializeBinary
  );

  updateUserSubmissions(
    request: auth_pb.UpdateUserSubmissionsRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.UpdateUserSubmissionsResponse>;

  updateUserSubmissions(
    request: auth_pb.UpdateUserSubmissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.UpdateUserSubmissionsResponse) => void): grpcWeb.ClientReadableStream<auth_pb.UpdateUserSubmissionsResponse>;

  updateUserSubmissions(
    request: auth_pb.UpdateUserSubmissionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.UpdateUserSubmissionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/UpdateUserSubmissions',
        request,
        metadata || {},
        this.methodDescriptorUpdateUserSubmissions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/UpdateUserSubmissions',
    request,
    metadata || {},
    this.methodDescriptorUpdateUserSubmissions);
  }

  methodDescriptorChangePassword = new grpcWeb.MethodDescriptor(
    '/auth.AuthService/ChangePassword',
    grpcWeb.MethodType.UNARY,
    auth_pb.ChangePasswordRequest,
    auth_pb.ChangePasswordResponse,
    (request: auth_pb.ChangePasswordRequest) => {
      return request.serializeBinary();
    },
    auth_pb.ChangePasswordResponse.deserializeBinary
  );

  changePassword(
    request: auth_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null): Promise<auth_pb.ChangePasswordResponse>;

  changePassword(
    request: auth_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: auth_pb.ChangePasswordResponse) => void): grpcWeb.ClientReadableStream<auth_pb.ChangePasswordResponse>;

  changePassword(
    request: auth_pb.ChangePasswordRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: auth_pb.ChangePasswordResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/auth.AuthService/ChangePassword',
        request,
        metadata || {},
        this.methodDescriptorChangePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/auth.AuthService/ChangePassword',
    request,
    metadata || {},
    this.methodDescriptorChangePassword);
  }

}

