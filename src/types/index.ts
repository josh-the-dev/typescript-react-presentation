export interface VehicleType {
  make: string;
  model: string;
  registration: string;
}

export interface DriverType {
  forename: string;
  middleName?: string;
  surname: string;
  isPrimaryDriver: boolean;
  age: number;
}
