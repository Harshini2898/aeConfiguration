import React, {useRef, useContext} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import ConfigContext from '../../context/config/ConfigContext';

const SearchBar = () =>{
  const configContext = useContext(ConfigContext);

  const text = useRef("");

  const {configSearch, clearSearch} = configContext;

  const onChange = (e) => {
    if(text.current.value){
      configSearch(text.current.value);
    } else{
      clearSearch();
    }
  }
  return(
    <form  className="searchForm input-icons">
            <i className="fa fa-search icon"></i>
      <input id="searcBox" className="input-field" type="text" ref ={text} placeholder = "Search Configurations.." onChange ={onChange}/>
    </form>
  )
}

export default SearchBar;