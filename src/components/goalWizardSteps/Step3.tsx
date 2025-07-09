import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface Step3Props {
  hours: number;
  setHours: (hours: number) => void;
  frequency: number;
  setFrequency: (frequency: number) => void;
}

const Step3 = ({ hours, setHours, frequency, setFrequency }: Step3Props) => {
  return (
    <>
      <div className="space-y-4">
        <label className="text-l font-bold mb-4"> 주당 투자 시간</label>
        <Select
          value={`${hours}`}
          onValueChange={(value) => setHours(Number(value))}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1시간</SelectItem>
            <SelectItem value="2">2시간</SelectItem>
          </SelectContent>
        </Select>
        <label className="text-l font-bold mb-4"> 루틴 빈도</label>
        <Select
          value={`${frequency}`}
          onValueChange={(value) => setFrequency(Number(value))}
        >
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">주 1회</SelectItem>
            <SelectItem value="2">주 2회</SelectItem>
            <SelectItem value="3">주 3회</SelectItem>
            <SelectItem value="4">주 4회</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </>
  );
};

export default Step3;
