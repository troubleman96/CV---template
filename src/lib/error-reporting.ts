/**
 * Lightweight error reporting utility.
 * Reports errors to the console; extend with your own
 * observability provider (e.g. Sentry, Datadog) as needed.
 */
export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Response
      ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}`
      : error instanceof Error
        ? error.message
        : String(error);

  const stack = error instanceof Error ? error.stack : undefined;

  console.error("[CVeeBee Error]", message, { stack, ...context });
}
