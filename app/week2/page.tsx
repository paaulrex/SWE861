'use client'

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import { Input } from "@heroui/input";
import app from "../../firebaseConfig.js";
import { useRouter } from "next/router.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("Logged in user:", user);
      useRouter().push("/profile")
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const handleEmailLogin = (e) => {
    e.preventDefault();
    console.log("Login with email:", email, "password:", password);
    // Implement email/password login logic here
  };

  return (
    <div className="flex items-center justify-center">
      <Card className="max-w-md w-full shadow-lg rounded-2xl">
        <CardHeader className="text-center flex flex-col items-center p-3">
          <h1 className="text-xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 text-sm">Login to your account</p>
        </CardHeader>
        <CardBody>
          <form onSubmit={handleEmailLogin} className="space-y-4">
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full"
              required
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
          <div className="my-4 text-center text-gray-500">or</div>
          <Button
            onPress={handleGoogleLogin}
            className="w-full bg-red-500 hover:bg-red-600 text-white"
          >
            Continue with Google
          </Button>
        </CardBody>
        <CardFooter className="text-center">
          <p className="text-sm text-gray-500">
            Don&#39;t have an account? <a href="/signup" className="text-blue-500">Sign Up</a>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
