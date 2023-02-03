import * as Tab from "./../../../components/commons/Table/index";
import { useEffect, useState } from 'react'

const TableIst = (props: {dataIst: any}) => {

  const [data, setdata] = useState(props.dataIst);

  return (
    <>
    {/* <table style={{border: '1px solid black'}}>
      <thead>
        <td>
        donorLOC
        </td>
        <td>
        Ageing
        </td>
        <td>
        donorLOCName
        </td>
        <td>
        receiverLOCCode
        </td>
        <td>
        size
        </td>
        <td>
        status
        </td>
      </thead>
      {data.map((item: any) => (
          <tr>
            <td>
              {item.donorLOC}
            </td>
            <td>
              {item.Ageing}
            </td>
            <td>
              {item.donorLOCName}
            </td>
            <td>
              {item.receiverLOCCode}
            </td>
            <td>
              {item.size}
            </td>
            <td>
              {item.status}
            </td>
          </tr>
        ))}
    </table> */}

    </>
  )
}

export default TableIst