import { FC, PropsWithChildren } from "hono/dist/types/jsx/index";
import { HtmlEscapedString } from "hono/utils/html";
import { JWTPayload } from "hono/utils/jwt/types";
import { PropsForRenderer, Context } from "hono/dist/types/context";

export interface Payload extends JWTPayload {
  id: string;
}

export type Variables = {
  JWTPayload: Payload;
};

type ComponentWithChildren = (
  props: PropsWithChildren<
    PropsForRenderer & {
      Layout: FC;
    }
  >,
  c: Context
) => HtmlEscapedString | Promise<HtmlEscapedString>;
