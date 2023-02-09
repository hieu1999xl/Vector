import Data from './dataSample'
import DataSetting from './setting'

export const setData = () => {
  if (!localStorage.getItem("data")) {
    localStorage.setItem("data", JSON.stringify(Data));
    localStorage.setItem("dataSetting", JSON.stringify(DataSetting));
  }
}

export const getData = () => {
  setData()
  const res = localStorage.getItem("data");
  return res ? JSON.parse(res) : 'no data';
};

export const getSetting = () => {
  const res = localStorage.getItem("dataSetting");
  return res ? JSON.parse(res) : 'no data';
};

export const setSetting = (setting: Object) => {
  localStorage.setItem("dataSetting", JSON.stringify(setting));
  return true;
};

export default { setData, getData, getSetting, setSetting }
