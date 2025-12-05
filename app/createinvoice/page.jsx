'use client'
import React from 'react'
import { useForm, useFieldArray } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from '@/components/ui/textarea'
import { insertInvoice } from '@/Action/invoiceAction'

const CreateInvoice = () => {
  const { register, handleSubmit, control, reset } = useForm({
    defaultValues: { items: [{ name: "", qty: "", price: "" }] }
  });

  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  const onSubmitFcn = async (data) => {
    const result = await insertInvoice(data); // call server action
    if (result) {
      alert("Invoice created successfully!");
      reset();
    } else {
      alert("Failed to create invoice.");
    }
  }

  return (
    <div className='h-screen flex p-3 justify-center items-center'>
      <Card className='w-full min-h-screen'>
        <CardHeader>
          <CardTitle>Create Invoice</CardTitle>
          <CardDescription>You deserve your money</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmitFcn)}>
          <CardContent>
            {/* ... all your inputs and items code unchanged ... */}
            <div className="grid grid-cols-3 gap-5">
              <div className="flex flex-col gap-2">
                <Label>User Email</Label>
                <Input {...register("user_email", { required: true })} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Client Email</Label>
                <Input {...register("client_mail", { required: true })} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Client Name</Label>
                <Input {...register("client_name", { required: true })} />
              </div>
              <div className="flex flex-col gap-2 col-span-3">
                <Label>Client Address</Label>
                <Textarea {...register("client_address", { required: true })} className="h-24" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Sending Date</Label>
                <Input type="date" {...register("start_date", { required: true })} />
              </div>
              <div className="flex flex-col gap-2">
                <Label>Last Date to Pay</Label>
                <Input type="date" {...register("last_date", { required: true })} />
              </div>
            </div>

            {/* Items */}
            <div className="mt-10">
              <Label className="text-lg font-semibold">Invoice Items</Label>
              {fields.map((item, index) => (
                <div key={item.id} className="grid grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col gap-2">
                    <Label>Product Name</Label>
                    <Input {...register(`items.${index}.name`, { required: true })} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Qty</Label>
                    <Input type="number" {...register(`items.${index}.qty`, { required: true })} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label>Price</Label>
                    <Input type="number" {...register(`items.${index}.price`, { required: true })} />
                  </div>
                  <div className="col-span-3 flex justify-end">
                    {index > 0 && (
                      <Button type="button" className="bg-red-500 text-white" onClick={() => remove(index)}>Remove</Button>
                    )}
                  </div>
                </div>
              ))}
              <Button type="button" className="mt-3 bg-green-600 text-white" onClick={() => append({ name: "", qty: "", price: "" })}>
                + Add Item
              </Button>
            </div>

            <Button type="submit" className="bg-blue-900 cursor-pointer mt-7 ml-[43%] text-white hover:bg-blue-950">
              Create Invoice
            </Button>
          </CardContent>
        </form>
      </Card>
    </div>
  )
}

export default CreateInvoice;
