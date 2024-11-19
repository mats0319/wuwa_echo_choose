import { IResonator } from "@/data/define_i_resonator.ts";
import { WeaponType } from "@/data/define_weapon.ts";

export class resonanceChain {
    description: string = "";

    addValue(_: Resonator) {
    }
}

export class Resonator implements IResonator {
    name: string = "";
    avatar: string = "";
    useWeapon: WeaponType = WeaponType.placeholder;

    attack: number = 0;
    attack_base: number = 0;
    attack_percentage: number = 0;

    attributeDMGBonus: number = 0; // 属性伤害

    critRate: number = 0;
    critDMG: number = 0;

    resonanceChain1: resonanceChain = {
        description: "",
        addValue(_: Resonator) {
            // c.addAttack(0.25);
        }
    };
    resonanceChain2: resonanceChain = {
        description: "",
        addValue(_: Resonator) {
            // c.addAttack(0.25);
            // c.gongminglian1.addValue(c)
        }
    };
    resonanceChain3: resonanceChain = {
        description: "",
        addValue(_: Resonator) {
            // c.addAttack(0.25);
            // c.gongminglian2.addValue(c)
        }
    };
    resonanceChain4: resonanceChain = {
        description: "",
        addValue(_: Resonator) {
            // c.addAttack(0.25);
            // c.gongminglian3.addValue(c)
        }
    };
    resonanceChain5: resonanceChain = {
        description: "",
        addValue(_: Resonator) {
            // c.addAttack(0.25);
            // c.gongminglian4.addValue(c)
        }
    };
    resonanceChain6: resonanceChain = {
        description: "",
        addValue(_: Resonator) {
            // c.addAttack(0.25);
            // c.gongminglian5.addValue(c)
        }
    };
}

export function deepCopyResonator(r: Resonator): Resonator {
    return {
        name: r.name,
        avatar: r.avatar,
        useWeapon: r.useWeapon,
        attack: r.attack,
        attack_base: r.attack_base,
        attack_percentage: r.attack_percentage,
        attributeDMGBonus: r.attributeDMGBonus,
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
