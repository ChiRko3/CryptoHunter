// import React, { createContext, useContext, useState, useEffect } from 'react';

// const Crypto = createContext()
// const CryptoContext = ({ children }) => {
//     const [Currency, SetCurrency] = useState("INR");
//     const [Symbol, SetSymbol] = useState("₹");
//     useEffect(() => {
//         if (Currency === 'INR') SetSymbol('₹');
//         else if (Currency === 'USD') SetSymbol('$');
//     }, [Currency]);

//     return (
//         <Crypto.Provider value={{ Currency, Symbol, SetCurrency }}>
//             {children}
//         </Crypto.Provider>
//     );
// };

// export default CryptoContext;

// export const CryptoState = () => {
//     return useContext(Crypto);
// };

import React, { createContext, useContext, useEffect, useState } from "react";

const Crypto = createContext();

const CryptoContext = ({ children }) => {
    const [currency, setCurrency] = useState("INR");
    const [symbol, setSymbol] = useState("₹");

    useEffect(() => {
        if (currency === "INR") setSymbol("₹");
        else if (currency === "USD") setSymbol("$");
    }, [currency]);

    return (
        <Crypto.Provider value={{ currency, setCurrency, symbol }}>
            {children}
        </Crypto.Provider>
    );
};

export default CryptoContext;

export const CryptoState = () => {
    return useContext(Crypto);
};