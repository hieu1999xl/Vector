import * as Tab from "./style";
import Checkbox from "../Checkbox";
import ButtonOutlineCheck from "../ButtonOutlineCheck";

const TableForced = () => {
  const onChange = () => {
    console.log('a hi hi')
  }
  const information = [
    {
      name: "Receiver Location",
      value: "ALBL - PHOENIX MALL",
    },
    {
      name: "Location Code",
      value: "2814",
    },
    {
      name: "City",
      value: "Bangalore",
    },
    {
      name: "LocationType",
      value: "EBO",
    },
    {
      name: "Channel",
      value: "EC",
    },
  ];
  const cell = ['Item Code', 'Quantity', 'Donor ROSN', 'City', 'Location Code', 'Location Type', 'Channel', 'VF IST ID']
  const data = [
    {
      age: "7 Day",
      item: "UDTSHC0010-L",
      size: "S",
      quantity: "01",
      status: "Pushed To SAP",
      money: "USP | UD | TS",
      location: "USPA DENIM (PMC BLR)",
      city: "Bangalore",
      channel: "EC",
      vf: "VF_191222092311_11",
    },
    {
      age: "7 Day",
      item: "UDTSHC0010-M",
      size: "M",
      quantity: "01",
      status: "Ready To Ship",
      money: "USP | UD | TS",
      location: "USPA - SHANTINIKETAN (FORUM)",
      city: "Bangalore",
      channel: "EC",
      vf: "VF_191222092311_17",
    },
    {
      age: "7 Day",
      item: "UDTSHC0010-S",
      size: "L",
      quantity: "01",
      status: "STO Created",
      money: "USP | UD | TS",
      location: "ARMANS-SHIMOGA",
      city: "Bangalore",
      channel: "EC",
      vf: "VF_191222092311_36",
    },
    {
      age: "7 Day",
      item: "UDTSHC0010-XL",
      size: "XL",
      quantity: "01",
      status: "STO Created",
      money: "USP | UD | TS",
      location: "URS ROAD MYSORE",
      city: "Shimoga",
      channel: "EC",
      vf: "VF_191222092311_36",
    }, {
      age: "7 Day",
      item: "UDTSHC0010-L",
      size: "S",
      quantity: "01",
      status: "Pushed To SAP",
      money: "USP | UD | TS",
      location: "USPA DENIM (PMC BLR)",
      city: "Bangalore",
      channel: "EC",
      vf: "VF_191222092311_11",
    },
    {
      age: "7 Day",
      item: "UDTSHC0010-M",
      size: "M",
      quantity: "01",
      status: "Ready To Ship",
      money: "USP | UD | TS",
      location: "USPA - SHANTINIKETAN (FORUM)",
      city: "Bangalore",
      channel: "EC",
      vf: "VF_191222092311_17",
    },
    {
      age: "7 Day",
      item: "UDTSHC0010-S",
      size: "L",
      quantity: "01",
      status: "STO Created",
      money: "USP | UD | TS",
      location: "ARMANS-SHIMOGA",
      city: "Bangalore",
      channel: "EC",
      vf: "VF_191222092311_36",
    },
  ];
  return (
    <Tab.SCTableBox style={{ marginBottom: 30 }}>
      <Tab.SCTableInformation>
        <Tab.SCTableList>
          {information.map((item) => (
            <Tab.SCTableItem>
              <Tab.SCTableItemName>{item.name}</Tab.SCTableItemName>{" "}
              <Tab.SCTableItemValue>{item.value}</Tab.SCTableItemValue>
            </Tab.SCTableItem>
          ))}
        </Tab.SCTableList>
      </Tab.SCTableInformation>
      <Tab.SCTableTab width="100%">
        <Tab.SCTableTr>
          <Tab.SCTableTh><Tab.SCTableCheckbox><Checkbox name="action" value="action" onChange={onChange} /></Tab.SCTableCheckbox>Ace</Tab.SCTableTh>
          <Tab.SCTableTh>Item Code</Tab.SCTableTh>
          <Tab.SCTableTh>Size</Tab.SCTableTh>
          <Tab.SCTableTh>Quantity</Tab.SCTableTh>
          <Tab.SCTableTh>Status</Tab.SCTableTh>
          <Tab.SCTableTh>B | SB | Cat</Tab.SCTableTh>
          <Tab.SCTableTh>Receiver Location</Tab.SCTableTh>
          <Tab.SCTableTh>City</Tab.SCTableTh>
          <Tab.SCTableTh>Channel</Tab.SCTableTh>
          <Tab.SCTableTh>VF IST ID</Tab.SCTableTh>
        </Tab.SCTableTr>
        {data.map((item) => (
          <tr>
            <Tab.SCTableTd style={{ color: '#F24242' }}><Tab.SCTableCheckbox><Checkbox name="action" value="action" onChange={onChange} /></Tab.SCTableCheckbox>{item?.age}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.item}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.size}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.quantity}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.status}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.money}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.location}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.city}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.channel}</Tab.SCTableTd>
            <Tab.SCTableTd>{item?.vf}</Tab.SCTableTd>
          </tr>
        ))}

      </Tab.SCTableTab>
      <Tab.SCButtonChecBox>
        <ButtonOutlineCheck icon="ignore" text="IGNORE" onChange={onChange} />
        <ButtonOutlineCheck icon="deline" text="TERMINATE" onChange={onChange} />
      </Tab.SCButtonChecBox>
    </Tab.SCTableBox>
  );
};

export default TableForced;

