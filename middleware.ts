import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Basic Auth credentials
const BASIC_AUTH_USER = "kanri-one"
const BASIC_AUTH_PASSWORD = "Deha@1012"

export function middleware(request: NextRequest) {
  // Skip Basic Auth in development or v0 preview environment
  const host = request.headers.get("host") || ""
  const isDevOrPreview = 
    process.env.NODE_ENV === "development" ||
    host.includes("localhost") ||
    host.includes("vercel.app") ||
    host.includes("v0.dev") ||
    host.includes("vusercontent.net")

  if (isDevOrPreview) {
    return NextResponse.next()
  }

  const authHeader = request.headers.get("authorization")

  if (authHeader) {
    const authValue = authHeader.split(" ")[1]
    const [user, pwd] = atob(authValue).split(":")

    if (user === BASIC_AUTH_USER && pwd === BASIC_AUTH_PASSWORD) {
      return NextResponse.next()
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Secure Area"',
    },
  })
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, documents, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.svg$|.*\\.ico$|documents).*)",
  ],
}
