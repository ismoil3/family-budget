import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/shared/ui/dialog";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { Textarea } from "@/shared/ui/textarea";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/select";




const createItemSchema = z.object({
  title: z.string().min(1, "Введите заголовок"),
  description: z.string().optional(),
  price: z
    .string()
    .regex(/^\d+(?:[.,]\d{1,2})?$/, {
      message: "Неверный формат цены",
    })
    .transform((s) => Number(s.replace(",", "."))),
});

export type CreateItemInput = z.infer<typeof createItemSchema>;

type AddItemModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: CreateItemInput) => Promise<void> | void;
  defaultValues?: Partial<CreateItemInput>;
  title?: string;
};

export default function AddFamilyModal({
  open,
  onOpenChange,
  onSubmit,
  defaultValues,
  title = "Создать запись",
}: AddItemModalProps) {
  const form = useForm<CreateItemInput>({
    resolver: zodResolver(createItemSchema),
    defaultValues: {
      title: "",
      description: "",
      price: "0",
      ...defaultValues,
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors, isSubmitting } = formState;

  async function onFormSubmit(values: CreateItemInput) {
    try {
      await onSubmit(values);

      onOpenChange(false);
    } catch (err) {
      console.error("Ошибка создания:", err);
    }
  }

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              Заполните форму ниже и нажмите «Создать».
            </DialogDescription>
          </DialogHeader>

          <form
            onSubmit={handleSubmit(onFormSubmit)}
            className="grid gap-4 py-4"
          >
            <div className="grid grid-cols-1 gap-1">
              <Label htmlFor="title">Пользователь</Label>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Ахмад</SelectItem>
                    <SelectItem value="banana">Эраҷ</SelectItem>
                    <SelectItem value="blueberry">Эҳсон</SelectItem>
                    <SelectItem value="grapes">Иқбол</SelectItem>
                    <SelectItem value="pineapple">Исмоил</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              

              {errors.title && (
                <p className="text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>


            <div className="grid grid-cols-1 gap-1">
              <Label htmlFor="title">Категория</Label>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="apple">Зарплата</SelectItem>
                    <SelectItem value="banana">Зарплата</SelectItem>
                    <SelectItem value="blueberry">Зарплата</SelectItem>
                    <SelectItem value="grapes">Зарплата</SelectItem>
                    <SelectItem value="pineapple">Зарплата</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              

              {errors.title && (
                <p className="text-sm text-red-600">{errors.title.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-1">
              <Label htmlFor="description">Описание</Label>
              <Textarea
                id="description"
                placeholder="Краткое описание"
                {...register("description")}
              />
              {errors.description && (
                <p className="text-sm text-red-600">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 gap-1">
              <Label htmlFor="price">Сумма</Label>
              <Input id="price" placeholder="0.00" {...register("price")} />
              {errors.price && (
                <p className="text-sm text-red-600">{errors.price.message}</p>
              )}
            </div>

            <DialogFooter>
              <Button
                type="button"
                variant="ghost"
                onClick={() => onOpenChange(false)}
              >
                Отмена
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Сохранение..." : "Создать"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

/*
Exampple

  import React, { useState } from 'react';
  import AddItemModal from '@/components/AddItemModal';

  export default function Page() {
    const [open, setOpen] = useState(false);

    async function handleCreate(values) {
      await fetch('/api/items', { method: 'POST', body: JSON.stringify(values) });
    }

    return (
      <div>
        <button onClick={() => setOpen(true)}>Открыть модалку</button>
        <AddItemModal open={open} onOpenChange={setOpen} onSubmit={handleCreate} />
      </div>
    );
  }
*/
