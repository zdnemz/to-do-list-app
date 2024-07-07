import { JWTPayload } from "hono/utils/jwt/types";

export interface Payload extends JWTPayload {
  id: string;
}

export type Variables = {
  JWTPayload: Payload;
};
