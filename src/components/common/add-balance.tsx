import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRef } from "react";
export default function AddBalance() {
  // Ref
  const fileInput = useRef<HTMLInputElement>(null)

  // Form & Validation
  const AddUserSchema = z.object({
    amount: z.string({ required_error: "Amount is required" }),
    transactionDate: z.string({ required_error: "Transaction Date is required" }),
    photo: z.string({required_error:"Photo is required"}),
  });

  type Inputs = z.infer<typeof AddUserSchema>;

  const form = useForm<Inputs>({
    defaultValues: {
      amount: "",
      transactionDate: "",
      photo: "",
    },
    resolver: zodResolver(AddUserSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (value) => {
    console.log(value);
  };
  return (
    <Dialog>
      <DialogTrigger>
        {/* Add balance button */}
        <Button className="bg-[#A7E92F] text-white cursor-pointer px-12">
          Add balance
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {/* Heading */}
          <DialogTitle className="border-b py-2">Add balance</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Amount */}
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => (
                <FormItem className="mb-8">
                  {/* Label */}
                    <FormLabel>Amount:</FormLabel>
                  <FormControl>

                  {/* Input */}
                  <Input
                    {...field}
                    type="text"
                    placeholder="Amount"
                    className="py-6 border-[#727272] w-full"
                  />
                  </FormControl>

                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Transaction Date */}
            <FormField
              control={form.control}
              name="transactionDate"
              render={({ field }) => (
                <FormItem className="mb-8">
                  {/* Label */}
                    <FormLabel>Transaction Date:</FormLabel>
                  <FormControl>

                  {/* Input */}
                  <Input
                    {...field}
                    type="text"
                    placeholder="Transaction Date"
                    className="py-6 border-[#727272] w-full"
                  />
                  </FormControl>

                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

        {/*  Upload file */}
        <div
          onClick={() => fileInput.current?.click()}
          className="cursor-pointer bg-gray-300 h-[200px] flex items-center justify-center"
        >
          <p className="font-bold text-xl">Upload photo</p>
        </div>

            {/* File */}
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem className="mb-8">
                  <FormControl>
                  {/* Input */}
                  <Input
                    {...field}
                    type="file"
                    ref={fileInput}
                    placeholder="Name"
                    className="hidden"
                  />
                  </FormControl>
                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />


            <div className="flex justify-between gap-2">
              {/* Submit button */}
              <Button
                variant={"ghost"}
                className="w-1/4 cursor-pointer font-medium py-6 text-xl bg-[#D0FF7B] text-[#56CA00]"
              >
                Submit
              </Button>

              {/* Cancel button */}
              <Button
                variant={"ghost"}
                className="w-1/4 cursor-pointer font-medium py-6 text-xl bg-[#FFB7B7] text-red-500"
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
