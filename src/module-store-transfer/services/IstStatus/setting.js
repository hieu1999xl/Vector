const dataSetting = [
  {
    name: 'new',
    setting: {
      donorLOC: true,
      Ageing: true,
      donorLOCName: true,
      receiverLOCCode: true,
      style: true,
      size: true,
      status: true,
      }
  },
  {
    name: 'view 1',
    setting: {
      donorLOC: true,
      Ageing: true,
      donorLOCName: true,
      receiverLOCCode: false,
      style: true,
      size: false,
      status: true,
      }
  },
  {
    name: 'view 2',
    setting: {
      donorLOC: true,
      Ageing: false,
      donorLOCName: false,
      receiverLOCCode: false,
      style: true,
      size: false,
      status: true,
      }
  },
]

export default dataSetting;