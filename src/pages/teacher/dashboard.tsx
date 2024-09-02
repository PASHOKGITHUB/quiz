import Navbar from "@/components/Dashboard/Navbar";
import Sidebar from "@/components/Teachers/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">
          <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
          <p>This is the dashboard content. You can refine it later.</p>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
