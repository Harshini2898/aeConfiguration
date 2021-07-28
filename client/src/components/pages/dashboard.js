import React from 'react';
import SearchBar from '../layouts/searchBar';
import Configs from '../configs/Configs';


const Dashboard = () => {
  return(
    <div class = "dashboard">
      <div class ="mainLine">
      <SearchBar/>
      </div>

      <div class = "configs">
      <Configs/>
      </div>

    </div>
  )
}

export default Dashboard;