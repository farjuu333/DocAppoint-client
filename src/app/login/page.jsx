

"use client";
import React from 'react';
import { Button, Form, Input, Label, TextField, FieldError } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { FaStethoscope } from "react-icons/fa"; 
import toast from "react-hot-toast";
import Link from "next/link";

const LogInPage = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });
    
    if (data) {
      toast.success("Login Successful!");
      router.push('/'); 
      router.refresh();
    }
    
    if (error) {
      toast.error(error.message || "Invalid email or password.");
    }
  };

  const handleGoogleSignin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch (err) {
      toast.error("Google sign-in failed");
    }
  };

  return (
    
    <div className="min-h-[85vh] w-full flex items-center justify-center bg-slate-50/50 px-4 py-12">
      
      
      <div className="bg-white px-8 py-10 rounded-[2.5rem] shadow-[0_10px_50px_rgba(0,0,0,0.03)] border border-gray-100/50 w-full max-w-[420px] flex flex-col items-center">
        
        
        <div className="w-14 h-14 rounded-2xl bg-[#48C8D0] flex items-center justify-center text-white text-2xl shadow-md shadow-cyan-200/50 mb-4">
          <FaStethoscope />
        </div>

      
        <div className="text-center mb-8">
          <h1 className="text-2xl font-extrabold text-gray-800 tracking-tight">Login</h1>
          <p className="text-gray-400 text-sm mt-1 font-medium">Begin your path to better health with DocAppoint</p>
        </div>

        
        <Form onSubmit={onSubmit} className="flex flex-col gap-5 w-full">
          
        
          <TextField
            isRequired
            name="email"
            type="email"
            className="w-full"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-xs font-bold text-gray-700 tracking-wide block mb-1">Email</Label>
            <Input 
              placeholder="Enter your email" 
              className="w-full rounded-xl border-gray-200 focus-within:border-[#48C8D0] transition-colors"
            />
            <FieldError className="text-[11px] text-rose-500 mt-1 font-medium" />
          </TextField>

          
          <TextField
            isRequired
            name="password"
            type="password"
            className="w-full"
            validate={(value) => {
              if (value.length < 6) return "Password must be at least 6 characters";
              return null;
            }}
          >
            <Label className="text-xs font-bold text-gray-700 tracking-wide block mb-1">Password</Label>
            <Input 
              placeholder="Enter your password" 
              className="w-full rounded-xl border-gray-200 focus-within:border-[#48C8D0] transition-colors"
            />
            <FieldError className="text-[11px] text-rose-500 mt-1 font-medium" />
            
      
            <div className="flex justify-end mt-1.5">
              <Link href="/forgot-password" className="text-sm text-gray-400 hover:text-[#48C8D0] font-medium transition-colors">
                Forgot Password?
              </Link>
            </div>
          </TextField>

        
          <Button 
            className="rounded-xl w-full bg-[#48C8D0] hover:bg-[#3db3bb] text-white font-bold py-6 text-sm shadow-sm transition-all mt-2" 
            type="submit"
          >
            Login
          </Button>
        </Form>

    
        <div className="w-full flex items-center justify-center gap-3 my-5">
          <div className="h-[1px] bg-gray-100 flex-1"></div>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Or</span>
          <div className="h-[1px] bg-gray-100 flex-1"></div>
        </div>

      
        <div className="w-full">
          <Button 
            onClick={handleGoogleSignin} 
            className="w-full rounded-xl border border-gray-200 bg-white hover:bg-slate-50 flex items-center justify-center gap-2 py-6 font-bold text-gray-600 text-sm shadow-sm transition-all"
          >
            <FcGoogle className="text-lg" /> Continue with Google
          </Button>
        </div>

      
        <p className="text-center mt-6 text-sm text-gray-400 font-medium">
          Don't have an account?{" "}
          <Link href="/register" className="text-[#48C8D0] hover:underline font-bold ml-0.5">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default LogInPage;