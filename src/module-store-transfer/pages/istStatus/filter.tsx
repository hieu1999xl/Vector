import { useCallback, useEffect, useState } from 'react';

import Services from './../../../module-main/services/istStatusServices'

const istFilter = (props: {dataSetting: any, setSettingView: any, refreshData: any}) => {
  const [setting, setSetting] = useState(props.dataSetting);
  const [currentSetting, setCurrentSetting] = useState(setting[0]);
  const [panel, setPanel] = useState();

  useEffect(() => {
    setCurrentSetting(setting[0])
  }, []);

  const handleChangeSetting = (event: any, key: string) => {
    let temp = {name: currentSetting.name, setting: currentSetting.setting};
    temp.setting[key] = !temp.setting[key];
    console.log(temp);
    setCurrentSetting(temp);
  }

  const handleSelectPanel = (event: any, index: number) => {
      setCurrentSetting(setting[index]);
      props.setSettingView(index);
  }

  const SettingPanel = Object.keys(currentSetting.setting).map(key => 
    <div>
      <input 
        onClick={(event) => handleChangeSetting(event, key)} 
        type={'checkbox'} 
        value={key} 
        checked={currentSetting.setting[key]}
        />{key}
    </div>
  )

  const addNewView = () => {
    let tempData = setting;
    tempData.push({name: `view ${setting.length + 1}`, setting: currentSetting.setting})
    Services.setSetting(tempData);
    props.refreshData()
    
  }

  return (
    <div style={{display: 'inline-block'}}>
      <div>
        List setting
      </div>
      {SettingPanel}
        {setting.map((item: any, index: number) => (
            <div key={index}>
              <input
                defaultChecked = {index === 0}
                name='settingPanel'
                onChange={(event) => handleSelectPanel(event, index)} 
                type={'radio'} 
                value={item.name}
                />{item.name}
          </div>
          ))}

          <button onClick={() => addNewView()}>add new view</button>
    </div>
  )
}

export default istFilter