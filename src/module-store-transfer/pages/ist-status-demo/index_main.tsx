import { useEffect, useState } from 'react'
import Services from './../../services/IstStatus'
import TableIst from './table';
import FilterIst from './filter';
import { ButtonCheck } from './../../../components/index';
import * as GridSystem from "../../../styles/gridSystem"
import { SCIstStatusRow } from './styles';
import './test.css'


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
    <SCIstStatusRow>

      <GridSystem.SCCol_8 style={{ paddingLeft: 0, paddingRight: 30 }}>
        <TableIst
          dataIst={data ? data : {}}
          dataSetting={currentSelected ? currentSelected : {}}
        />
      </GridSystem.SCCol_8>
      <GridSystem.SCCol_3>
        <FilterIst
          dataSetting={dataSetting ? dataSetting : {}}
          refreshData={refreshData}
          setSettingView={setSettingView}
        />
      </GridSystem.SCCol_3>


    </SCIstStatusRow>
  )
}

export default istStatus;