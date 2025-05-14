import Home from "@/pages/home";
import { Navigate, Route, Routes } from "react-router-dom";

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
