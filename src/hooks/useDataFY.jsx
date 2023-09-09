import { useEffect, useState } from "react";

const useForm = () => {
  const initialData = {
    username: "",
    email: "",
    phone: "",
    branch: "",
    preference: "",
    resume: "",
    question1: "",
    question2: "",
    question3: "",
  };

  const [data, setData] = useState(initialData);

  const updateData = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  useEffect(() => {
    if (localStorage.getItem("data")) {
      const keys = Object.keys(JSON.parse(localStorage.getItem("data")));
      const values = Object.values(JSON.parse(localStorage.getItem("data")));
      for (let i = 0; i < keys.length; i++) {
        updateData(keys[i], values[i]);
      }
    }
  }, []);

  return { data, setData, initialData, updateData };
};

export default useForm;
