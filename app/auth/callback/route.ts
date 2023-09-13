// This is a code exchange route, which exchanges an auth code for the user's session, which is set as a cookie for future requests made to Supabase.

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server"
import type { Database } from "@/lib/database.types";

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url)
    console.log(requestUrl);
    const code = requestUrl.searchParams.get("code")

    if (code) {
        const supabase = createRouteHandlerClient<Database>({ cookies })
        await supabase.auth.exchangeCodeForSession(code)
    }

    // URL to redirect to after sign in process completes
    return NextResponse.redirect(requestUrl.origin)
}