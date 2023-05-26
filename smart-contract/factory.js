import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x9FaFC38beAD25Ef0ad8357E9b2383fb620436227"
);

export default instance;
