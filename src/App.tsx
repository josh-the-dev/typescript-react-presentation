import React, { FC } from 'react';
import { Vehicle } from './components/Vehicle';
import { Driver } from './components/Driver';
import './App.css';
import { VehicleType, DriverType } from './types';

const App: FC = () => {
  const vehicle: VehicleType = {
    make: 'Seat',
    model: 'Leon',
    registration: 'A123',
  };

  const driver: DriverType = {
    forename: 'Joe',
    surname: 'Bloggs',
  };

  return (
    <div className="App">
      <Driver driver={driver} />
      <Vehicle vehicle={vehicle} />
    </div>
  );
};

export default App;
