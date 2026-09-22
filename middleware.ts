import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request:NextRequest) {
    const token = request.cookies.get('token')?.value;
    const url = request.url;

    if (!token &&(url.includes('/admin') || url.includes('/user'))){
        return NextResponse.redirect(new URL('/login', request.url));
    }

    if(token){
        try{
            const role ='admin';

            if(url.includes('/admin')&& role!== 'admin'){
                return NextResponse.redirect(new URL('/user/dashboard', request.url));
            }
        }catch (error){
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }

    return NextResponse.next();
    
}
export const config = {
    matcher: ['/admin/:path*', '/user/:path*'],
};