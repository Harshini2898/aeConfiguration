import React, {useReducer} from "react";
import ConfigContext from "./ConfigContext";
import ConfigReducer from "./ConfigReducer";
import axios from "axios";

const ContactState = (props) => {
  const initialState = {
    configs: null,
    current: null,
    error:null,
    filtered: null
  }

  const [state, dispatch] = useReducer(ConfigReducer, initialState);

  const getConfigs = async() => {
    try{
      console.log("ENtered");
      const res = await axios.get("/api/sharedProps/");
      console.log(res);
      dispatch({type:"GET_CONFIGS", payload: res.data});
    } catch(err){
      dispatch({type: "CONFIG_ERROR", payload: err.response.data.msg});
    }
  }

  const configSearch = async(text) => {
    dispatch({type:"SEARCH_CONFIGS", payload: text});
  }

  const clearSearch = () => {
    dispatch({type:"CLEAR_SEARCH"});
  }

  const addConfig = async (configItem) => {
    const config = {
      headers:{
        "Content-Type": "application/json",
      },
    };
    try{
      const res = await axios.post("/api/sharedProps/", configItem, config);
      dispatch({type: "ADD_CONFIG", payload: res.data});
    } catch(err){
      dispatch({type:"CONTACT_ERROR", payload: err.response.data.msg});
    }
  }

  return (
    <ConfigContext.Provider 
      value={{
        configs: state.configs,
        current: state.current,
        error: state.error,
        filtered: state.filtered,
        getConfigs,
        configSearch,
        clearSearch,
        addConfig
      }}
      >
        {props.children}
      </ConfigContext.Provider>
  )

}

export default ContactState;