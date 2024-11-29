// 重剑
import { Weapon } from "@/data/define_weapon.ts";

export { broadblade };

const broadblade: Array<Weapon> = new Array<Weapon>({
    name: "时和岁稔",
    image: "shihesuiren.jpg",

    attack_base: 587,

    attack_percentage: 0,

    attributeDMGBonus: 0.12,
    aTypeDMGBonus: 0,
    zTypeDMGBonus: 0,
    eTypeDMGBonus: 0.48,
    rTypeDMGBonus: 0,
    introTypeDMGBonus: 0,
    outroTypeDMGBonus: 0,
    echoTypeDMGBonus: 0,

    critRate: 0.243,
    critDMG: 0,

    syntonize2: {
        addValue(w: Weapon) {
            w.attack_percentage += 0.03;
            w.attributeDMGBonus += 0.12;
        }
    },

    syntonize3: {
        addValue(w: Weapon) {
            w.attack_percentage += 0.03;
            w.attributeDMGBonus += 0.12;
            w.syntonize2.addValue(w);
        }
    },

    syntonize4: {
        addValue(w: Weapon) {
            w.attack_percentage += 0.03;
            w.attributeDMGBonus += 0.12;
            w.syntonize3.addValue(w);
        }
    },

    syntonize5: {
        addValue(w: Weapon) {
            w.attack_percentage += 0.03;
            w.attributeDMGBonus += 0.12;
            w.syntonize4.addValue(w);
        }
    },
});
