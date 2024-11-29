import {
    addAttackBase,
    addAttackPercentage,
    addAttributeDMGBonus, addCritDMG,
    addCritRate,
    CalcRes
} from "@/data/define_calc_res.ts";
import { deepCopyResonator, Resonator } from "@/data/define_resonator.ts";
import { deepCopyWeapon, Weapon } from "@/data/define_weapon.ts";

// NewIResonatorForCalc generate a new 'IResonator' for calc
export function NewIResonatorForCalc(r: Resonator, resonanceChain: number, w: Weapon): CalcRes {
    // deep copy, prevent pollution data
    let resonatorCopy = deepCopyResonator(r);
    let weaponCopy = deepCopyWeapon(w);

    applyResonanceChain(resonatorCopy, resonanceChain);

    applyWeapon(resonatorCopy, weaponCopy);

    return <CalcRes>{
        attack: 0,
        attack_base: resonatorCopy.attack_base,
        attack_percentage: resonatorCopy.attack_percentage,
        attributeDMGBonus: resonatorCopy.attributeDMGBonus,
        critRate: resonatorCopy.critRate,
        critDMG: resonatorCopy.critDMG,
    };
}

function applyResonanceChain(r: Resonator, resonanceChain: number) {
    switch (resonanceChain) {
        // fallthrough cases in switch is not good in ts.
        // so still use chain-call in 'addValue'
        case 6:
            r.resonanceChain6.addValue(r);
            break;
        case 5:
            r.resonanceChain5.addValue(r);
            break;
        case 4:
            r.resonanceChain4.addValue(r);
            break;
        case 3:
            r.resonanceChain3.addValue(r);
            break;
        case 2:
            r.resonanceChain2.addValue(r);
            break;
        case 1:
            r.resonanceChain1.addValue(r);
            break;
        default:
            break;
    }
}

function applyWeapon(ir: CalcRes, w: Weapon) {
    addAttackBase(ir, w.attack_base)
    addAttackPercentage(ir, w.attack_percentage);
    addAttributeDMGBonus(ir, w.attributeDMGBonus);
    addCritRate(ir, w.critRate);
    addCritDMG(ir, w.critDMG);
}
