import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeadingForm from "./heading-form";
import { useTranslations } from "use-intl";

export default function LoginForm() {
  // Translation
  const t = useTranslations()

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
          <img src="/images/auth-logo.png" alt="Auth Logo" className="lg:w-75 w-55 lg:h-68 h-55" />
        </div>

        {/* Login form */}
        <Form {...form}>
          {/* Heading */}
          <h2 className="font-base lg:text-3xl text-2xl mb-7">
            {t("type-your-password-user")}
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
                    placeholder={t("user-name")}
                    className="py-6 border-[#727272] lg:w-110 w-90"
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
                    placeholder={t("password")}
                    className="py-6 border-[#727272] lg:w-110 w-90"
                  />

                  {/* Message */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Login button */}
            <Button className="w-full text-white font-base py-6 text-xl bg-[#A7E92F]">
              {t("login")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
