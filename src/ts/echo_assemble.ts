// 声骸组合，共9种
// 1. 44111，暴击*2                       4c暴击：22%
// 2. 44111，暴击、暴伤                    4c暴伤：44%
// 3. 44111，暴伤*2
// 4. 43311，暴击、属性伤害*2               3c属性伤害：30%
// 5. 43311，暴击、属性伤害、攻击            3c攻击：30%
// 6. 43311，暴击、攻击*2
// 7. 43311，暴伤、属性伤害*2               1c攻击：18%
// 8. 43311，暴伤、属性伤害、攻击
// 9. 43311，暴伤、攻击*2
// 4c固定攻击150,3c固定攻击100,1c固定属性为生命
import { mathCeil } from "@/ts/utils.ts";
import {
    addAttackPercentage, addAttributeDMGBonus,
    addCritDMG,
    addCritRate,
    deepCopyIResonator, formatIResonator,
    IResonator
} from "@/data/define_i_resonator.ts";

// calcDMGExpectation calc dmg expectation in all situation, according to given 'IResonator', sort res
export function calcDMGExpectation(ir: IResonator): Array<IResonator> {
    let res: Array<IResonator> = new Array<IResonator>(9);

    for (let i = 0; i < 9; i++) {
        let resTemp = applyEchoAssemble(deepCopyIResonator(ir), i + 1);

        // default crit.rate and crit.dmg
        resTemp.critRate += 0.063 * 5;
        resTemp.critDMG += 0.126 * 5;

        calcATKAndDMGExpectation(resTemp);
        formatIResonator(resTemp);

        res[i] = resTemp;
    }

    return res.sort(function (a, b) {
        return b.dmgExpectation! - a.dmgExpectation!
    });
}

// applyEchoAssemble 应用n号声骸组合
function applyEchoAssemble(ir: IResonator, n: number): IResonator {
    ir.echoAssembleNumber = n;
    switch (n) {
        case 1:
            addAttackPercentage(ir, mathCeil((150 + 150) / ir.attack_base, 3)); // fixed ATK
            addAttackPercentage(ir, 0.18 * 3)
            addCritRate(ir, 0.22 + 0.22);
            break;
        case 2:
            addAttackPercentage(ir, mathCeil((150 + 150) / ir.attack_base, 3)); // fixed ATK
            addAttackPercentage(ir, 0.18 * 3)
            addCritRate(ir, 0.22);
            addCritDMG(ir, 0.44);
            break;
        case 3:
            addAttackPercentage(ir, mathCeil((150 + 150) / ir.attack_base, 3)); // fixed ATK
            addAttackPercentage(ir, 0.18 * 3)
            addCritDMG(ir, 0.44 + 0.44);
            break;
        case 4:
            addAttackPercentage(ir, mathCeil((150 + 100 + 100) / ir.attack_base, 3)); // fixed ATK
            addAttackPercentage(ir, 0.18 + 0.18);
            addCritRate(ir, 0.22);
            addAttributeDMGBonus(ir, 0.3 * 2);
            break;
        case 5:
            addAttackPercentage(ir, mathCeil((150 + 100 + 100) / ir.attack_base, 3)); // fixed ATK
            addAttackPercentage(ir, 0.18 + 0.18);
            addCritRate(ir, 0.22);
            addAttributeDMGBonus(ir, 0.3);
            addAttackPercentage(ir, 0.3);
            break;
        case 6:
            addAttackPercentage(ir, mathCeil((150 + 100 + 100) / ir.attack_base, 3)); // fixed ATK
            addAttackPercentage(ir, 0.18 + 0.18);
            addCritRate(ir, 0.22);
            addAttackPercentage(ir, 0.3 + 0.3);
            break;
        case 7:
            addAttackPercentage(ir, mathCeil((150 + 100 + 100) / ir.attack_base, 3)); // fixed ATK
            addAttackPercentage(ir, 0.18 + 0.18);
            addCritDMG(ir, 0.44);
            addAttributeDMGBonus(ir, 0.3 + 0.3);
            break;
        case 8:
            addAttackPercentage(ir, mathCeil((150 + 100 + 100) / ir.attack_base, 3)); // fixed ATK
            addAttackPercentage(ir, 0.18 + 0.18);
            addCritDMG(ir, 0.44);
            addAttributeDMGBonus(ir, 0.3);
            addAttackPercentage(ir, 0.3);
            break;
        case 9:
            addAttackPercentage(ir, mathCeil((150 + 100 + 100) / ir.attack_base, 3)); // fixed ATK
            addAttackPercentage(ir, 0.18 + 0.18);
            addCritDMG(ir, 0.44);
            addAttackPercentage(ir, 0.3 + 0.3);
            break;
        default:
            break;
    }

    return ir;
}

function calcATKAndDMGExpectation(ir: IResonator) {
    ir.attack = ir.attack_base * (1 + ir.attack_percentage);
    // 暴击乘区计算公式为：基础伤害+暴击增伤期望，暴击增伤期望=暴击率*暴击增伤
    ir.dmgExpectation = mathCeil(ir.attack * ir.attributeDMGBonus * (1 + ir.critRate * (ir.critDMG - 1)));
}

// showEchoAssemble 根据声骸组合编号，可视化展示声骸选择
export function showEchoAssemble(n: number): string {
    let res: string = "";
    switch (n) {
        case 1:
            res = "44111，4c 暴击*2";
            break;
        case 2:
            res = "44111，4c 暴击、暴伤"
            break;
        case 3:
            res = "44111，4c 暴伤*2"
            break;
        case 4:
            res = "43311，4c 暴击、3c 属性伤害*2"
            break;
        case 5:
            res = "43311，4c 暴击、3c 属性伤害、攻击"
            break;
        case 6:
            res = "43311，4c 暴击、3c 攻击*2"
            break;
        case 7:
            res = "43311，4c 暴伤、3c 属性伤害*2"
            break;
        case 8:
            res = "43311，4c 暴伤、3c 属性伤害、攻击"
            break;
        case 9:
            res = "43311，4c 暴伤、3c 攻击*2"
            break;
        default:
            res = "involid n: "+n.toString();
            break;
    }

    return res;
}
