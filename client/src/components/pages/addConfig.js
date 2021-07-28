import React , {useState, useContext} from 'react';
import ConfigContext from '../../context/config/ConfigContext';

const AddConfig = () => {

    const configContext = useContext(ConfigContext);
    const {addConfig} = configContext;

    const [config, setConfig] = useState({
        name:"",
        description:"",
        version:"",
        fit:false,
        tags:""
    });

    const {name, description, version, fit, tags} = config;

    const onChange = e => setConfig({...config, [e.target.name]: e.target.value})


    const onSubmit = e =>{
        e.preventDefault();
        config.fit = !!config.fit;
        config.tags = config.tags.split(',');
        console.log(config);

        addConfig(config);
        alert("added succesfully");
        setConfig({
            name:"",
            description:"",
            version:"",
            fit:false,
            tags:""
        })
    }

  return(
    <form onSubmit = {onSubmit}>
        <div class="contain-add-property">
    <div>        
        <label >Property Name</label><br/>
        <input id="propName" type="text" placeholder="Name" name="name" value={name} onChange={onChange}/>
    </div>

    <div>       
        <label>Description</label><br/>
        <textarea id="description" placeholder="Description" name="description" value={description} onChange={onChange}/>
    </div>

    <div id="whole">
        <div id="b1">
            <label>Version</label><br/>
            <select id="version" name="version" value={version} onChange={onChange}>
                <option value="-1">None</option>
                <option value="3.1">AE 3.1</option>
                <option value="3.2">AE 3.2</option>
                <option value="3.3">AE 3.3</option>
                <option value="3.4">AE 3.4</option>
                <option value="3.5">AE 3.5</option>
                <option value="3.6">AE 3.6</option>
            </select>   
        </div>
        <div id="b2">
            <label>Fit</label><br/>
            <select id="fitForm" name="fit" value={fit} onChange={onChange} >
                <option value="false">False</option>
                <option value="true">True</option>
            </select>            
        </div>

    </div>

    <div>
        <label >Tags</label><br/>
        <input type="text" id="tagsForm" name = "tags" value={tags} placeholder="Tags" onChange={onChange}/>
    </div>

    <div>
        <br/><button type="submit" id="add">Add</button>
    </div>
</div>
    </form>
    
  )
}

export default AddConfig;