import { NextRequest, NextResponse } from "next/server";
import withAuth from "./middlewares/withAuth";


export function mainmiddleware(req: NextRequest) {
    const res = NextResponse.next();
    return res
}


export default withAuth(mainmiddleware, [ "/admin/home", "/auth/masuk", "/pembayaran", "/admin/pengguna", "/admin/pembayaran",])