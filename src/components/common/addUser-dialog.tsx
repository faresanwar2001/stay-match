import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
export default function AddUserDialog() {
  // Navigation
  const router = useNavigate();

  // Form & Validation
  const AddUserSchema = z.object({
    name: z.string({ required_error: "Name is required" }),
    userName: z.string({ required_error: "UserName is required" }),
    password: z.string({ required_error: "password is required" }),
    role: z.enum(["User", "Admin"]),
    photo: z.string({required_error:"Photo is required"}),
  });

  type Inputs = z.infer<typeof AddUserSchema>;

  const form = useForm<Inputs>({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: zodResolver(AddUserSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (value) => {
    console.log(value);
    router("/");
  };
  return (
    <Dialog>
      <DialogTrigger>
        {/* Add user button */}
        <Button className="bg-[#A7E92F] text-black cursor-pointer px-12">
          Add user
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          {/* Heading */}
          <DialogTitle className="border-b py-2">Add user</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="mb-8">
                  {/* Input */}
                  <Input
                    {...field}
                    type="text"
                    placeholder="Name"
                    className="py-6 border-[#727272] w-full"
                  />

                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* User Name */}
            <FormField
              control={form.control}
              name="userName"
              render={({ field }) => (
                <FormItem className="mb-8">
                  {/* Input */}
                  <Input
                    {...field}
                    type="text"
                    placeholder="User"
                    className="py-6 border-[#727272] w-full"
                  />

                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="mb-8">
                  {/* Input */}
                  <Input
                    {...field}
                    type="password"
                    placeholder="Password"
                    className="py-6 border-[#727272]"
                  />

                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Role */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl className="py-6 mb-8 w-full border-[#727272]">
                      <SelectTrigger>
                        <SelectValue placeholder="Role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value={"user"}>User</SelectItem>
                      <SelectItem value={"admin"}>Admin</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* File */}
            <FormField
              control={form.control}
              name="photo"
              render={({ field }) => (
                <FormItem className="mb-8">
                  {/* Input */}
                  <Input
                    {...field}
                    type="file"
                    placeholder="Name"
                  />

                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />


            <div className="flex gap-2">
              {/* Submit button */}
              <Button
                variant={"ghost"}
                className="w-1/2 cursor-pointer font-medium py-6 text-xl text-[#A7E92F]"
              >
                Submit
              </Button>

              {/* Cancel button */}
              <Button
                variant={"ghost"}
                className="w-1/2 cursor-pointer font-medium py-6 text-xl text-red-500"
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
