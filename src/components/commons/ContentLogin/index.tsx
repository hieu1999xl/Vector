import styled from 'styled-components';

const ContentLogin = () => {
  return (
    <ContentBlock>
      <ContentItem>
        <ImgItem>
          <Box>
            <img src="../assets/img/machine-learning.png" />
          </Box>
        </ImgItem>
        <TextItem>
          <Tittle>Perfect utilisation of expensive retail shelf space</Tittle>
          <Describe>A powerful algorithm aids retail planners by suggesting the best merchandising grid for each specific store at <br/>different product attribute levels. The fulfilment engine ensures a clean display and maximises throughput per shelf space.</Describe>
        </TextItem>
      </ContentItem>
      <ContentItem>
        <ImgItem>
          <Box>
            <img src="../assets/img/business.png" />
          </Box>
        </ImgItem>
        <TextItem>
          <Tittle>Maximize full price sell-through with controlled inventories</Tittle>
          <Describe>Short PLC dynamic depth management aided with ROSN ensures optimum depth per style. An Inter-Store <br/> Transfer engine allocates cut-sizes of fast movers and store specific slow movers to specific best-selling stores.</Describe>
        </TextItem>
      </ContentItem>
      <ContentItem>
        <ImgItem>
          <Box>
            <img src="../assets/img/optimize.png" />
          </Box>
        </ImgItem>
        <TextItem>
          <Tittle>Optimise markdowns to maintain ROCE</Tittle>
          <Describe>Gradual calibration of discounts on slow movers based on Inventory position, ROSN and proximity to end of life aids <br/> retail planners to extract better margins before EOSS while reducing chances of store-returns.</Describe>
        </TextItem>
      </ContentItem>
      <ContentItem>
        <ImgItem>
          <Box>
            <img src="../assets/img/data.png" />
          </Box>
        </ImgItem>
        <TextItem>
          <Tittle>Use data to drive decisions</Tittle>
          <Describe>Powerful control tower with dashboards ensures you get a hawk eye view of the whole supply chain.</Describe>
        </TextItem>
      </ContentItem>
    </ContentBlock>
  );
};
export default ContentLogin;

const ContentBlock = styled.div`
  // background: white;
  // height : 1000px;
  width: 100%;
  padding-top: 90px;
  display: flex;
  flex-direction: column;
`;

const ContentItem = styled.div`
  display: flex;
  flex-direction: row;
`
const ImgItem = styled.div`
  flex: 1;
`
const Box = styled.div`
  background: #f0f1f4;
  box-shadow: -4px -4px 30px #bbb7b7;
  border-radius: 20px;
  height: 92px;
  width: 137px;
  display: flex;
  align-items: center ;
  justify-content: center;
  `
const Tittle = styled.h1`
  margin: 0px;
  font: normal normal medium 28px/37px Roboto;
  letter-spacing: 0px;
  color: #1C1E2B;
`
const Describe = styled.h3`
  font: normal normal 300 17px/30px Roboto;
  letter-spacing: 0px;
  color: #1C1E2B;
  // margin: 10px
  `
  

const TextItem = styled.div`
    display: flex;
    flex-direction: column;
    flex: 5;
`