
"use client"
import "../app/globals.css";
import React from "react";
import { AppProps } from "next/app";
import { AnonAadhaarProvider } from "@anon-aadhaar/react";
import Home from "./components/Home";
import { useState } from "react";

// Define the type for MyApp props
// interface MyAppProps extends AppProps {}

const MyApp: React.FC = () => {
  const [useTestAadhaar, setUseTestAadhaar] = useState(false);

  const switchAadhaar = () => {
    setUseTestAadhaar((prev) => !prev);
  };



  return (
    <AnonAadhaarProvider>
      <Home setUseTestAadhaar={setUseTestAadhaar} useTestAadhaar={useTestAadhaar} switchAadhaar={switchAadhaar} />
    </AnonAadhaarProvider>
  );
};

export default MyApp;
