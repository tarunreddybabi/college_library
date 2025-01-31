"use client";
import { ColumnDef } from "@tanstack/react-table";
import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { DataTable } from "@/components/DataTable";

const Page = async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not set!");
  }
  const result = await db.select().from(users);
  const data = result;
  const columns: ColumnDef<User>[] = [
    { accessorKey: "fullName", header: "Full Name" },
    { accessorKey: "email", header: "Email" },
    { accessorKey: "universityId", header: "University Id" },
    { accessorKey: "universityCard", header: "University Card" },
    { accessorKey: "role", header: "Role" },
  ];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
