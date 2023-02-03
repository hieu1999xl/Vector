import Data from './../dataSample/data'
import DataSetting from './../dataSample/setting'

export const setData = () => {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(Data));
    localStorage.setItem("dataSetting", JSON.stringify(DataSetting));
    console.log(JSON.stringify(Data));
  }
}

export const getData = () => {
  setData()
  const res = localStorage.getItem("data");
  console.log(res ? JSON.parse(res) : 'huhu', 'haha')
  return res ? JSON.parse(res) : 'no data';
};

export const getSetting = () => {
  const res = localStorage.getItem("dataSetting");
  return res ? JSON.parse(res) : 'no data';
};

export const setSetting = (setting: Object) => {
  const res = localStorage.setItem("dataSetting", JSON.stringify(setting));
  return true;
};

export default {setData, getData, getSetting, setSetting}
