import React from "react";
import { useMoralis } from "react-moralis";
import metaMaskLogo from "../../metamask.svg";

export const ConnectWallet = () => {
  const { authenticate, isAuthenticated } = useMoralis();

  
  const handleAuthentication = (e) => {
    e.preventDefault();
    authenticate();
  };

  
  console.log(isAuthenticated);

  return (
    <button className='wallet-btn' type='button' onClick={handleAuthentication}>
      <img src={metaMaskLogo} alt='Metamask logo' />
      <span className='hide-on-sm'>
        MetaMask Wallet Connect (Not Connected)
      </span>
      <span className='hide-on-md'> Connect Wallet </span>
    </button>
  );
};