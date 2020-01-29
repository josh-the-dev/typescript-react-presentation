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

  const driver1: DriverType = {
    forename: 'Joe',
    middleName: 'Jim',
    surname: 'Bloggs',
    age: 24,
    isPrimaryDriver: true,
  };

  const driver2: DriverType = {
    forename: 'Joe',
    surname: 'Bloggs',
    age: 24,
    isPrimaryDriver: false,
  };

  return (
    <div className="App">
      <Driver driver={driver1} />
      <Driver driver={driver2} />
      <Vehicle vehicle={vehicle} />
    </div>
  );
};

export default App;
