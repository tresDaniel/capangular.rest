export interface Upgrade {
    name: string;
    value: string;
}

export interface SkillTalent {
    name: string;
    unlock: string;
    description: string;
    upgrades: Upgrade[];
}

export interface PassiveTalent {
    name: string;
    unlock: string;
    description: string;
}

export interface Constellation {
    name: string;
    unlock: string;
    description: string;
}

export interface Character {
    name: string;
    title: string;
    vision: string;
    weapon: string;
    gender: string;
    nation: string;
    affiliation: string;
    specialDish: string;
    rarity: number;
    constellation: string;
    birthday: string;
    description: string;
    skillTalents: SkillTalent[];
    passiveTalents: PassiveTalent[];
    constellations: Constellation[];
}