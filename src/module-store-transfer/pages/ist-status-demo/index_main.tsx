import { useEffect, useState } from 'react'
import Services from './../../services/IstStatus'
import TableIst from './table';
import FilterIst from './filter';
import { ButtonCheck } from './../../../components/index';


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
    <div style={{ display: 'flex' }}>
      <TableIst
        dataIst={data ? data : {}}
        dataSetting={currentSelected ? currentSelected : {}}
      />
      <FilterIst
        dataSetting={dataSetting ? dataSetting : {}}
        refreshData={refreshData}
        setSettingView={setSettingView}
      />

    </div>
  )
}

export default istStatus;