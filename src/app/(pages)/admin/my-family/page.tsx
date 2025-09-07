"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/ui/table";
import { useState } from "react";
import AddFamilyModal from "./addModal";
import EditFamilyModal from "./editModal";
import { Button } from "@/shared/ui/button";
import { Edit, Trash } from "lucide-react";
const invoices = [
  {
    user: "Ахметов Эраҷ",
    email: "akhmetoveraj@gmail.com",
    status: "Father",
    registeredDate: "2024-01-15",
  },
  {
    user: "Ахметов Эраҷ",
    email: "akhmetoveraj@gmail.com",
    status: "Father",
    registeredDate: "2024-01-15",
  },
  {
    user: "Ахметов Эраҷ",
    email: "akhmetoveraj@gmail.com",
    status: "Father",
    registeredDate: "2024-01-15",
  },
  {
    user: "Ахметов Эраҷ",
    email: "akhmetoveraj@gmail.com",
    status: "Father",
    registeredDate: "2024-01-15",
  },
];
export default function MyFamily() {
    const [open, setOpen] = useState(false);
      const [open2, setOpen2] = useState(false);

        async function handleCreate(values) {
    await fetch("/api/items", { method: "POST", body: JSON.stringify(values) });
  }

  async function handleUpdate(values) {
    await fetch("/api/items/1", {
      method: "PUT",
      body: JSON.stringify(values),
    });
  }
  return (
    <div className="w-full max-w-4xl    ">
        <div className="flex justify-end">
        <Button  onClick={() => setOpen(true)}>Создать доход</Button>
        <AddFamilyModal
          open={open}
          onOpenChange={setOpen}
          onSubmit={handleCreate}
        />
      </div>
      <EditFamilyModal
        open={open2}
        onOpenChange={setOpen2}
        onSubmit={handleUpdate}
        defaultValues={{ title: "Стул", description: "Удобный", price: 1000 }}
      />
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Пользователь</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Статус</TableHead>
            <TableHead>Дата регистрации</TableHead>
             <TableHead>Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.user}>
              <TableCell className="font-medium ">{invoice.user}</TableCell>
              <TableCell className="font-medium ">{invoice.email}</TableCell>
              <TableCell className="font-medium ">{invoice.status}</TableCell>
              <TableCell className="font-medium ">
                {invoice.registeredDate}
              </TableCell>
               <TableCell> 
                  <Button className="mr-[5px]" onClick={() => setOpen2(true)}>
                    <Edit />
                  </Button>
                  <Button variant={"destructive"}>
                    <Trash />
                  </Button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
