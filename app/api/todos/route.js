import { NextResponse } from "next/server";
import connectMongoDB from "../../../src/utils/dbConnect";
import Todo from "../../../src/models/todo";



// Create  Todo
export async function POST(request){
    //connect to MongoDB
    connectMongoDB();
    //create todo
    const todo_Data = await request.json();
    console.log(todo_Data)
    const todo = await Todo.create(todo_Data)
    return new NextResponse(JSON.stringify(todo))
}
// Fetching 
export async function GET(request){
    connectMongoDB();
    const todos = await Todo.find()
    return new NextResponse(JSON.stringify(todos))
}


