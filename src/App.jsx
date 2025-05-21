import "./App.css";
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MultiStepForm from "./pages/StudentFrom.jsx";
import Dashboard from "./pages/dashboard.jsx";
import PdfPriview from "./pages/PdfPriview.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MultiStepForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/priviwe" element={<PdfPriview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
