import { WeaponType } from "@/data/define_weapon.ts";

export class ResonanceChain {
    description: string = "";

    addValue(_: Resonator) {
        // Notice: fallthrough in 'switch' in ts is not good,
        // so there should write as chain-invoke,
        // like: c.resonanceChain1.addValue(c) // in 'resonanceChain2'
    }
}

export class Resonator {
    name: string = "";
    avatar: string = "";
    weaponType: WeaponType = WeaponType.placeholder;
    skills: string = ""; // 纳入统计的技能
    description: string = ""; // 描述为什么这样统计技能

    attack_base: number = 0;
    attack_percentage: number = 0; // skill tree

    // 所有技能类型伤害倍率保留4位小数，向下取整
    aTypeDMGRate: number = 0; // 普攻伤害倍率
    zTypeDMGRate: number = 0;
    eTypeDMGRate: number = 0;
    rTypeDMGRate: number = 0;
    introTypeDMGRate: number = 0; // 变奏
    outroTypeDMGRate: number = 0; // 延奏
    echoTypeDMGRate: number = 0; // 声骸主动

    aTypeExtraDMGRate: number = 0;
    zTypeExtraDMGRate: number = 0;
    eTypeExtraDMGRate: number = 0;
    rTypeExtraDMGRate: number = 0;
    introTypeExtraDMGRate: number = 0;
    outroTypeExtraDMGRate: number = 0;
    echoTypeExtraDMGRate: number = 0;

    attributeDMGBonus: number = 0; // skill tree
    aTypeDMGBonus: number = 0; // 普攻伤害加成
    zTypeDMGBonus: number = 0;
    eTypeDMGBonus: number = 0;
    rTypeDMGBonus: number = 0;
    introTypeDMGBonus: number = 0;
    outroTypeDMGBonus: number = 0;
    echoTypeDMGBonus: number = 0;

    critRate: number = 0; // skill tree
    critDMG: number = 0; // skill tree

    resonanceChain1: ResonanceChain = new ResonanceChain();
    resonanceChain2: ResonanceChain = new ResonanceChain();
    resonanceChain3: ResonanceChain = new ResonanceChain();
    resonanceChain4: ResonanceChain = new ResonanceChain();
    resonanceChain5: ResonanceChain = new ResonanceChain();
    resonanceChain6: ResonanceChain = new ResonanceChain();
}

export function deepCopyResonator(r: Resonator): Resonator {
    return {
        name: r.name,
        avatar: r.avatar,
        weaponType: r.weaponType,
        skills: r.skills,
        description: r.description,

        attack_base: r.attack_base,
        attack_percentage: r.attack_percentage,

        aTypeDMGRate: r.aTypeDMGRate,
        zTypeDMGRate: r.zTypeDMGRate,
        eTypeDMGRate: r.eTypeDMGRate,
        rTypeDMGRate: r.rTypeDMGRate,
        introTypeDMGRate: r.introTypeDMGRate,
        outroTypeDMGRate: r.outroTypeDMGRate,
        echoTypeDMGRate: r.echoTypeDMGRate,

        // 技能额外倍率，通常用于单个技能伤害提升的情况
        aTypeExtraDMGRate: r.aTypeExtraDMGRate,
        zTypeExtraDMGRate: r.zTypeExtraDMGRate,
        eTypeExtraDMGRate: r.eTypeExtraDMGRate,
        rTypeExtraDMGRate: r.rTypeExtraDMGRate,
        introTypeExtraDMGRate: r.introTypeExtraDMGRate,
        outroTypeExtraDMGRate: r.outroTypeExtraDMGRate,
        echoTypeExtraDMGRate: r.echoTypeExtraDMGRate,

        attributeDMGBonus: r.attributeDMGBonus,
        aTypeDMGBonus: r.aTypeDMGBonus,
        zTypeDMGBonus: r.zTypeDMGBonus,
        eTypeDMGBonus: r.eTypeDMGBonus,
        rTypeDMGBonus: r.rTypeDMGBonus,
        introTypeDMGBonus: r.introTypeDMGBonus,
        outroTypeDMGBonus: r.outroTypeDMGBonus,
        echoTypeDMGBonus: r.echoTypeDMGBonus,

        critRate: r.critRate,
        critDMG: r.critDMG,

        resonanceChain1: r.resonanceChain1,
        resonanceChain2: r.resonanceChain2,
        resonanceChain3: r.resonanceChain3,
        resonanceChain4: r.resonanceChain4,
        resonanceChain5: r.resonanceChain5,
        resonanceChain6: r.resonanceChain6,
    }
}
