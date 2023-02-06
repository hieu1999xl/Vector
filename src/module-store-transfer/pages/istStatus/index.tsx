import { useEffect, useState } from 'react'
import Services from './../../../module-main/services/istStatusServices'
import TableIst from './table';
import FilterIst from './filter';


const istStatus = () => {

  const [dataSetting, setDataSetting] = useState(Services.getSetting);
  const [currentSelected, setCurrentSelected] = useState(dataSetting[0]);
  const [data, setData] = useState(Services.getData);
  useEffect(() => {
    console.log(currentSelected)
  }, []);

  const setSettingView = (index: number) => {
    setCurrentSelected(dataSetting[index])
    console.log(index)
  }

  const refreshData = () => {
    setData(Services.getData)
    setDataSetting(Services.getSetting)
  }
  return (
    <div style={{border: '1px solid', display: 'flex'}}>
      <TableIst
        dataIst = {data ? data : {}}
        dataSetting = {currentSelected ? currentSelected : {}}
      />
      <FilterIst
        dataSetting = {dataSetting ? dataSetting : {}}
        refreshData = {refreshData}
        setSettingView = {setSettingView}
      />
    </div>
  )
}

export default istStatus;