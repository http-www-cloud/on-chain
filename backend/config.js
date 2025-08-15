const dotenv = require('dotenv');

// Detect environment or default to development
const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: `.env.${env}` });

module.exports = {
  env,
  port: process.env.PORT || 5000,
  apiKeys: {
    etherscan: process.env.ETHERSCAN_API_KEY,
    bscscan: process.env.BSCSCAN_API_KEY,
    snowscan: process.env.SNOWSCAN_API_KEY,
    arbiscan: process.env.ARBISCAN_API_KEY,
    optimism: process.env.OPTIMISM_API_KEY,
  },
  web3: {
    api: process.env.WEB3_API,
    projectId: process.env.PROJECT_ID,
    infuraId: process.env.INFURA_ID,
  },
};
