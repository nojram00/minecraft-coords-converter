import type ICoordinates from "./coordinates";

export default interface ICoordConverter {
    current: ICoordinates;
    otn: (overworldCoord : ICoordinates) => void;
    nto: (netherCoord: ICoordinates) => void;
}