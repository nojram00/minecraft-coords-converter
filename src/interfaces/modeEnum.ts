export type Mode = 'otn' | 'nto'

export interface IMode {
    current_mode: Mode;

    change: (mode: Mode) => void;
};

