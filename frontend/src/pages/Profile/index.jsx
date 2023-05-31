import React, { useState } from 'react';
import styles from './Profile.module.css';

import Title from "../../components/UI/Title";
import PortfolioList from './components/PortfolioList';

const Profile = ({}) => {

    const [porfolioList, setPortfolioList] = useState([{
        name:'bitcoin',
        count:1,
        price_buy: 26.231,
        price_now: 29.2234,
    }])

    return (
        <div>
            <Title size={1} className="title">
                Tapi33
            </Title>
            <PortfolioList list={porfolioList} />
        </div>
    );
}

export default Profile;