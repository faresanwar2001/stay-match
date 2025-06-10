import { Button } from "@/components/ui/button";
import { FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger } from "@/components/ui/select";
import { Form, useForm } from "react-hook-form";

export default function CalculateOwners() {
  // Form & Validation
  const form = useForm({
    defaultValues: {
      amount: "",
      percentage: "",
    },
  });

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex gap-10 my-7 justify-center">
        <p className="font-medium text-3xl relative">
          Basic{" "}
          <span className="absolute font-medium text-[#6D6777] text-sm top-0 pl-2">
            EGP
          </span>
        </p>

        {/* Form */}
        <Form {...form}>
          <form className="flex gap-5">
            {/* Amount */}
            <FormField
              name="amount"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  {/* Input */}
                  <Input
                    {...field}
                    defaultValue={"1000"}
                    type="text"
                    className="border text-4xl font-medium text-[#A7E92F] lg:w-[132px] w-[90px] h-[51px] border-[#6D6777]"
                  />
                </FormItem>
              )}
            />
            {/* Or */}
            <p className=" font-medium text-[#6D6777] text-sm top-0">OR</p>

            {/* Percentage */}
            <FormField
              name="percentage"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  {/* Input */}
                  <Input
                    {...field}
                    defaultValue={"10%"}
                    type="text"
                    className="border text-4xl font-medium text-[#A7E92F] lg:w-[132px] w-[90px]  h-[51px] border-[#6D6777]"
                  />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>

      <div className="flex flex-col gap-5 lg:w-[50%] w-full">
        {/* Duration button */}
        <Select>
          <SelectTrigger className="w-[100%] text-center cursor-pointer font-medium text-base flex items-center justify-center">
            Duration
            
          </SelectTrigger>

          {/* Options */}
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
          </SelectContent>
        </Select>

        {/* Submit button */}
        <Button
          variant={"ghost"}
          className="border border-[#A7E92F] cursor-pointer text-[#A7E92F] font-medium text-base"
        >
          Submit Plan
        </Button>
      </div>
    </div>
  );
}
