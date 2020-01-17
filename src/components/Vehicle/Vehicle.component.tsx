import React from 'react';
import { VehicleType } from '../../types';

export interface VehicleProps {
  vehicle: VehicleType;
}

export const Vehicle: React.SFC<VehicleProps> = ({ vehicle }) => {
  return (
    <>
      <h2>Your vehicle:</h2>
      <p>
        {vehicle.make} {vehicle.model}
      </p>
      <p>{vehicle.registration}</p>
    </>
  );
};
