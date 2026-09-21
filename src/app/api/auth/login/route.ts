import {NextResponse} from "next/server";
import {cookies} from "next/headers";


// import {sighjwt} from 'jony'

export async function POST(request: Request) {
    try {
        const {email,password} = await request.json();
        //1. search for the user in the database and validate the credentials (email and password)
        //const user = await db.users.findUnique({where: {email}});
        //yes failed to find user, return error response 404

        //simulate user search and found 
        const user = {id: '1', email,password, role: 'admin'};// o 'user'

        //2. create a JWT token with user information and sign it using a secret key
        const token ='jwt_token_firmado_aqui';

        //3. save the token jwt (example)
        (await cookies()).set({
            name: 'token',
            value: token,
            httpOnly: true,
            secure : process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            path : '/',
            maxAge: 60*60*24*7,// week
        });

        return NextResponse.json(

            {message: 'Login success', role: user.role},
            {status: 200}
        );
    } catch(error){
        return NextResponse.json(
            {message : 'Invalid credentials'},
            {status: 401}
        )
    }
}