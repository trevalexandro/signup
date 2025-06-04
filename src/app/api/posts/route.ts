import { NextRequest, NextResponse } from "next/server";
import { createClient } from "../../../../utils/supabase-client";


export const GET = async (request: NextRequest):Promise<NextResponse> => {
    const supabase = await createClient();
    const user = await supabase.auth.getUser();
    if (!user?.data) {
        console.error('Login required to access posts');
        return NextResponse.redirect('/auth', { status: 401 });
    }

    const { data, error } = await supabase.from("posts").select("*").order('scheduled_date', { ascending: true });

    if (error) {
        console.error(`Error fetching posts: ${error.message}`);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json(data, { status: 200 });
};