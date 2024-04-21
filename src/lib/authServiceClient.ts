import { AuthServiceClient } from "@/proto/auth_proto/AuthServiceClientPb";

export const authClient = new AuthServiceClient(
  process.env.AUTH_SERVICE_URL || "http://localhost:8000"
);
