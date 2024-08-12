"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { HiEye, HiEyeOff } from "react-icons/hi"; // Import icons
import Lottie from 'lottie-react';
import animationData from '../../asset/Animation - 1723048901549.json'; // Import your animation data

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [showAnimation, setShowAnimation] = useState(false); // State to control animation visibility

  const validateEmail = (email) =>
    email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);

  const isInvalid = React.useMemo(() => {
    if (email === "") return false;
    return validateEmail(email) ? false : true;
  }, [email]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { email, password };

    console.log("Submitting login form with payload:", payload); // Log payload

    try {
      const response = await fetch("http://localhost:8081/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      console.log("Server response status:", response.status); // Log response status

      const data = await response.json();
      console.log("Server response data:", data); // Log response data

      if (response.ok) {
        // Optionally set a success message
        setMessageType("success");
        setShowAnimation(true); // Show animation on successful login

        // Redirect to dashboard after the animation is done
        setTimeout(() => {
          console.log("Redirecting to /dashboard"); // Log redirect action
          router.push("/dashboard");
        }, 3000); // Adjust delay to match animation duration
      } else {
        setMessage(data.message || "Login failed");
        setMessageType("error");
      }
    } catch (error) {
      console.error("Network error:", error.message); // Log network error
      setMessage("Network error: " + error.message);
      setMessageType("error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg relative">
        <h2 className="text-2xl font-semibold mb-6 text-center text-indigo-600">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit}>
          <Input
            isRequired
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            isInvalid={isInvalid}
            errorMessage="Please enter a valid email"
            onValueChange={setEmail}
            className="mb-4"
          />

          <div className="relative mb-6">
            <Input
              isRequired
              type={showPassword ? "text" : "password"}
              label="Password"
              value={password}
              onValueChange={setPassword}
              placeholder="Enter your password"
              className="pr-12" // Adjust padding-right for icon
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center px-3"
            >
              {showPassword ? (
                <HiEyeOff className="text-gray-400 text-lg" /> // Adjust size with text-lg
              ) : (
                <HiEye className="text-gray-400 text-lg" /> // Adjust size with text-lg
              )}
            </button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <Link
              href="/forgotpassword"
              className="text-sm text-indigo-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            color="primary"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
          >
            Login
          </Button>

          <div className="text-center text-sm text-gray-600 mt-4">
            <span>Don't have an account? </span>
            <Link href="/signup" className="text-indigo-600 hover:underline">
              Sign up
            </Link>
          </div>
        </form>

        {showAnimation && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80 z-10">
            <Lottie animationData={animationData} className='h-[200px] w-[200px]' />

          </div>
        )}
      </div>
      {message && (
        <div
          className={`absolute right-0 top-0 mt-10 mr-4 p-2 rounded-lg text-white ${
            messageType === "success" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {message}
        </div>
      )}
    </div>
  );
}
