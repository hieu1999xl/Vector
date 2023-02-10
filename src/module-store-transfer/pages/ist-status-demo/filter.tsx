import { useCallback, useEffect, useState } from 'react';
import { ButtonCheck } from './../../../components/index';
import Services from './../../services/IstStatus'
import { SCIstStatusText, SCIstStatusSettingPanel, SCIstComponent, SCIstStatusLabel, SCIstStatusAddText, SCIstStatusAddButton, SCIstStatusFIlterBox, SCIstStatusAddNew, SCIstStatusInput } from './styles';

const istFilter = (props: { dataSetting: any, setSettingView: any, refreshData: any }) => {
  const [setting, setSetting] = useState(props.dataSetting);
  const [currentSetting, setCurrentSetting] = useState(setting[0]);
  const [panel, setPanel] = useState();

  useEffect(() => {
    setCurrentSetting(setting[0])
  }, []);

  const handleChangeSetting = (event: any, key: string) => {
    let temp = { name: currentSetting.name, setting: currentSetting.setting };
    temp.setting[key] = !temp.setting[key];
    console.log(temp);
    setCurrentSetting(temp);
  }

  const handleSelectPanel = (event: any, index: number) => {
    console.log('à')
    setCurrentSetting(setting[index]);
    props.setSettingView(index);
  }

  const SettingPanel = Object.keys(currentSetting.setting).map(key =>
    <div style={{ marginBottom: '10px' }}>
      <ButtonCheck text={key} onClick={(event: any) => handleChangeSetting(event, key)} toggled={currentSetting.setting[key]} />
    </div >
  )

  const addNewView = () => {
    let tempData = setting;
    tempData.push({ name: `view ${setting.length + 1}`, setting: currentSetting.setting })
    Services.setSetting(tempData);
    props.refreshData()

  }

  return (
    <>
      <SCIstComponent>Components</SCIstComponent>
      <SCIstStatusFIlterBox>
        <SCIstStatusText>
          Brand Components
        </SCIstStatusText>
        <SCIstStatusSettingPanel>
          {SettingPanel}
        </SCIstStatusSettingPanel>
        <SCIstStatusAddNew>
          <SCIstStatusAddText>Views</SCIstStatusAddText>
          <SCIstStatusAddButton onClick={() => addNewView()}>+Add Views</SCIstStatusAddButton>
        </SCIstStatusAddNew>
        {setting.map((item: any, index: number) => (
          <div key={index}>
            <SCIstStatusInput
              defaultChecked={index === 0}
              name='settingPanel'
              type={'radio'}
              value={item.name}
            />
            <SCIstStatusLabel onClick={(event) => handleSelectPanel(event, index)}>
              <span>{item.name}</span>
            </SCIstStatusLabel>
          </div>
        ))}
      </SCIstStatusFIlterBox>
    </>
  )
}

export default istFilter