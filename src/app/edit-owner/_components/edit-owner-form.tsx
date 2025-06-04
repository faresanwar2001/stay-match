import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

export default function EditOwnerForm() {
  // Form & Validation
  const editOwnerSchema = z.object({
    fullName: z.string({ required_error: "Full Name is Required" }),
    email: z.string({ required_error: "Email is required" }).email(),
    phone: z.string({ required_error: "Phone is Required" }),
    user: z.string({ required_error: "User is Required" }),
    password: z.string({ required_error: "Password is Required" }),
    accountCredit: z.string({
      required_error: "Account Credit Date is Required",
    }),
    emergencyNumber: z.string({
      required_error: "Emergency Number is Required",
    }),
  });

  type Input = z.infer<typeof editOwnerSchema>;

  const form = useForm<Input>({
    resolver:zodResolver(editOwnerSchema)
  });

  // Function
  const onSubmit: SubmitHandler<Input> = (value) => {
    console.log(value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5">
        {/* Full Name */}
        <FormField
          name="fullName"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* Input */}
                <Input type="text" {...field} placeholder="Full Name" className="h-12 placeholder:text-xl border-[#9C9C9C]"/>
              </FormControl>
            </FormItem>
          )}
        />

         {/* Email */}
        <FormField
          name="email"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* Input */}
                <Input type="email" {...field} placeholder="Email" className="h-12 placeholder:text-xl border-[#9C9C9C]"/>
              </FormControl>
            </FormItem>
          )}
        />

         {/* Phone */}
        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* Input */}
                <Input type="text" {...field} placeholder="Phone" className="h-12 placeholder:text-xl border-[#9C9C9C]"/>
              </FormControl>
            </FormItem>
          )}
        />

         {/* User */}
        <FormField
          name="user"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* Input */}
                <Input type="text" {...field} placeholder="User" className="h-12 placeholder:text-xl border-[#9C9C9C]"/>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Password */}
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* Input */}
                <Input type="password" {...field} placeholder="Password" className="h-12 placeholder:text-xl border-[#9C9C9C]"/>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Account credit date */}
        <FormField
          name="accountCredit"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* Input */}
                <Input type="text" {...field} placeholder="Account Credit Date" className="h-12 placeholder:text-xl border-[#9C9C9C]"/>
              </FormControl>
            </FormItem>
          )}
        />

        {/* Emergency number */}
        <FormField
          name="emergencyNumber"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                {/* Input */}
                <Input type="text" {...field} placeholder="Emergency Number" className="h-12 placeholder:text-xl border-[#9C9C9C]"/>
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex items-center gap-5 w-full">
          {/* Save button */}
          <Button className="bg-[#433C50] text-white h-12 text-xl px-15 cursor-pointer">Save</Button>

          {/* Cancel button */}
          <Button className="bg-[#FF0007] text-white h-12 text-xl px-15 cursor-pointer">Cancel</Button>
        </div>
      </form>
    </Form>
  );
}
