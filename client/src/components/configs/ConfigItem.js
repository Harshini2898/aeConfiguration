import React from "react";
import 'font-awesome/css/font-awesome.min.css';
const Collapse = window.Collapse;

const ConfigItem = ({config}) => {
  const {name, version, fit} = config;
  let [isOpen, setIsOpen] = React.useState(false);

  let onToggle = () => setIsOpen(s => !s);

  const versionColors = {"3.6": "badge-blue", "3.5":"badge-violet", "3.4": "badge-red", "3.3": "badge-yellow", "3.2":"badge-pink"}
  return(
    <div className='card'>
      <h3 className='text-primary text-left'>
        <span>
        <svg height="20" width="20">
  <circle cx="10" cy="14" r="6" fill="green" />
</svg>
        </span>
        {"    "}{name}{" "}
        <span className="rotate90" style={{float:"right"}}> 
        <svg
            className="iconDrop"
            viewBox="2 0 12 24"
          >
            <polygon points="8 0 6 1.8 14.4 12 6 22.2 8 24 18 12" />
          </svg>
        </span>


      </h3><br></br>
      <hr style={{marginBottom:"10px"}}></hr>
      
      <span className= {"badge "+ versionColors[version] }> {version}</span>
      {fit ? (<span className="badge badge-green" style={{marginLeft:"10px"}}> fit </span>): (<span>{""}</span>)}
      <span style={{float:"right"}}> <i className="fa fa-edit"></i></span>
    </div>
  )
}

export default ConfigItem;