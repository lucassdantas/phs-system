export interface UsersType {
  name:string;
  lastName:string;
  email:string;
  phone:string;
  address:{
    address:string,
    city:string,
    state:string,
    zipCode:number,
    country:string,
  };
  jwtToken:string;
  role:string;
  phaseAcquired:string;
  
}