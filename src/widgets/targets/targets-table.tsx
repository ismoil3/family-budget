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
import AddTargetModal from "./addTargetModal";
import { useState } from "react";
import { Button } from "@/shared/ui/button";
import { Edit, Trash } from "lucide-react";
import EditTargetModal from "./editTargetModal";
const invoices = [
  {
    description: "description",
    amount: "$250.00",
    date: "	2024-01-15	",
    user: "Ахметов Эраҷ",
    progress: "$100.00",
  },
  {
    description: "description",
    amount: "$150.00",
    date: "	2024-01-15	",
    user: "Ахметов Эраҷ",
    progress: "$100.00",
  },
  {
    description: "description",
    amount: "$350.00",
    date: "	2024-01-15	",
    user: "Ахметов Эраҷ",
    progress: "$100.00",
  },
  {
    description: "description",
    amount: "$450.00",
    date: "	2024-01-15	",
    user: "Ахметов Эраҷ",
    progress: "$100.00",
  },
  {
    description: "description",
    amount: "$550.00",
    date: "	2024-01-15	",
    user: "Ахметов Эраҷ",
    progress: "$100.00",
  },
  {
    description: "description",
    amount: "$200.00",
    date: "	2024-01-15	",
    user: "Ахметов Эраҷ",
    progress: "$100.00",
  },
  {
    description: "description",
    amount: "$300.00",
    date: "	2024-01-15	",
    user: "Ахметов Эраҷ",
    progress: "$100.00",
  },
];
export default function TargetsTable() {
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
        <Button onClick={() => setOpen(true)}>Создать цель</Button>
        <AddTargetModal
          open={open}
          onOpenChange={setOpen}
          onSubmit={handleCreate}
        />
        <EditTargetModal
                open={open2}
                onOpenChange={setOpen2}
                onSubmit={handleUpdate}
                defaultValues={{ title: "Стул", description: "Удобный", price: 1000 }}
              />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Пользователь</TableHead>
            <TableHead className="text-right">Описание</TableHead>
            <TableHead className="text-right">Сумма</TableHead>
            <TableHead className="text-right">Прогресс</TableHead>
            <TableHead className="text-right">Дата</TableHead>
             <TableHead >Действия</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.description}>
              <TableCell className="font-medium ">{invoice.user}</TableCell>
              <TableCell className="font-medium text-right">
                {invoice.description}
              </TableCell>
              <TableCell className="text-right">{invoice.amount}</TableCell>
              <TableCell className="text-right">{invoice.progress}</TableCell>
              <TableCell className="text-right">{invoice.date}</TableCell>
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
