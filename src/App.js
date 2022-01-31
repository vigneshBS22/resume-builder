import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Navbar';
import Resume from './pages/Resume';
import PersonalDetails from './components/PersonalDetails';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Skills from './components/Skills';
import Download from './components/Download';
import Template1 from './components/Template1';
import Template2 from './components/Template2';
import Template3 from './components/Template3';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='resume' element={<Resume />}>
          <Route index element={<PersonalDetails />} />
          <Route path='personal' element={<PersonalDetails />} />
          <Route path='work' element={<WorkExperience />} />
          <Route path='education' element={<Education />} />
          <Route path='skill' element={<Skills />} />
          <Route path='download' element={<Download />} />
          <Route path='template1' element={<Template1 />} />
          <Route path='template2' element={<Template2 />} />
          <Route path='template3' element={<Template3 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
