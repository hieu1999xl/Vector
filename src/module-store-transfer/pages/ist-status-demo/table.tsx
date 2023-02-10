import * as Tab from "../../../components/commons/Table/index";
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from './customTable';

const TableIst = (props: { dataIst: any, dataSetting: any }) => {

  const [data, setdata] = useState(props.dataIst);
  const [columns, setColumns] = useState(new Array);
  const [col, setCol] = useState([]);

  const btn = (row: any) => {
    const status = row.status;
    return (
        <button 
          style={{
            padding: '6px 16px', 
            borderRadius: '4px',
            color: status === 1 ? '#121418' : status === 2 ? '#464E5B' : '#464E5B',
          }}
          >{status === 1 ? 'Ready To Ship' : status === 2 ? 'STO Ready' : 'InTransit'}</button>
    )
  }

  useEffect(() => {
    let columnTemp = new Array;
    Object.keys(props.dataSetting.setting).forEach((element: any) => {
      if (props.dataSetting.setting[element]) {
        if (element === 'status') {
          columnTemp.push({ name: element, selector: (row: any) => btn(row) })
        } else {
          columnTemp.push({ name: element, selector: (row: any) => row[element] })
        }
      }
      setColumns(columnTemp);
    });
  }, [props.dataSetting]);
  console.log(data, 123)
  return (
    <>
      <DataTable
        customStyles={tableCustomStyles}
        columns={columns}
        data={props.dataIst}
      />
    </>
  )
}

export default TableIst;