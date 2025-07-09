import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGoalStore from "@/stores/useGoalStore";

const Today = () => {
  const { goals } = useGoalStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (goals.length === 0) {
      navigate("/goals/new");
    }
  }, [goals, navigate]);

  return <div>오늘 할 일</div>;
};

export default Today;
