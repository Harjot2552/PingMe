import React, { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { login, isLoggingIn } = useAuthStore();
  const handleSubmit = (e) => {
    e.preventDefault();

    login(formData);
  };
  
  return <div></div>;
};

export default LoginPage;
