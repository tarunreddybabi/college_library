import { db } from "@/database/drizzle";
import { users } from "@/database/schema";
import { DataTable } from "@/components/DataTable";
import { UserColumns } from "@/components/UserColumns";

const Page = async () => {
  const result = await db.select().from(users);

  return (
    <div className="bg-white rounded-lg p-4">
      <p>All Users</p>
      <DataTable columns={UserColumns} data={result} />
    </div>
  );
};

export default Page;
