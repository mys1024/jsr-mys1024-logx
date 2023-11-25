import { assertEquals } from "./deps.ts";
import * as logx from "./logx.ts";

Deno.test("timezone offset", () => {
  assertEquals(logx.getTimezoneOffset(), 0);
  logx.setTimezoneOffset(480);
  assertEquals(logx.getTimezoneOffset(), 480);
});
