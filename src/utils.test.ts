import { assertEquals } from "@std/assert";
import { iso8601WithOffset } from "./utils.ts";

Deno.test("iso8601WithOffset()", () => {
  assertEquals(
    iso8601WithOffset(1700944643145, 480),
    "2023-11-26T04:37:23.145+08:00",
  );
});
