import { type NextRequest } from 'next/server'
import { updateSession } from '@/../utils/supabase-middleware';

// This middleware is used to update the Supabase session for every request.
// It checks if the user is authenticated and redirects to the login page if not.
export async function middleware(request: NextRequest) {
  return await updateSession(request)
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
