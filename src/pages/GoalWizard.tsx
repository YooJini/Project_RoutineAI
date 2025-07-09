import Step1 from "@/components/goalWizardSteps/Step1";
import Step2 from "@/components/goalWizardSteps/Step2";
import Step3 from "@/components/goalWizardSteps/Step3";
import Step4 from "@/components/goalWizardSteps/Step4";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
const GoalWizard = () => {
  const [current, setCurrent] = useState(0);
  const [goalData, setGoalData] = useState({
    title: "",
    category: "",
    startDate: new Date(),
    endDate: new Date(),
    description: "",
    weeklyHours: 0,
    frequency: 0,
    activities: "",
  });

  const handleNext = () => {
    setCurrent((prev) => {
      if (current === 0 && !checkStep1()) {
        return prev; // 현재 단계 유지
      }

      if (current === 1 && !checkStep2()) {
        return prev; // 현재 단계 유지
      }

      if (current === 2 && !checkStep3()) {
        return prev; // 현재 단계 유지
      }

      if (prev < Step.length - 1) {
        return prev + 1;
      }

      return prev;
    });
  };

  const checkStep1 = () => {
    if (goalData.title.trim() === "") {
      alert("목표 이름을 입력해주세요.");
      return false;
    }
    if (goalData.category.trim() === "") {
      alert("카테고리를 선택해주세요.");
      return false;
    }
    return true;
  };

  const checkStep2 = () => {
    if (!goalData.startDate) {
      alert("시작일을 선택해주세요.");
      return false;
    }
    if (!goalData.endDate) {
      alert("종료일을 선택해주세요.");
      return false;
    }

    if (goalData.startDate >= goalData.endDate) {
      alert("종료일은 시작일보다 이후여야 합니다.");
      return false;
    }

    return true;
  };

  const checkStep3 = () => {
    if (goalData.weeklyHours === 0) {
      alert("주당 투자 시간을 선택해주세요.");
      return false;
    }
    if (goalData.frequency === 0) {
      alert("루틴 빈도를 선택해주세요.");
      return false;
    }
    return true;
  };

  const handlePrev = () => {
    setCurrent((prev) => {
      if (prev > 0) {
        return prev - 1;
      }
      return prev;
    });
  };

  const Step = [
    <Step1
      title={goalData.title}
      setTitle={(v) => setGoalData({ ...goalData, title: v })}
      category={goalData.category}
      setCategory={(v) => setGoalData({ ...goalData, category: v })}
      description={goalData.description}
      setDescription={(v) => setGoalData({ ...goalData, description: v })}
    />,
    <Step2
      startDate={goalData.startDate}
      setStartDate={(v) => setGoalData({ ...goalData, startDate: v })}
      endDate={goalData.endDate}
      setEndDate={(v) => setGoalData({ ...goalData, endDate: v })}
    />,
    <Step3
      hours={goalData.weeklyHours}
      setHours={(v) => setGoalData({ ...goalData, weeklyHours: v })}
      frequency={goalData.frequency}
      setFrequency={(v) => setGoalData({ ...goalData, frequency: v })}
    />,
    <Step4 />,
  ];

  return (
    <div className="relative max-w-md mx-auto min-h-screen flex items-center justify-center">
      <div className="w-full">
        <h1 className="text-xl font-bold mb-4">목표 설정</h1>
        <div className="border-amber-200 border-2 p-10 h-100">
          {Step[current]}
        </div>
      </div>
      <div className="absolute -left-50 top-1/2">
        <Button
          className="cursor-pointer rounded-full"
          variant={"outline"}
          size={"icon"}
          onClick={handlePrev}
        >
          <ArrowLeft />
        </Button>
      </div>
      <div className="absolute -right-50 top-1/2">
        <Button
          className="cursor-pointer rounded-full"
          variant={"outline"}
          size={"icon"}
          onClick={handleNext}
        >
          {current === Step.length - 1 ? <Check /> : <ArrowRight />}
        </Button>
      </div>
    </div>
  );
};

export default GoalWizard;
