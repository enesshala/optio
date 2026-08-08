import { defaultLocale, locales, normalizeLocale } from "./lib/i18n";

import { NextRequest, NextResponse } from "next/server";

/** App routes (non-locale first segment) that must not redirect to home */
const APP_ROUTE_ROOTS = new Set(["collab"]);

function localeFromPath(pathname: string): string {
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && locales.includes(segment) && segment !== "") {
    return normalizeLocale(segment);
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isKnownLocalePath = locales.some(
    (locale) =>
      locale !== "" &&
      (pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`)
  );

  const first = pathname.split("/").filter(Boolean)[0];
  const isAppRoute = Boolean(first && APP_ROUTE_ROOTS.has(first));

  if (pathname === "/" || isKnownLocalePath || isAppRoute) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", localeFromPath(pathname));
    return NextResponse.next({
      request: { headers: requestHeaders },
    });
  }

  if (first && !locales.includes(first)) {
    request.nextUrl.pathname = `/`;
    return NextResponse.redirect(request.nextUrl);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", localeFromPath(pathname));
  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|terms|.*\\.(?:txt|xml|ico|png|jpg|jpeg|svg|gif|webp|js|css|woff|woff2|ttf|eot)).*)",
  ],
};
