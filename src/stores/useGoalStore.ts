import { create } from "zustand";

const useGoalStore = create(() => ({
  goals: [],
}));

export default useGoalStore;
