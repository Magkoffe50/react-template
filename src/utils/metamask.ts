import Web3 from 'web3';

export const getWeb3 = async () => {
  if ((window as any).ethereum) {
    const web3 = new Web3((window as any).ethereum);
    // eslint-disable-next-line no-useless-catch
    try {
      await (window as any).ethereum.enable();
      return web3;
    } catch (error) {
      throw error;
    }
  } else if ((window as any).web3) {
    const { web3 } = (window as any);
    return web3;
  } else {
    const provider = new Web3.providers.HttpProvider('http://localhost:8545');
    return new Web3(provider);
  }
};
