import Sidebar from "@/components/Sidebar";
import useGoalStore from "@/stores/useGoalStore";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const AppLayout = () => {
  const { goals } = useGoalStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (goals.length === 0) {
      navigate("/goals/new");
    }
  }, [goals, navigate]);

  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
