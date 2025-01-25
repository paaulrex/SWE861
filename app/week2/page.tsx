'use client'

import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Button } from "@heroui/button";
import { getAuth, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { Input } from "@heroui/input";
import { User } from "firebase/auth";
import app from "../../firebaseConfig.js";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const loggedInUser = result.user;
      console.log("Logged in user:", loggedInUser);
      setUser(loggedInUser);
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const handleEmailLogin = async (e: any) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const loggedInUser = userCredential.user;
      console.log("Logged in with email and password:", loggedInUser);
      setUser(loggedInUser);
    } catch (error) {
      console.error("Error during email login:", error);
      alert(error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      {user ? (
        <Card className="max-w-md w-full shadow-lg rounded-2xl gap-3">
          <CardHeader className="text-center flex flex-col gap-3">
            <h1 className="text-xl font-bold">Welcome, {user.displayName || user.email}</h1>
            <p className="text-gray-500">You are logged in.</p>
          </CardHeader>
          <CardBody>
            <Button
              color="danger"
              onPress={() => {
                auth.signOut();
                setUser(null);
              }}
              
            >
              Logout
            </Button>
          </CardBody>
        </Card>
      ) : (
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
          <div className="flex flex-col gap-2">
            <Button
              onPress={handleGoogleLogin}
              color="secondary"
            >
              Login with Google
            </Button>
          </div>
        </CardBody>
        <CardFooter className="text-center">
        </CardFooter>
      </Card>
      )}
    </div>
  );
}
