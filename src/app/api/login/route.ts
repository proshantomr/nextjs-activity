import {db} from "../db"
import {NextResponse} from "next/server";


// export const POST = async (req: Request) => {
//     const body = await req.json();
//     const newUser = { ...body, id: db.user.length + 1 };
//     db.user.push(newUser);
//     const token = `jwt-token-for:${db.user.length}`;
//     return new NextResponse(JSON.stringify({ user: newUser, token }), { status: 201 });
// };

import { NextApiRequest, NextApiResponse } from 'next';

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const body = await req.json();
        const { email, password } = body;
        // console.log("test",body);
        // Find the user in the database
        const user = db.user.find((user: any) => user.email === email);

        if (!user || user.password !== password) {
            // If user is not found or password does not match
            return new NextResponse(JSON.stringify({ error: 'Invalid credentials.' }), { status: 401 });
        }

        // Generate a token (simulated for this example)
        const token = `jwt-token-for:${user.id}`;

        // Respond with user data and token
        return new NextResponse(JSON.stringify({ user, token ,status: 200 }));
    } catch (error) {
        console.error('Error during login:', error);
        return new NextResponse(JSON.stringify({ error: 'Something went wrong.' }), { status: 500 });
    }
};



// const {email,password} = await req.json();
// findUser: function(email:any, password:any) {
//     return this.user.find(user => user.email === email && user.password === password);
// }