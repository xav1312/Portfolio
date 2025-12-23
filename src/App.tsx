import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<ProjectList />} />
        <Route path="about" element={<About />} />
        <Route path="project/:id" element={<ProjectDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
