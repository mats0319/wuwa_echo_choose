import { Resonator } from "@/data/define_resonator.ts";
import { WeaponType } from "@/data/define_weapon.ts";
import { addAttackPercentage, addAttributeDMGBonus } from "@/data/define_i_resonator.ts";

export const jinxi: Resonator = {
    name: "今汐",
    avatar: "jinxi.jpg",
    useWeapon: WeaponType.broadblade,

    attack: 0, // set after calculate
    attack_base: 412,
    attack_percentage: 0.12,

    attributeDMGBonus: 0,

    critRate: 0.13, // 0.05+0.08
    critDMG: 1.5,

    resonanceChain1: {
        description: "",
        addValue(_: Resonator) {
        }
    },
    resonanceChain2: {
        description: "",
        addValue(r: Resonator) {
            r.resonanceChain1.addValue(r);
        }
    },
    resonanceChain3: {
        description: "3共鸣链：变奏入场，+25%攻击，可叠加2层。",
        addValue(r: Resonator) {
            addAttackPercentage(r, 0.5);
            r.resonanceChain2.addValue(r);
        }
    },
    resonanceChain4: {
        description: "4共鸣链：E4或R，+20%全属性伤害。",
        addValue(r: Resonator) {
            addAttributeDMGBonus(r, 0.2);
            r.resonanceChain3.addValue(r);
        }
    },
    resonanceChain5: {
        description: "",
        addValue(r: Resonator) {
            r.resonanceChain4.addValue(r);
        }
    },
    resonanceChain6: {
        description: "",
        addValue(r: Resonator) {
            r.resonanceChain5.addValue(r);
        }
    },
}
