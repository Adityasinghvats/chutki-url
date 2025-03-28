/* eslint-disable @typescript-eslint/no-explicit-any */
import validUrl from "valid-url"
import shortid from "shortid";
import Url from "@/app/models/Url.js";
import connection from "@/app/config/db"
import { NextRequest, NextResponse } from "next/server";

connection()

//@route POST /api/url/shorten
export async function POST(req: NextRequest) {
    const body = await req.json();
    const {longUrl} = body;
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
    console.log('Base URL:', baseUrl); 

    if (!longUrl) {
        return NextResponse.json(
            {error:"Long URL is required"},
            {status: 400}
        )
    }
    console.log(longUrl);

    //check base url
    if(!validUrl.isUri(baseUrl)){
        // return res.status(401).json('Invalid base URL');
        return NextResponse.json(
            {error:"Invalid base URL"},
            {status: 401}
        )
    }
    
    //generate shortcode
    

    //check long url
    if(validUrl.isUri(longUrl)){
        try {
            const url = await Url.findOne({longUrl})
            console.log('Found URL:', url);  // Add this

            if(url){
                // return res.status(200).json(url);
                return NextResponse.json(
                    {status: 200, newUrl: url},
                )
            }else{
                const urlCode = shortid.generate();
                const shortUrl = baseUrl + '/api/' + urlCode;
                console.log('Generated short URL:', shortUrl);  // Add this
                const newUrl = new Url({
                    longUrl,
                    shortUrl,
                    urlCode,
                    date: new Date()
                })
                const savedUrl = await newUrl.save();
                console.log('Saved URL:', savedUrl);
                // return res.status(201).json(newUrl);
                return NextResponse.json(
                    {status: 201, newUrl: newUrl},
                )
            }
        } catch (error) {
            console.error(error)
            return NextResponse.json(
                {error:"Server error"},
                {status: 500}
            )
        }
    }else{
        return NextResponse.json(
            {error:"Invalid long url"},
            {status: 401}
        )
    }
}