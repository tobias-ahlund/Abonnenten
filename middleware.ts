// This middleware is used to update the user's session for authorization purposes

// We use the createMiddlewareClient() function to create a middleware Supabase client
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
// Next response to a request
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import type { Database } from "@/lib/database.types";

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();
    const supabase = createMiddlewareClient<Database>({ req, res });
    await supabase.auth.getSession();
    return res;
}