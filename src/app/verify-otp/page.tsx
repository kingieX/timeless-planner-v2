/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import AuthOverlay from "@/components/AuthOverlay";
import { useRouter } from "next/navigation";

export default function VerifyOTPPage() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes countdown
  const [canResend, setCanResend] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 3) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  const handleResend = () => {
    setOtp(["", "", "", ""]);
    setTimeLeft(300);
    setCanResend(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-col md:flex-row w-full h-full items-center mt-16">
        <AuthOverlay />
        <div className="w-full md:w-1/2 bg-white p-8 max-w-xl md:ml-1 md:-mt-16">
          <h2 className="text-2xl font-bold text-gray-900">Verify OTP</h2>
          <p className="text-gray-600 mt-2">
            We have sent an OTP to your email address. Please input the number
            below to verify your account.
          </p>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="flex justify-between">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  className="w-12 h-12 text-center border rounded-lg text-lg focus:ring-primary focus:outline-none"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                />
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Token expires in:{" "}
              <span className="text-blue-600 font-semibold">{`${Math.floor(
                timeLeft / 60
              )}:${("0" + (timeLeft % 60)).slice(-2)}`}</span>
            </p>
            <button
              type="submit"
              className="w-full bg-primary text-white p-3 rounded-lg hover:bg-primary-dark transition disabled:bg-primary/60"
              disabled={otp.includes("")}
            >
              Verify OTP
            </button>
          </form>
          {canResend && (
            <button
              onClick={handleResend}
              className="w-full mt-4 text-primary font-medium hover:underline"
            >
              Resend Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
