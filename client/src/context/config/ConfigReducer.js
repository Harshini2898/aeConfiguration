import ContactState from "./ConfigState";

const ConfigReducer = (state, action) => {
  switch(action.type){
    case "GET_CONFIGS":
      return{
        ...state,
        configs: action.payload
      }
    case "SEARCH_CONFIGS":
      return{
        ...state,
        filtered: state.configs.filter((config) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          for(var i in config.tags){
            if(i.match(regex)){
              return !!i.match(regex);
            }
          }
          return !!config.description.match(regex);
        })
      }
    case "CLEAR_SEARCH":
      return{
        ...state,
        filtered: null
      }
    default:
      return state;
  }
}

export default ConfigReducer;