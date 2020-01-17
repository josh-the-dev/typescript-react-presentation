import React, { FC } from 'react';
import { DriverType } from '../../types';

export interface DriverProps {
  driver: DriverType;
}

export const Driver: FC<DriverProps> = ({ driver }) => {
  return (
    <>
      <h2>Your information:</h2>
      <p>
        {driver.forename} {driver.surname}
      </p>
    </>
  );
};
