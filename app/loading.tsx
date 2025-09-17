"use client";
import { Ticket, Calendar, MapPin, Users } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-[400px] w-full flex flex-col items-center justify-center space-y-8 bg-white dark:bg-gray-900 p-6 rounded-lg">
      {/* Main loading animation container */}
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Circular rotating icons */}
        <div
          className="absolute inset-0 animate-spin"
          style={{ animationDuration: "3s" }}
        >
          <div className="relative w-full h-full">
            <Ticket className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500 w-6 h-6 animate-pulse" />
            <Calendar
              className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 w-6 h-6 animate-pulse"
              style={{ animationDelay: "75ms" }}
            />
            <MapPin
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-gray-600 dark:text-gray-300 w-6 h-6 animate-pulse"
              style={{ animationDelay: "150ms" }}
            />
            <Users
              className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-700 dark:text-gray-200 w-6 h-6 animate-pulse"
              style={{ animationDelay: "225ms" }}
            />
          </div>
        </div>

        {/* Center pulsing circle */}
        <div className="relative w-16 h-16 z-10">
          <div className="absolute inset-0 bg-gray-400/20 dark:bg-gray-300/20 rounded-full animate-ping" />
          <div className="absolute inset-0 bg-gray-400/40 dark:bg-gray-300/40 rounded-full animate-pulse" />
          <div className="relative w-full h-full bg-gray-400 dark:bg-gray-300 rounded-full" />
        </div>
      </div>

      {/* Loading text */}
      <div className="text-center space-y-3">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
          Yükleniyor
        </h3>
        <div className="flex items-center justify-center space-x-2">
          <div className="w-2 h-2 rounded-full bg-gray-400 dark:bg-gray-500 animate-bounce" />
          <div
            className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce"
            style={{ animationDelay: "150ms" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-300 animate-bounce"
            style={{ animationDelay: "300ms" }}
          />
        </div>
      </div>

      {/* Loading bar using pure Tailwind animations */}
      <div className="w-64 bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden relative">
        <div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-300 to-transparent w-1/3 h-full animate-pulse rounded-full"
          style={{
            animation:
              "pulse 2s ease-in-out infinite, shimmer 2s ease-in-out infinite",
            backgroundSize: "200% 100%",
          }}
        />
        <div className="absolute inset-0 bg-gray-400/30 dark:bg-gray-300/30 w-full h-full rounded-full animate-pulse" />
      </div>

      {/* Loading message */}
      <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
        Bilgiler hazırlanıyor...
      </p>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingSpinner;
