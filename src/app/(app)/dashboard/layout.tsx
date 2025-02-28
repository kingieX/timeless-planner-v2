import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
// import NotificationPopup from "@/components/NotificationPopup";
// import { NotificationProvider } from "@/context/NotificationContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <NotificationProvider>
    <div className="flex">
      <Sidebar />
      <Topbar />
      <div className="flex-1 min-h-screen bg-white md:ml-64">
        <main className="p-6">{children}</main>
      </div>
    </div>
    //   <NotificationPopup />
    // </NotificationProvider>
  );
}
