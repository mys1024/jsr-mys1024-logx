import * as colors from "@std/colors";
import { iso8601WithOffset } from "./utils.ts";

/* -------------------------------------------------- timezone offset -------------------------------------------------- */

/** logx's timezone offset */
let timezoneOffset = 0;

/**
 * Set logx's timezone offset.
 * @param offset Timezone offset in minutes.
 */
export function setTimezoneOffset(offset: number) {
  timezoneOffset = offset;
}

/**
 * Get logx's timezone offset for.
 * @param offset Timezone offset in minutes.
 */
export function getTimezoneOffset(): number {
  return timezoneOffset;
}

/* -------------------------------------------------- normalized log function -------------------------------------------------- */

const labels = {
  info: colors.white(colors.bgBlue(" INFO ")),
  warn: colors.black(colors.bgYellow(" WARN ")),
  error: colors.white(colors.bgRed(" ERR  ")),
  log: colors.black(colors.bgWhite(" LOG  ")),
};

function normalizedLog(options: {
  type: "info" | "warn" | "error" | "log";
  messages: unknown[];
  timezoneOffset?: number;
}) {
  const { type, messages, timezoneOffset: _timezoneOffset = timezoneOffset } =
    options;
  console[type](
    labels[type],
    colors.gray(iso8601WithOffset(Date.now(), timezoneOffset)),
    ...messages,
  );
}

/* -------------------------------------------------- log functions -------------------------------------------------- */

export function info(...messages: unknown[]) {
  normalizedLog({
    type: "info",
    messages,
  });
}

export function warn(...messages: unknown[]) {
  normalizedLog({
    type: "warn",
    messages,
  });
}

export function error(...messages: unknown[]) {
  normalizedLog({
    type: "error",
    messages,
  });
}

export function log(...messages: unknown[]) {
  normalizedLog({
    type: "log",
    messages,
  });
}
