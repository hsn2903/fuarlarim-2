// Full screen loader (simpler version)
const FullScreenLoader = ({ text = "Loading..." }) => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
      {text && <p className="mt-4 text-gray-600">{text}</p>}
    </div>
  );
};

export { FullScreenLoader };
