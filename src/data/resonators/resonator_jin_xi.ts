import { Resonator } from "@/data/define_resonator.ts";
import { WeaponType } from "@/data/define_weapon.ts";

export const jinxi: Resonator = {
    name: "今汐",
    avatar: "jinxi.jpg",
    weaponType: WeaponType.broadblade,
    skills: "变奏，E2，Q，E3，强化4A，E4，R",
    description: "1. 今汐变奏入场可以吃到4链加攻击和5光套增伤，所以忽略常态4A和E1。<br/>" +
        "2. 角的dot伤害被视为角色共鸣技能伤害，其倍率统计在角色共鸣技能中。",

    attack_base: 412,
    attack_percentage: 0.12,

    aTypeDMGRate: 0,
    zTypeDMGRate: 0,
    eTypeDMGRate: (0.0987*4+0.2959*4+0.3945)
        +(0.1600*15)
        +(1.0076+0.7557*2+2.5190)
        +(0.8862+0.7797+0.2599+0.2599+0.9944+0.6630+0.1867*6+0.7467)
        +(0.1989*6+3.4792+0.4454*50),
    rTypeDMGRate: (4.9981+11.6622),
    introTypeDMGRate: (1.5905*1.5),
    outroTypeDMGRate: 0,
    echoTypeDMGRate: (0.4864+0.1946*5+0.4864*2),

    aTypeExtraDMGRate: 0,
    zTypeExtraDMGRate: 0,
    eTypeExtraDMGRate: 0,
    rTypeExtraDMGRate: 0,
    introTypeExtraDMGRate: 0,
    outroTypeExtraDMGRate: 0,
    echoTypeExtraDMGRate: 0,

    attributeDMGBonus: 0.2, // 固有技能1
    aTypeDMGBonus: 0,
    zTypeDMGBonus: 0,
    eTypeDMGBonus: 0,
    rTypeDMGBonus: 0,
    introTypeDMGBonus: 0,
    outroTypeDMGBonus: 0,
    echoTypeDMGBonus: 0,

    critRate: 0.05+0.08,
    critDMG: 1.5,

    resonanceChain1: {
        description: "1链：E3和强化4A增加E4伤害，每层+20%，可叠加4层。",
        addValue(r: Resonator) {
            r.eTypeExtraDMGRate += (0.1989*6+3.4792+0.4454*50)*0.8
        }
    },
    resonanceChain2: {
        description: "2链：脱战4s满韶光。",
        addValue(r: Resonator) {
            r.resonanceChain1.addValue(r);
        }
    },
    resonanceChain3: {
        description: "3链：变奏入场，+25%攻击，可叠加2层。",
        addValue(r: Resonator) {
            r.attack_percentage += 0.5;
            r.resonanceChain2.addValue(r);
        }
    },
    resonanceChain4: {
        description: "4链：释放E4或R，+20%全属性伤害，持续20s。",
        addValue(r: Resonator) {
            r.attributeDMGBonus += 0.2;
            r.resonanceChain3.addValue(r);
        }
    },
    resonanceChain5: {
        description: "5链：R倍率提升120%。",
        addValue(r: Resonator) {
            r.rTypeDMGRate += (4.9981+11.6622)*1.2;
            r.resonanceChain4.addValue(r);
        }
    },
    resonanceChain6: {
        description: "6链：E4整体倍率提升45%。",
        addValue(r: Resonator) {
            r.eTypeDMGRate += (0.1989*6+3.4792+0.4454*50)*0.45;
            r.resonanceChain5.addValue(r);
        }
    },
}
