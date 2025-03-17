import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <div className="overflow-y-auto max-h-screen">
        <Sidebar />
      </div>
      <Topbar />
      <div className="flex-1 min-h-screen bg-white md:ml-64">
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
}
