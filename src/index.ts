import { Hono } from "hono";
import { logger } from "hono/logger";
import { secureHeaders } from "hono/secure-headers";
import { timing } from "hono/timing";

type Env = {
  ENVIRONMENT: "dev" | "prod";
};

interface HonoContext {
  Bindings: Env;
  /**
   * injected context by `c.set()`
   * see https://hono.dev/api/context#set-get
   */
  Variables: {
    message: string;
  };
}

const app = new Hono<HonoContext>();
app.use(timing());
app.use(logger());
app.use(secureHeaders());

app.get("/", (c) => {
  return c.text("Hello!");
});

export default app;
