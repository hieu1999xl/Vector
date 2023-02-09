import { useCallback, useEffect, useState } from 'react';



const istFilter = (props: {dataSetting: any}) => {
  const [setting, setSetting] = useState(props.dataSetting);
  const [currentSetting, setCurrentSetting] = useState(setting[0]);
  const [panel, setPanel] = useState();

  useEffect(() => {
    setCurrentSetting(setting[0])
  }, []);

  const handleChangeSetting = (event: any, key: string) => {
    let temp = currentSetting;
    temp.setting[key] = !temp.setting[key];
    console.log(temp);
    setCurrentSetting(temp);
  }
  const handleSelectPanel = (event: any, index: number) => {
      setCurrentSetting(setting[index])
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

  const renderSetting = () => {
    currentSetting &&
    Object.keys(currentSetting.setting).map(key => 
      <div>
        <input 
          onClick={(event) => handleChangeSetting(event, key)} 
          type={'checkbox'} 
          value={key} 
          checked={currentSetting.setting[key]}
          />{key}
      </div>
    )
  }
  return (
    <>
    <div>
      List setting
    </div>
    {renderSetting()}
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
    </>
  )
}

export default istFilter