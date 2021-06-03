import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

import { GlobalProvider } from './context/GlobalState';

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <div className="border-all p-20 text-center">
        <Balance />
        <AddTransaction />
        </div>
        <div className="border-all p-20 mt-20">
        <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
