import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/home(.*)",
  "/students(.*)",
  "/teachers(.*)",
  "/subjects(.*)",
  "/admission(.*)",
  "/enrolment(.*)",
]);

export default clerkMiddleware((auth, req) => {
  if(!auth().userId && isProtectedRoute(req)){
    return auth().redirectToSignIn();
  }
  if(
    auth().userId &&
    !auth().orgId &&
    req.nextUrl.pathname !== "/home" &&
    req.nextUrl.pathname !== "/"
  ) {
    return NextResponse.redirect(new URL("/home", req.url));
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}