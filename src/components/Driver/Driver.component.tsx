import React, { FC } from 'react';
import { DriverType } from '../../types';

export interface DriverProps {
  driver: DriverType;
}

export const Driver: FC<DriverProps> = ({ driver }) => {
  return (
    <>
      <h2>Driver information:</h2>
      <p>
        {driver.forename} {driver.middleName} {driver.surname}
      </p>
      <p>{driver.age} years old</p>
      {driver.isPrimaryDriver && <strong>Primary driver</strong>}
    </>
  );
};
