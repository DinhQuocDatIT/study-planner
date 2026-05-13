import { useState } from "react";
import { PRIORITIES } from "../constants/priorities";
import { TASKSTATUS } from "../constants/taskStatus";

export function useTaskForm(subjects) {
  const initialState = {
    taskName: "",
    description: "",
    priority: PRIORITIES[1].val,
    status: TASKSTATUS[0].val,
    deadline: "",
    idSubject: subjects?.[0]?.id || "",
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const setForm = (newData) => {
    setFormData((prev) => ({
      ...prev,
      ...newData,
    }));
  };
  const resetForm = () => {
    setFormData(initialState);
  };

  return {
    formData,
    handleChange,
    setForm,
    resetForm,
  };
}
