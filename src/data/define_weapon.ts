export enum WeaponType {
    placeholder, // default
    sword, // 轻剑
    broadblade, // 重剑
    rectifier, // 音感仪
    pistols, // 枪
    gauntlets, // 拳套
}

export class WeaponSyntonize {
    addValue(_: Weapon) {
        // Notice: fallthrough in 'switch' in ts is not good,
        // so there should write as chain-invoke,
        // like: w.syntonize2.addValue(w) // in 'syntonize3'
    }
}

export class Weapon {
    name: string = "";
    image: string = "";

    attack_base: number = 0; // 固定攻击力

    attack_percentage: number = 0;

    attributeDMGBonus: number = 0;
    aTypeDMGBonus: number = 0; // 普攻伤害加成
    zTypeDMGBonus: number = 0;
    eTypeDMGBonus: number = 0;
    rTypeDMGBonus: number = 0;
    introTypeDMGBonus: number = 0;
    outroTypeDMGBonus: number = 0;
    echoTypeDMGBonus: number = 0;

    critRate: number = 0;
    critDMG: number = 0;

    syntonize2: WeaponSyntonize = new WeaponSyntonize();
    syntonize3: WeaponSyntonize = new WeaponSyntonize();
    syntonize4: WeaponSyntonize = new WeaponSyntonize();
    syntonize5: WeaponSyntonize = new WeaponSyntonize();
}

export function deepCopyWeapon(w: Weapon): Weapon {
    return {
        name: w.name,
        image: w.image,

        attack_base: w.attack_base,

        attack_percentage: w.attack_percentage,

        attributeDMGBonus: w.attributeDMGBonus,
        aTypeDMGBonus: w.aTypeDMGBonus,
        zTypeDMGBonus: w.zTypeDMGBonus,
        eTypeDMGBonus: w.eTypeDMGBonus,
        rTypeDMGBonus: w.rTypeDMGBonus,
        introTypeDMGBonus: w.introTypeDMGBonus,
        outroTypeDMGBonus: w.outroTypeDMGBonus,
        echoTypeDMGBonus: w.echoTypeDMGBonus,

        critRate: w.critRate,
        critDMG: w.critDMG,

        syntonize2: w.syntonize2,
        syntonize3: w.syntonize3,
        syntonize4: w.syntonize4,
        syntonize5: w.syntonize5,
    }
}
