import "./App.css";
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StudentForm from "./pages/StudentFrom.jsx";

import PdfPreview from "./pages/PdfPriview.jsx";
import Dashboard from "./pages/Dashboard.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StudentForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/priviwe" element={<PdfPreview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
