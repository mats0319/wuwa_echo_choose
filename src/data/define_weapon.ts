export enum WeaponType {
    placeholder, // default
    sword, // 轻剑
    broadblade, // 重剑
    rectifier, // 音感仪
    pistols, // 枪
    gauntlets, // 拳套
}

export class Weapon {
    name: string = "";
    image: string = "";

    attack: number = 0;

    attack_percentage: number = 0;
    attributeDMGBonus: number = 0;
    critRate: number = 0;
    critDMG: number = 0;
}

export function deepCopyWeapon(w: Weapon): Weapon {
    return {
        name: w.name,
        image: w.image,
        attack: w.attack,
        attack_percentage: w.attack_percentage,
        attributeDMGBonus: w.attributeDMGBonus,
        critRate: w.critRate,
        critDMG: w.critDMG,
    }
}
