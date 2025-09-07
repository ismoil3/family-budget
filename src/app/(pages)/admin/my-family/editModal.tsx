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

const editItemSchema = z.object({
  title: z.string().min(1, "Введите заголовок"),
  description: z.string().optional(),
  price: z
    .string()
    .regex(/^\d+(?:[.,]\d{1,2})?$/, {
      message: "Неверный формат цены",
    })
    .transform((s) => Number(s.replace(",", "."))),
});

export type EditItemInput = z.infer<typeof editItemSchema>;

type EditItemModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (values: EditItemInput) => Promise<void> | void;
  defaultValues: EditItemInput; 
  title?: string;
};

export default function EditFamilyModal({
  open,
  onOpenChange,
  onSubmit,
  defaultValues,
  title = "Редактировать запись",
}: EditItemModalProps) {
  const form = useForm<EditItemInput>({
    resolver: zodResolver(editItemSchema),
    defaultValues,
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors, isSubmitting } = formState;

  React.useEffect(() => {
    if (open) {
      reset(defaultValues);
    }
  }, [open, defaultValues, reset]);

  async function onFormSubmit(values: EditItemInput) {
    try {
      await onSubmit(values);
      onOpenChange(false);
    } catch (err) {
      console.error("Ошибка обновления:", err);
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Внесите изменения и нажмите «Сохранить».
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onFormSubmit)} className="grid gap-4 py-4">
          <div className="grid grid-cols-1 gap-1">
            <Label htmlFor="title">Заголовок</Label>
            <Input id="title" placeholder="Например: Удобный стул" {...register("title")} />
            {errors.title && (
              <p className="text-sm text-red-600">{errors.title.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1">
            <Label htmlFor="description">Описание</Label>
            <Textarea id="description" placeholder="Краткое описание" {...register("description")} />
            {errors.description && (
              <p className="text-sm text-red-600">{errors.description.message}</p>
            )}
          </div>

          <div className="grid grid-cols-1 gap-1">
            <Label htmlFor="price">Цена (₽)</Label>
            <Input id="price" placeholder="0.00" {...register("price")} />
            {errors.price && (
              <p className="text-sm text-red-600">{errors.price.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button type="button" variant="ghost" onClick={() => onOpenChange(false)}>
              Отмена
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Сохранение..." : "Сохранить"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

/*
Example
  import React, { useState } from 'react';
  import EditItemModal from '@/components/EditItemModal';

  export default function Page() {
    const [open, setOpen] = useState(false);

    async function handleUpdate(values) {
      await fetch('/api/items/1', { method: 'PUT', body: JSON.stringify(values) });
    }

    return (
      <div>
        <button onClick={() => setOpen(true)}>Редактировать</button>
        <EditItemModal
          open={open}
          onOpenChange={setOpen}
          onSubmit={handleUpdate}
          defaultValues={{ title: 'Стул', description: 'Удобный', price: 1000 }}
        />
      </div>
    );
  }
*/
