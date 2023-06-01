import React, { useEffect, useState } from 'react';
import styles from './Profile.module.css';

import Title from "../../components/UI/Title";
import PortfolioList from './components/PortfolioList';
import axios from 'axios';

const Profile = ({}) => {
    const [portfolioList, setPortfolioList] = useState([]);

 useEffect(()=>{

    (async ()=>{
        const headers = {
            'Authorization': `Token ${localStorage.getItem('auth_token')}`,
        };
    
                const responseCoin = await (await axios.get('http://127.0.0.1:8000/api/v1/portfolio/', { headers })).data
                const arrayCrypto = responseCoin.map(item => item.id_crypto).filter((value, index, self) => self.indexOf(value) === index);
                const responsePrice = await (await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${arrayCrypto.join(',')}&vs_currencies=usd`)).data

                const updatedData = responseCoin.map(item => {
                    const { id_crypto } = item;
                    const currentPrice = responsePrice[id_crypto].usd;
                    return { ...item, current_price: currentPrice };
                  });
                  
                  setPortfolioList(updatedData);

    })()

  },[])



    return (
        <div>
            <Title size={1} className="title">
                Tapi33
            </Title>
            <PortfolioList list={portfolioList} />
        </div>
    );
}

export default Profile;