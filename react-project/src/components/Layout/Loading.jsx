export const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-5 h-5 bg-indigo-600 rounded-full animate-bounce"></div>
        <div className="w-5 h-5 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-5 h-5 bg-indigo-600 rounded-full animate-bounce [animation-delay:-0.6s]"></div>
      </div>
    </div>
  );
};
