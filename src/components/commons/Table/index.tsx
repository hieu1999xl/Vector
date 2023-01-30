import * as Tab from "./style";

const Table = () => {
  const information = [
    {
      name: "Receiver ROSN",
      value: "5.2",
    },
    {
      name: "Receiver Location",
      value: "ALBL - PHOENIX MALL",
    },
    {
      name: "City",
      value: "Bangalore",
    },
    {
      name: "Location Code",
      value: "2814",
    },
    {
      name: "Channel",
      value: "EC",
    },
  ];
  const cell = ['Item Code', 'Quantity', 'Donor ROSN', 'City', 'Location Code', 'Location Type', 'Channel', 'VF IST ID']
  const data = [
    {
      item: "UDTSHC0010-L",
      quantity: "01",
      donor: "0.5",
      location: "USPA DENIM (PMC BLR)",
      city: "Bangalore",
      code: "3015",
      type: "EBO",
      channel: "EC",
      vf: "VF_191222092311_11",
    },
    {
      item: "UDTSHC0010-M",
      quantity: "01",
      donor: "0.5",
      location: "USPA - SHANTINIKETAN (FORUM)",
      city: "Bangalore",
      code: "4947",
      type: "EBO",
      channel: "EC",
      vf: "VF_191222092311_17",
    },
    {
      item: "UDTSHC0010-S",
      quantity: "01",
      donor: "2.1",
      location: "ARMANS-SHIMOGA",
      city: "Bangalore",
      code: "4947",
      type: "EBO",
      channel: "EC",
      vf: "VF_191222092311_36",
    },
    ,
    {
      item: "UDTSHC0010-XL",
      quantity: "01",
      donor: "1.1",
      location: "URS ROAD MYSORE",
      city: "Shimoga",
      code: "4947",
      type: "EBO",
      channel: "EC",
      vf: "VF_191222092311_36",
    },
  ];
  return (
    <Tab.SCTableBox style={{marginBottom: 30}}>
      <Tab.SCTableInformation>
        <img src="../assets/img/Group 731.png" alt="logo" width={100} />
        <Tab.SCTableStyle>
          <Tab.SCTableStyleText>
            Style -{" "}
            <Tab.SCTableStyleTextSpan>
              UDTSHC0010 USP | UD | TS MU01 | Rs 1499
            </Tab.SCTableStyleTextSpan>
          </Tab.SCTableStyleText>
        </Tab.SCTableStyle>
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
          {cell.map((item) => (
            <Tab.SCTableTh>{item}</Tab.SCTableTh>
          ))}
        </Tab.SCTableTr>
        {data.map((item) => (
          <tr>
          <Tab.SCTableTd>{item?.item}</Tab.SCTableTd>
          <Tab.SCTableTd>{item?.quantity}</Tab.SCTableTd>
          <Tab.SCTableTd>{item?.donor}</Tab.SCTableTd>
          <Tab.SCTableTd>{item?.location}</Tab.SCTableTd>
          <Tab.SCTableTd>{item?.city}</Tab.SCTableTd>
          <Tab.SCTableTd>{item?.code}</Tab.SCTableTd>
          <Tab.SCTableTd>{item?.channel}</Tab.SCTableTd>
          <Tab.SCTableTd>{item?.vf}</Tab.SCTableTd>
        </tr>
        ))}
        
      </Tab.SCTableTab>
    </Tab.SCTableBox>
  );
};

export default Table;
