import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";


const onlyAdmin = ["/admin/home", "/admin/pengguna", "/admin/pembayaran"]
const wasLogin = ["/auth/masuk"]



export default function withAuth(middleware: NextMiddleware, requireAuth: string[] = []) {
    return async (req: NextRequest, next: NextFetchEvent) => {
        const pathname = req.nextUrl.pathname;
        if (requireAuth.includes(pathname)) {
            const token = await getToken({
                req,
                secret: process.env.NEXT_AUTH_SECRET
            });
            // Jika pengguna sudah login dan mencoba mengakses rute "/auth/masuk", redirect ke rute beranda ("/")
            if (pathname === "/auth/masuk" && token && token.role === "admin") {
                return NextResponse.redirect(new URL("/admin/home", req.url));
            }

            // Jika rute membutuhkan autentikasi dan pengguna belum login
            if (requireAuth.includes(pathname) && !token && pathname !== "/auth/masuk") {
                const url = new URL("/", req.url);
                url.searchParams.set("callbackUrl", encodeURI(req.url));
                return NextResponse.redirect(url);
            }

            // Jika pengguna sudah login dan mencoba mengakses rute yang hanya untuk admin, redirect ke rute beranda ("/")
            if (token && token.role !== "admin" && onlyAdmin.includes(pathname)) {
                return NextResponse.redirect(new URL("/", req.url));
            }

            // Jika pengguna sudah login dan mencoba mengakses rute yang hanya untuk pengguna yang belum login, redirect ke rute beranda ("/")
            if (token && wasLogin.includes(pathname)) {
                return NextResponse.redirect(new URL("/", req.url));
            }

        }
        return middleware(req, next)
        }
}