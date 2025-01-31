'use client'
import { ColumnDef } from "@tanstack/react-table"
import { db } from "@/database/drizzle";
import { books, users } from "@/database/schema";


export const columns: ColumnDef<User>[] = [];

const Page = async() => {
    const result=await db.select().from(users);
  console.log(result);
  return (
    <div>Page</div>
  )
}

export default Page