import React, { Fragment, useContext, useEffect } from 'react';
import ConfigItem from './ConfigItem';
import ConfigContext from '../../context/config/ConfigContext';

const Configs = () => {
  const configContext = useContext(ConfigContext);
  const { configs, getConfigs, filtered } = configContext;

  useEffect(() => {
    getConfigs();
  });


  return (
    <Fragment>
      {configs ? (
        <Fragment>
          {filtered ? (
            filtered.map((config) => (
              <Fragment>
                  <ConfigItem config={config} />
                  
                </Fragment>
            ))
          ) :
            (
              configs.map((config) => (
                <Fragment> 
                  <ConfigItem config={config} />
                </Fragment>
                
                
              ))
            )}

        </Fragment>
      ) : (<span>Loading</span>)}

    </Fragment>
  )
}

export default Configs;