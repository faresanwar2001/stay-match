import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeadingForm from "./heading-form";

export default function LoginForm() {
  // Navigation
  const router = useNavigate();

  // Form & Validation
  const LoginSchema = z.object({
    userName: z.string({ required_error: "UserName is required" }),
    password: z.string({ required_error: "password is required" }),
  });

  type Inputs = z.infer<typeof LoginSchema>;

  const form = useForm<Inputs>({
    defaultValues: {
      userName: "",
      password: "",
    },
    resolver: zodResolver(LoginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (value) => {
    console.log(value);
    router("/");
  };

  return (
    <div className="flex h-screen">
      {/* Heading Form */}
      <HeadingForm />

      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="mb-30 flex ">
          <img src="/images/auth-logo.png" alt="Auth Logo" className="w-75 h-68" />
        </div>

        {/* Login form */}
        <Form {...form}>
          {/* Heading */}
          <h2 className="font-base text-3xl mb-7">
            Type Your User Name & Password
          </h2>

          <form onSubmit={form.handleSubmit(onSubmit)}>
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
                    placeholder="User Name"
                    className="py-6 border-[#727272] w-110"
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

            {/* Login button */}
            <Button className="w-full text-white font-base py-6 text-xl bg-[#A7E92F]">
              Login
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
