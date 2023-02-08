import * as Tab from "./style";
import Checkbox from "../Checkbox";
import ButtonOutlineCheck from "../ButtonOutlineCheck";
import { SwitchButton } from "./../../index";

const TableStore = () => {
  const onChange = () => {
    console.log('a hi hi')
  }
  const logState = (state: any) => {
    console.log("Toggled:", state)
  }

  const cell = ['Item Code', 'Quantity', 'Donor ROSN', 'City', 'Location Code', 'Location Type', 'Channel', 'VF IST ID']
  const data = [
    {

      location: "USPA DENIM (PMC BLR)",
      city: "Bangalore",
      code: "3015",
      cluster: "KA",
      status: false
    },
    {
      location: "ARVIND LIFESTYLE BRANDS LTD_ PHOENIX MALL",
      city: "Bangalore",
      code: "4947",
      cluster: "KA",
      status: true
    },
    {
      location: "ARMANS-SHIMOGA",
      city: "Bangalore",
      code: "4947",
      cluster: "KA",
      status: true
    },
    {
      location: "URS ROAD MYSORE",
      city: "Shimoga",
      code: "4947",
      cluster: "KA",
      status: true
    },
    {

      location: "USPA DENIM (PMC BLR)",
      city: "Bangalore",
      code: "3015",
      cluster: "KA",
      status: false
    },
    {
      location: "ARVIND LIFESTYLE BRANDS LTD_ PHOENIX MALL",
      city: "Bangalore",
      code: "4947",
      cluster: "KA",
      status: true
    },
    {
      location: "ARMANS-SHIMOGA",
      city: "Bangalore",
      code: "4947",
      cluster: "KA",
      status: true
    },
    {
      location: "URS ROAD MYSORE",
      city: "Shimoga",
      code: "4947",
      cluster: "KA",
      status: true
    },
  ];
  return (
    <Tab.SCTableBox style={{ marginBottom: 30 }}>
      <Tab.SCTableTab width="100%">
        <Tab.SCTableTr>
          <Tab.SCTableTh>Location Name</Tab.SCTableTh>
          <Tab.SCTableTh>Code</Tab.SCTableTh>
          <Tab.SCTableTh>City</Tab.SCTableTh>
          <Tab.SCTableTh>Cluster</Tab.SCTableTh>
          <Tab.SCTableTh>Status</Tab.SCTableTh>
        </Tab.SCTableTr>
        {data.map((item) => (
          <tr>
            <Tab.SCTableTd>{item?.location}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.code}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.city}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.cluster}</Tab.SCTableTd>
            <Tab.SCTableTd>
              <SwitchButton labelOn="Active" labelOff="Inactive" toggled={item.status} onClick={logState}
              /></Tab.SCTableTd>
          </tr>
        ))}

      </Tab.SCTableTab>
    </Tab.SCTableBox>
  );
};

export default TableStore;
