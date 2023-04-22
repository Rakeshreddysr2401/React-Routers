import {createBrowserRouter,Route,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import CarearLayout from './layouts/CarearLayout';
import Faq from './pages/Faq';
import Contact,{ contactAction} from './pages/Contact';
import NotFound from './pages/NotFound';
import Carear,{carearLoader} from './pages/Carear';
import CareerDetails,{careerDetailsLoader} from './pages/CareerDetails';
import CareerErrors from './pages/CareerErrors';
//projects
import Projects from './pages/Projects';
import Military from './projectlist/Military'
const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="help" element={<HelpLayout/>}>
          <Route path="faq" element={<Faq/>}></Route>
          <Route path="contact" element={<Contact/>} action={ contactAction}></Route>
        </Route>
        <Route path="carear" element={<CarearLayout/>} errorElement={<CareerErrors/>}>
          <Route 
             index element={<Carear/>}
             loader={carearLoader} >
          </Route>
          <Route 
              path=":id" element={<CareerDetails/>}
              loader={careerDetailsLoader}
             // errorElement={<CareerErrors/>}
          >
          </Route>
          
        </Route>
        <Route path="project" element={<Projects/>}></Route>
        <Route path="ps1" element={<Military/>}></Route> 
        <Route path="*" element={<NotFound/>}></Route>
    </Route>
  )
)
function App() {
  return (
    <div>
    <RouterProvider router ={router}/>
    </div>
  );
}

export default App
