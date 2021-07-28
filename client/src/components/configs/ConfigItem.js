import React from "react";
import 'font-awesome/css/font-awesome.min.css';

const ConfigItem = ({config}) => {
  const {name, version, fit} = config;
  const versionColors = {"3.6": "badge-blue", "3.5":"badge-violet", "3.4": "badge-red", "3.3": "badge-yellow", "3.2":"badge-pink"}
  return(
    <div className='card'>
      <h3 className='text-primary text-left'>
        {name}{" "}
        <span style={{float:"right"}}> <i className="fa fa-edit"></i></span>

      </h3><br></br>
      <hr style={{marginBottom:"10px"}}></hr>
      <span className= {"badge "+ versionColors[version] }> {version}</span>
      {fit ? (<span className="badge badge-green" style={{marginLeft:"10px"}}> fit </span>): (<span>{""}</span>)}
      <span style={{float:"right"}}> <i className="fa fa-edit"></i></span>
    </div>
  )
}

export default ConfigItem;