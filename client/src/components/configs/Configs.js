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
              <ConfigItem config={config} />
            ))
          ) :
            (
              configs.map((config) => (
                <ConfigItem config={config} />
              ))
            )}

        </Fragment>
      ) : (<span>Loading</span>)}

    </Fragment>
  )
}

export default Configs;