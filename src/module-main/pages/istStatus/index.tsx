import { useEffect, useState } from 'react'
import { Table } from '../../../components/index'
import Services from './../../services/istStatusServices'
import TableIst from './table';
import FilterIst from './filter';

const istStatus = () => {

  const [dataSetting, setDataSetting] = useState(Services.getSetting);
  const [data, setData] = useState(Services.getData);

  useEffect(() => {
    console.log(data, 'did')
  }, []);

  return (
    <>
      <TableIst
        dataIst = {data ? data : {}}
      />
      <FilterIst
        dataSetting = {dataSetting ? dataSetting : {}}
      />
    </>
  )
}

export default istStatus;