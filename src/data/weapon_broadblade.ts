// 重剑
import { Weapon } from "@/data/define_weapon.ts";

export { broadblade };

const broadblade: Array<Weapon> = new Array<Weapon>({
    name: "时和岁稔",
    image: "shihesuiren.jpg",
    attack: 587,
    attack_percentage: 0,
    attributeDMGBonus: 0.12, // 属性伤害12%，共鸣技能伤害48%
    critRate: 0.243,
    critDMG: 0,
});
