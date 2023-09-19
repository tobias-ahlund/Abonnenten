// This middleware is used to update the user's session for authorization purposes

// We use the createMiddlewareClient() function to create a middleware Supabase client
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// Next response to a request
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/lib/database.types";
import { redirect } from "next/dist/server/api-utils";

export async function middleware(req: NextRequest) {
    const dashboardPath = '/dashboard'
    const res = NextResponse.next();
    const supabase = createMiddlewareClient<Database>({ req, res });

    const url = req.nextUrl.clone()
    url.pathname = '/'

    const {
        data: { session },
      } = await supabase.auth.getSession();

    if (!session) {
        if (req.nextUrl.pathname.startsWith(dashboardPath)) {
          return NextResponse.redirect(url);
        }
      }

    return res;
}