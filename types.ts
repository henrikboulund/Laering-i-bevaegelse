
export interface Parameter {
    title: string;
    description: string;
}

export interface DieItem {
    emoji: string;
    title: string;
    description: string;
    example: string;
}

export interface DiceResult {
    didactic: DieItem;
    digital: DieItem;
    analog: DieItem;
}

export type DiceCategory = 'didactic' | 'digital' | 'analog';
