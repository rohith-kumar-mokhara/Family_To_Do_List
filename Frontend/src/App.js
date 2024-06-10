import './App.scss';
import Home from "./pages/Home/Home.tsx"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./pages/Login/Login.tsx"
import Testimonials from "./components/Testimonials/Testimonials.tsx"
import About from "./pages/About/About.tsx"
import Faqs from "./pages/FAQs/Faqs.tsx"
import Tasks from "./pages/Tasks/Tasks.tsx"
import AddTask from './pages/AddTask/Addtask.tsx';
import Profile from './pages/Profile/Profile.tsx';
import EditTask from './pages/EditTask/EditTask.tsx';
import Leaderboard from './pages/Leaderboard/Leaderboard.tsx';
import MyCalendar from './pages/Calendar/MyCalendar.tsx';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "/login" element = {<Login />}></Route>
          <Route path = "/testimonials" element = {<Testimonials />}></Route>
          <Route path = "/about" element = {<About />}></Route>
          <Route path = "/faqs" element = {<Faqs/>}></Route>
          <Route path = "/tasks" element = {<Tasks/>}></Route>
          <Route path = "/addtask" element = {<AddTask/>}></Route>
          <Route path='/profile' element = {<Profile />} ></Route>
          <Route path="/editTask/:taskId" element = {<EditTask />}/>
          <Route path='/leaderboard' element = {<Leaderboard />}/>
          <Route path='/calendar' element = {<MyCalendar/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
