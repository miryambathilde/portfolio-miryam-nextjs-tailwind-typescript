import { IconType } from "react-icons";

//interface is the shape of the object
export interface Service {
  title: string,
  about: string,
  Icon: IconType
}

export interface Skill {
  name:string, 
  level:string,
  Icon: IconType
}