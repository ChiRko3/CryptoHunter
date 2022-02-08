import { createTheme } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Banner from '../components/Banner/Banner';
import CoinsTable from '../components/CoinsTable';
import { CoinList } from '../config/api';
import { CryptoState } from '../CryptoContext';
const Homepage = () => {

    return (
        <>
            <Banner />
            <CoinsTable />
        </>
    );
};

export default Homepage;
