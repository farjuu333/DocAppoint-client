
"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";

export default function LogInPage() {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    if (error) {
      toast.error(error.message || "Login failed! Please check your credentials.");
    } else {
      toast.success("Login Successful!");
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    
    <div className="flex justify-center items-center min-h-screen px-4"> 
      <Card className="border w-full max-w-md py-8 md:py-10 shadow-lg px-6">
        <h1 className="text-center text-xl md:text-2xl font-bold mb-6">Log In</h1>

        
        <Form className="flex w-full flex-col gap-4" onSubmit={onSubmit}>
          <TextField isRequired name="email" type="email">
            <Label>Email</Label>
            <Input placeholder="Enter your email" />
            <FieldError />
          </TextField>

          <TextField isRequired name="password" type="password">
            <Label>Password</Label>
            <Input placeholder="Enter your password" />
            <FieldError />
          </TextField>

          <div className="flex flex-col gap-3 mt-2">
            <Button type="submit" color="primary" className="w-full">
              <Check />
              Login
            </Button>
            
            <div className="flex items-center gap-2 my-2">
              <div className="h-[1px] bg-gray-200 flex-grow"></div>
              <p className="text-gray-500 text-xs md:text-sm">OR</p>
              <div className="h-[1px] bg-gray-200 flex-grow"></div>
            </div>

            <Button onClick={handleGoogleSignIn} variant="secondary" className="w-full">
              <FaGoogle /> Login With Google
            </Button>
          </div>
        </Form>

        <p className="text-center mt-6 text-sm">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline font-semibold">
            Register here
          </Link>
        </p>
      </Card>
    </div>
  );
}