"use client";
import { ColumnDef } from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const UserColumns: ColumnDef<User>[] = [
  {
    accessorKey: "fullName",
    header: "Name",
    cell: ({ row }) => {
      const fullName = row.original.fullName;
      const email = row.original.email;
      const imageUrl = row.original.universityCard;

      return (
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage src={fullName} alt={fullName} />
            <AvatarFallback>
              {fullName
                .split(" ")
                .map((name) => name[0])
                .join("")
                .toUpperCase()}
            </AvatarFallback>
          </Avatar>

          <div>
            <p className="font-medium text-gray-900">{fullName}</p>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "createdAt",
    header: "Date Joined",
    cell: ({ row }) => {
      if (!row.original.createdAt) return null;
      const date = new Date(row.original.createdAt);
      return date.toLocaleDateString("en-GB");
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      const roleName = row.original.role;
      if (roleName == "USER") {
        return <div className="bg-[#FDF2FA] px-0.5 py-2.5 text-[#C11574] rounded-lg">{roleName}</div>;
      } else if (roleName == "ADMIN") {
        return <div className="bg-[#ECFDF3] px-0.5 py-2.5 text-[#027A48] rounded-lg">{roleName}</div>;
      }
    },
  },
  { accessorKey: "", header: "Books Borrowed" },
  { accessorKey: "universityId", header: "University ID No" },
  { accessorKey: "universityCard", header: "University ID Card" },
  { accessorKey: "", header: "Action" },
];
