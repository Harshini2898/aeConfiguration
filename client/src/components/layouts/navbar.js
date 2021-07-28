import React from "react";
import { Link , NavLink} from "react-router-dom";

const Navbar = ()=> {
  return(
    <div class="side-nav">
    <svg width="110" id="icon" height="123" viewBox="0 0 110 123" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M87.9377 4.41159C65.2432 -9.27858 37.3968 21.5243 26.3104 38.637L35.1143 45.6834C52.7221 27.5641 73.2646 1.12409 89.8942 22.5309C110.06 48.4899 80.112 60.7829 67.3953 58.7696L57.6132 67.8293C63.8085 71.8558 79.9164 76.889 94.7852 64.8094C113.371 49.7099 116.306 21.5243 87.9377 4.41159Z" fill="#51B948" stroke="black" stroke-width="0.2"/>
    <path d="M42.9399 16.4912L52.722 6.42486C9.68066 -14.7144 -16.4381 39.0111 14.5718 65.816C39.0271 86.9552 70.3299 56.7564 85.0031 35.6171L76.1992 27.5641C67.3953 27.5641 46.8528 77.8956 20.4411 52.7298C4.88025 37.9031 20.4411 9.44476 42.9399 16.4912Z" fill="#51B948" stroke="black" stroke-width="0.2"/>
    <path d="M54.6785 29.5774C49.9831 36.0198 40.3314 45.0123 36.0925 48.7033L43.9182 55.7497C46.2007 54.4076 52.3308 49.71 58.5914 41.6569C64.8519 33.6039 72.2863 28.2352 75.221 26.5575L66.4171 18.5044C64.4606 19.5111 59.3739 23.1349 54.6785 29.5774Z" fill="#51B948" stroke="black" stroke-width="0.2"/>
    <path d="M13 121.295V93.076L32.72 110.007V93.7815H38.16V122L18.44 105.069V121.295H13Z" fill="#F6FEF5" stroke="black" stroke-width="0.2"/>
    <path d="M40.88 108.596C40.336 92.2294 57.88 91.9002 66.72 93.7815V100.131C59.92 97.3088 47.544 97.1677 47 107.891C46.456 118.614 60.3733 117.532 67.4 115.651V120.589C57.2 122.705 41.349 122.705 40.88 108.596Z" fill="#F6FEF5" stroke="black" stroke-width="0.2"/>
    <path d="M95.96 101.542C97.08 91.6651 79.64 93.076 70.8 93.7815V121.295H76.92V98.7197C80.32 98.7197 88.9333 97.3088 89.84 101.542C90.928 106.621 83.04 107.815 77.6 107.815L90.52 121.295H98L87.8 110.713C89.84 110.713 94.92 110.713 95.96 101.542Z" fill="#F6FEF5" stroke="black" stroke-width="0.2"/>
    </svg>
    <ul class = "navItems">
      <li>  
        <NavLink activeClassName ="selected" to ='/'><div id="firstnav" class="NavItem">Home</div></NavLink>
      </li>
      <li>
        <NavLink  className ="selected" to ='/add'><div id="firstnav" class="NavItem">Add Property</div></NavLink>
      </li>
      <li>
        <Link  to ='/add'><div id="firstnav" class="NavItem">Import dd</div></Link>
      </li>
      <li>
        <Link to = '/about'><div  id="firstnav" class="NavItem" >About</div></Link>
      </li>
    </ul>
</div>
  )
}

export default Navbar;