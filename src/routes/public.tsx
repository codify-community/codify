import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '@/pages/home'

export default function PublicRoutes() {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Home />} />
      <Route path="/staff" element={<Home />} />
      <Route path="/desafios" element={<Home />} />
    </Routes>
  )
}
