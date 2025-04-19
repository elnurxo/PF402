// app/contact/loading.tsx

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
      <span className="ml-4 text-xl font-medium text-gray-700">
        Root Loading Contact Page...
      </span>
    </div>
  );
}
