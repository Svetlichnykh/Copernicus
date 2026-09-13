import "server-only";

import { createHash, timingSafeEqual } from "node:crypto";

export const ADMIN_SESSION_COOKIE = "ies_admin_session";
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 12;

function expectedSessionToken(): string | null {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return null;
  return createHash("sha256").update(`ies-admin:${password}`).digest("hex");
}

export function verifyAdminPassword(candidate: string): boolean {
  const password = process.env.ADMIN_PASSWORD;
  if (!password) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(password);
  return a.length === b.length && timingSafeEqual(a, b);
}

export function createAdminSessionToken(): string | null {
  return expectedSessionToken();
}

export function isValidAdminSession(token: string | undefined): boolean {
  const expected = expectedSessionToken();
  if (!expected || !token) return false;
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && timingSafeEqual(a, b);
}

export const adminSessionCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: SESSION_MAX_AGE_SECONDS,
};
