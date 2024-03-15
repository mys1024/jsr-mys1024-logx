import { assertEquals } from "@std/assert";
import * as logx from "./mod.ts";

Deno.test("timezone offset", () => {
  assertEquals(logx.getTimezoneOffset(), 0);
  logx.setTimezoneOffset(480);
  assertEquals(logx.getTimezoneOffset(), 480);
});
