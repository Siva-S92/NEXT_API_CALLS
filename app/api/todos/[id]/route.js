import { NextResponse } from "next/server";
import connectMongoDB from "@/src/utils/dbConnect";
import Todo from "@/src/models/todo";


// Get Single Document
export async function GET(request, {params}){
    connectMongoDB();
    console.log(params)
    //get particaualar document
    const { id } = params
    const todo = await Todo.findById(id)
    return new NextResponse(JSON.stringify(todo))
}

// UPDATE Sngle Document
export async function PUT(request, {params}){
    connectMongoDB();
    const{ id } = params;
    const data = await request.json();
    const todo = await Todo.findByIdAndUpdate(id, data, {new: true} )
    return new NextResponse(JSON.stringify(todo))
}
// DELETE Sngle Document
export async function DELETE(request, {params}){
    connectMongoDB();
    const{ id } = params;
    const todo = await Todo.findByIdAndDelete(id)
    return new NextResponse(JSON.stringify({
        message: "the post Deleted",
        data: todo
    }))
}


