import React from "react";
import { Ticket, Calendar, MapPin, Users } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="min-h-[400px] w-full flex flex-col items-center justify-center space-y-8 bg-white dark:bg-gray-900 p-6 rounded-lg">
      {/* Main loading animation container */}
      <div className="relative">
        {/* Circular rotating icons */}
        <div className="absolute inset-0 flex items-center justify-center animate-spin duration-[3000ms]">
          <div className="w-32 h-32 flex items-center justify-around">
            <Ticket className="text-gray-400 dark:text-gray-500 w-6 h-6 animate-pulse" />
            <Calendar className="text-gray-500 dark:text-gray-400 w-6 h-6 animate-pulse delay-75" />
            <MapPin className="text-gray-600 dark:text-gray-300 w-6 h-6 animate-pulse delay-100" />
            <Users className="text-gray-700 dark:text-gray-200 w-6 h-6 animate-pulse delay-150" />
          </div>
        </div>

        {/* Center pulsing circle */}
        <div className="relative w-16 h-16">
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
          <div className="w-2 h-2 rounded-full bg-gray-500 dark:bg-gray-400 animate-bounce delay-150" />
          <div className="w-2 h-2 rounded-full bg-gray-600 dark:bg-gray-300 animate-bounce delay-300" />
        </div>
      </div>

      {/* Loading bar using pure Tailwind animations */}
      <div className="w-64 bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
        <div className="w-full h-full bg-gray-400 dark:bg-gray-300 rounded-full origin-left animate-[shimmer_2s_ease-in-out_infinite]">
          <div className="w-full h-full bg-gray-200 dark:bg-gray-700 rounded-full animate-[slide_2s_ease-in-out_infinite]" />
        </div>
      </div>

      {/* Loading message */}
      <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
        Bilgiler hazırlanıyor...
      </p>
    </div>
  );
};

export default LoadingSpinner;
