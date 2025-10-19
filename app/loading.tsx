// app/loading.tsx
import { Plane } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-4">
        <div className="animate-bounce">
          <Plane className="h-20 w-20 text-primary-600 transform rotate-45" />
        </div>
        <p className="text-gray-600 text-2xl font-medium">
          Fuarlarınız yükleniyor...
        </p>
      </div>
    </div>
  );
}
