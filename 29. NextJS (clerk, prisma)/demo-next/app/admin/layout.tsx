import AdminSidebar from "@/components/admin/Sidebar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <AdminSidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
