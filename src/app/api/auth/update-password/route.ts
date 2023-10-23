import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';
import AppRoutes from '@/constants/appRoutes';

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    await supabase.auth.exchangeCodeForSession(code);

    return NextResponse.redirect(
      new URL(AppRoutes.AUTH.SIGN_IN.PASSWROD_CHANGE.INDEX, requestUrl.origin),
    );
  }

  return NextResponse.redirect(
    new URL(AppRoutes.AUTH.SIGN_IN.INDEX, requestUrl.origin),
  );
}
