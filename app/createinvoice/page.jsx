'use client'
import React from 'react'
import { useForm, useFieldArray } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Textarea } from '@/components/ui/textarea'
import { insertInvoice } from '@/Action/invoiceAction'

const CreateInvoice = () => {

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      items: [{ name: "", qty: "", price: "" }]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "items"
  });

  const onSubmitFcn = async(data) => {
      try{
        const res = await insertInvoice(data);
        console.log("Invoice creation result:", res);
      }catch(err){
        console.log(err);
        
      }
  }

  return (
    <div className='h-screen flex p-3 justify-center items-center'>
      <Card className='w-full min-h-screen'>
        <CardHeader>
          <CardTitle><p className='text-lg font-bold'>Create Invoice</p></CardTitle>
          <CardDescription>You deserve your money</CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmitFcn)}>
          <CardContent>
            <div className="grid grid-cols-3 gap-5">

              {/* USER INFO */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="user_email">user email</Label>
                <Input
                  id="user_email"
                  type="email"
                  placeholder="user email"
                  {...register("user_email", { required: true })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="client_mail">client email</Label>
                <Input
                  id="client_mail"
                  type="email"
                  placeholder="client email"
                  {...register("client_mail", { required: true })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="client_name">client name</Label>
                <Input
                  id="client_name"
                  type="text"
                  placeholder="client name"
                  {...register("client_name", { required: true })}
                />
              </div>

              {/* ADDRESS */}
              <div className="flex flex-col gap-2 col-span-3">
                <Label htmlFor="client_address">client address</Label>
                <Textarea
                  id="client_address"
                  placeholder="client address"
                  className="h-24"
                  {...register("client_address", { required: true })}
                />
              </div>

              {/* DATES */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="start_date">sending date</Label>
                <Input
                  id="start_date"
                  type="date"
                  {...register("start_date", { required: true })}
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="last_date">last date to pay</Label>
                <Input
                  id="last_date"
                  type="date"
                  {...register("last_date", { required: true })}
                />
              </div>

            </div>

            {/* ---------------- ITEMS SECTION ---------------- */}
            <div className="mt-10">
              <Label className="text-lg font-semibold">Invoice Items</Label>

              {fields.map((item, index) => (
                <div key={item.id} className="grid grid-cols-3 gap-4 mt-4">

                  {/* Product Name */}
                  <div className="flex flex-col gap-2">
                    <Label>Product Name</Label>
                    <Input
                      placeholder="product name"
                      {...register(`items.${index}.name`, { required: true })}
                    />
                  </div>

                  {/* Quantity */}
                  <div className="flex flex-col gap-2">
                    <Label>Qty</Label>
                    <Input
                      type="number"
                      placeholder="qty"
                      {...register(`items.${index}.qty`, { required: true })}
                    />
                  </div>

                  {/* Price */}
                  <div className="flex flex-col gap-2">
                    <Label>Price( per unit in ₹ )</Label>
                    <Input
                      type="number"
                      placeholder="price"
                      {...register(`items.${index}.price`, { required: true })}
                    />
                  </div>

                  {/* Remove Button */}
                  <div className="col-span-3 flex justify-end">
                    {index > 0 && (
                      <Button
                        type="button"
                        className="bg-red-500 text-white"
                        onClick={() => remove(index)}
                      >
                        Remove
                      </Button>
                    )}
                  </div>

                </div>
              ))}

              {/* Add Item Button */}
              <Button
                type="button"
                className="mt-3 bg-green-600 text-white"
                onClick={() => append({ name: "", qty: "", price: "" })}
              >
                + Add Item
              </Button>
            </div>

            {/* SUBMIT BUTTON */}
            <Button
              type="submit"
              className="bg-blue-900 mt-7 ml-[43%] cursor-pointer text-white hover:bg-blue-950"
            >
              create invoice
            </Button>

          </CardContent>
        </form>
      </Card>
    </div>
  )
}

export default CreateInvoice
