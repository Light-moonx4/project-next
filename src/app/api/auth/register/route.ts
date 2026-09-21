import {NextResponse} from "next/server";
// Import the Prisma client instance from the database module (prisma,Drizzle,etc.) y bcrypt para password hashing

export async function POST(request: Request) {
    try {
        const {email,password,name} = await request.json();
        //1. Validate the input data exists and is in the correct format (e.g., email format, password strength)
        //2.hash the password using bcrypt or a similar library
        //3. Store the user data in the database using Prisma or your chosen ORM
        //4. Return a success response with appropriate status code and message
        return NextResponse.json({message: "User registered successfully"}, {status: 201});
    } catch (error) {
        return NextResponse.json({message: "Error registering user"}, {status: 500});
    }
}