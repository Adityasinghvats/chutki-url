/* eslint-disable @typescript-eslint/no-explicit-any */
import Url from "@/app/models/Url.js";
import { NextResponse } from "next/server";

export async function GET(
    request: Request,
  { params }: { params: Promise<{ code: string }> }
): Promise<NextResponse> {
    try {
        const { code } = await params
        
        if (!code) {
            return NextResponse.json({ error: 'Code parameter is missing' }, { status: 400 });
        }

        const url = await Url.findOne({ urlCode: code });

        if (url) {
            return NextResponse.redirect(url.longUrl);
        } else {
            return NextResponse.json({ error: 'No URL Found' }, { status: 404 });
        }
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: 'Server Error' }, { status: 500 });
    }
}