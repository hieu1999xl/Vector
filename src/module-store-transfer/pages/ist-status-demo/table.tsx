import * as Tab from "../../../components/commons/Table/index";
import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { tableCustomStyles } from './customTable';

const TableIst = (props: { dataIst: any, dataSetting: any }) => {

  const [data, setdata] = useState(props.dataIst);
  const [columns, setColumns] = useState(new Array);
  const [col, setCol] = useState([]);

  useEffect(() => {
    console.log(props.dataSetting.setting)
    let columnTemp = new Array;
    Object.keys(props.dataSetting.setting).forEach((element: any) => {
      if (props.dataSetting.setting[element]) {
        columnTemp.push({ name: element, selector: (row: any) => row.donorLOC })
      }
      setColumns(columnTemp);
    });
  }, [props.dataSetting]);

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