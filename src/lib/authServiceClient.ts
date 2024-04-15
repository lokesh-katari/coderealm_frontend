import { AuthServiceClient } from "@/proto/auth_proto/AuthServiceClientPb";

export const authClient = new AuthServiceClient("http://localhost:8000");
