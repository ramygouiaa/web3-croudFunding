// here we handle all the communication with the Smart contract and Web 3 logic
import React, { useContext, createContext } from 'react';
import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
import { ethers } from 'ethers';

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

    //setting contract address
    const contract = useContract('0xBEb7C33BA4D9a7bCD8114F5d3769f0Ec5156780e');

    //initiate the contract call
    const { mutateAsync: createCampaign } = useContractWrite(contract, 'createCampaign');

    const address = useAddress();
    const connect = useMetamask();

    //calling the contract
    const publishCampaign = async (form) => {
        try {
            const data = await createCampaign([
                address, // owner
                form.title, // title
                form.description, // description
                form.target, // target
                new Date(form.deadline).getTime(), // deadline
                form.image // image
            ])
            console.log('contract call success', data);

        } catch (error) {
            console.log('contract call failure', error);
        }
    }

    return (
        <StateContext.Provider
            value={{
                address,
                contract,
                createCampaign: publishCampaign
            }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => {
    useContext(StateContext)
}

