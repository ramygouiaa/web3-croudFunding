import React from 'react'; 
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router }  from 'react-router-dom';

import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

import { App } from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <ThirdwebProvider 
      activeChain={ Sepolia } 
      clientId="48be8c6ce6f342dfa91b7eaf0a263142" // You can get a client id from dashboard settings
    >
        <Router>
            <App />
        </Router>
    </ThirdwebProvider>
)

function Component() {
    const { contract, isLoading } = useContract("0xBEb7C33BA4D9a7bCD8114F5d3769f0Ec5156780e");
  }