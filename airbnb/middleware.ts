import { createClientComponentClient, createMiddlewareClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
// import type { Database } from '@/lib/database.types'
import { cookies } from 'next/headers';
import { url } from 'inspector';

export async function middleware(request: NextRequest) {
    const supabase = createServerComponentClient({cookies});
    const { data, error } = await supabase.auth.getUser();
    if (data.user == null)
    {
        return NextResponse.redirect(new URL("/?error=Please login to add your place", request.url));
    }
    return NextResponse.next();
} 

export const config = {
    matcher:["/addHome", "/dashboard"]
}