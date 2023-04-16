import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bio from './pages/bio';
import NotFound from './pages/notfound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
