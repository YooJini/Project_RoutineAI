import { Input } from "../ui/input";

const Step4 = () => {
  return (
    <>
      <div className="space-y-4">
        <label className="text-l font-bold mb-4"> 포함하고 싶은 활동</label>
        <Input placeholder="ex. 코테 1문제 풀기"></Input>
      </div>
    </>
  );
};

export default Step4;
