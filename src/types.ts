import Circle from "./01_S/circle";
import Square from "./01_S/square";
import Triangle from "./02_O/triangle";


export interface ShapesInterface {
  [index:number]: Square|Circle|Triangle;
}
