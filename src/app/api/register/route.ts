import {db} from "../db"
import {NextResponse} from "next/server";


export const POST = async (req: Request) => {
    const body = await req.json();
    const newUser = { ...body, id: db.user.length + 1 };
    db.user.push(newUser);
    const token = `jwt-token-for:${db.user.length}`;
    return new NextResponse(JSON.stringify({ data: newUser, token }), { status: 201 });
};