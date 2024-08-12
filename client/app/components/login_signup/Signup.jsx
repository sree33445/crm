"use client";

import { Input } from "@nextui-org/input";
import React, { useState } from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    gender: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // 'success' or 'error'

  const roleName = ["admin", "superadmin", "user"];
  const genderName = ["male", "female"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: formData.name,
      gender: formData.gender,
      role: formData.role,
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch("http://localhost:8081/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || "Registration successful"); // Show success message
        setMessageType("success");
        console.log("Registration successful:", data); // Log success message to console
        // Redirect to login page after 2 seconds
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        setMessage(data.message || "Registration failed"); // Show error message
        setMessageType("error");
        console.error("Registration failed:", data); // Log error message to console
      }
    } catch (error) {
      setMessage("Network error: " + error.message); // Show network error
      setMessageType("error");
      console.error("Network error:", error); // Log network error to console
    }
  };

  return (
    <div className="flex w-full h-screen justify-center flex-wrap md:flex-nowrap gap-4 p-12 bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-gray-100 rounded-lg shadow-lg relative"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-indigo-600">
          Signup
        </h2>

        <Input
          isRequired
          type="text"
          label="Name"
          name="name"
          placeholder="Enter your name"
          onChange={handleInputChange}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        />

        <Select
          isRequired
          label="Role"
          placeholder="Select the role"
          name="role"
          onChange={handleInputChange}
          orientation="horizontal"
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        >
          {roleName.map((role) => (
            <SelectItem key={role} value={role}>
              {role.charAt(0).toUpperCase() + role.slice(1)}
            </SelectItem>
          ))}
        </Select>

        <Select
          isRequired
          label="Gender"
          placeholder="Select your gender"
          name="gender"
          onChange={handleInputChange}
          orientation="horizontal"
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        >
          {genderName.map((gender) => (
            <SelectItem key={gender} value={gender}>
              {gender.charAt(0).toUpperCase() + gender.slice(1)}
            </SelectItem>
          ))}
        </Select>

        <Input
          isRequired
          type="email"
          label="Email"
          placeholder="Enter your email"
          name="email"
          onChange={handleInputChange}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        />

        <Input
          isRequired
          type="password"
          label="Password"
          placeholder="Enter your password"
          name="password"
          onChange={handleInputChange}
          className="mb-4 border border-blue-400 focus:border-indigo-600 rounded-xl"
        />

        <Button
          type="submit"
          color="primary"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg"
        >
          Signup
        </Button>
      </form>
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
