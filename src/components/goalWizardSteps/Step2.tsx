import { useState } from "react";
import { Calendar } from "../ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarDays } from "lucide-react";

interface Step2Props {
  startDate: Date;
  setStartDate: (date: Date) => void;
  endDate: Date;
  setEndDate: (date: Date) => void;
}

const Step2 = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: Step2Props) => {
  const [startOpen, setStartOpen] = useState(false);
  const [endOpen, setEndOpen] = useState(false);

  return (
    <div className="space-y-4">
      <label className="text-l font-bold mb-4"> 시작일</label>
      <Popover open={startOpen} onOpenChange={setStartOpen}>
        <PopoverTrigger>
          <CalendarDays size={24} />
        </PopoverTrigger>
        <PopoverContent className="">
          <Calendar
            mode="single"
            selected={new Date(startDate)}
            onSelect={(date) => {
              setStartDate(date);
              setStartOpen(false);
            }}
            required={true}
          />
        </PopoverContent>
      </Popover>
      <p>{startDate.toLocaleDateString()}</p>
      <label className="text-l font-bold mb-4"> 종료일</label>
      <Popover open={endOpen} onOpenChange={setEndOpen}>
        <PopoverTrigger>
          <CalendarDays />
        </PopoverTrigger>
        <PopoverContent className="">
          <Calendar
            mode="single"
            selected={new Date(endDate)}
            onSelect={(date) => {
              setEndDate(date);
              setEndOpen(false);
            }}
            required={true}
          />
        </PopoverContent>
      </Popover>
      <p>{endDate.toLocaleDateString()}</p>
    </div>
  );
};

export default Step2;
