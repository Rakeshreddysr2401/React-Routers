import {NavLink,Outlet} from 'react-router-dom';
//import BreadCrumbs from './components/BreadCrumbs';
import BreadCrumbs from '../components/BreadCrumbs';
export default function RootLayout(){
    return(
    <div className="rootlayout">
      
        <nav>
          <h1>MyFriends</h1>
          <div id="nvbars">
          <ul>
              
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="help"><button>Help</button></NavLink></li>
              <li><NavLink to="about">About</NavLink></li>
              <li><NavLink to="carear">Careers</NavLink></li>
              <li><NavLink to="project">Projects</NavLink></li>
          </ul>
          </div>
        </nav>
        {/* <div>
          <BreadCrumbs/>
        </div> */}
        <main id="root">
            {<Outlet/>}
        </main>
        <footer>
          <p2>Copyrights@rakhi-2023</p2>
        </footer>
      </div>
  
      );
}