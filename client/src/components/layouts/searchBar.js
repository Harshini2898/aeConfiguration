import React, { useRef, useContext } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import ConfigContext from '../../context/config/ConfigContext';

const SearchBar = () => {
  const configContext = useContext(ConfigContext);

  const text = useRef("");

  const { configSearch, clearSearch } = configContext;

  const onChange = (e) => {
    if (text.current.value) {
      configSearch(text.current.value);
    } else {
      clearSearch();
    }
  }
  return (
    <form className="menu  input-icons">
      <div className=" tagsDropDown menuItem">
        <select id="tags" name="tags">
          <option value="tags">Tags</option>
          <option value="cards">cards</option>
          <option value="contactless">contactless</option>
          <option value="chaining">Chaining</option>
        </select>
      </div>
      <div className="searchForm menuItem">
        {/* <i className="fa fa-search icon"></i> */}
        <input id="searcBox" className="input-field" type="text" ref={text} placeholder="Search Configurations.." onChange={onChange} />
      </div>

      <div className="menuItem" >
        <button class ="btn exportcsv">Export CSV</button>
      </div>
    </form>
  )
}

export default SearchBar;