import { SelectValue } from "@radix-ui/react-select";
import { Select, SelectContent, SelectItem, SelectTrigger } from "../ui/select";
import { Textarea } from "../ui/textarea";

interface Step1Props {
  title: string;
  setTitle: (title: string) => void;
  category: string;
  setCategory: (category: string) => void;
  description: string;
  setDescription: (description: string) => void;
}

const Step1 = ({
  title,
  setTitle,
  category,
  setCategory,
  description,
  setDescription,
}: Step1Props) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-md font-semibold mb-1">목표 이름</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="ex. 2025 하반기 취뽀"
        />
      </div>
      <div>
        <label className="block text-md font-semibold mb-1">카테고리</label>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="health">건강/다이어트</SelectItem>
            <SelectItem value="study">학습</SelectItem>
            <SelectItem value="career">취업/이직</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <label className="block text-md font-semibold mb-1">
          목표 설명 (선택)
        </label>
        <Textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="ex. 하반기 취업을 위해 포트폴리오 작성, 면접 준비 등을 할 예정입니다."
        />
      </div>
    </div>
  );
};

export default Step1;
