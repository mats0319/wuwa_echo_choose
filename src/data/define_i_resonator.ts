import { mathCeil } from "@/ts/utils.ts";

export interface IResonator {
    attack: number;
    attack_base: number;
    attack_percentage: number;

    attributeDMGBonus: number;

    critRate: number;
    critDMG: number;

    dmgExpectation?: number; // use for order
    echoAssembleNumber?: number; // use for display
}

export function deepCopyIResonator(ir: IResonator): IResonator {
    return <IResonator>{
        attack: ir.attack,
        attack_base: ir.attack_base,
        attack_percentage: ir.attack_percentage,
        attributeDMGBonus: ir.attributeDMGBonus,
        critRate: ir.critRate,
        critDMG: ir.critDMG,
    };
}

export function formatIResonator(ir: IResonator) {
    ir.attack = mathCeil(ir.attack);
    ir.attack_base = mathCeil(ir.attack_base);
    ir.attack_percentage = mathCeil(ir.attack_percentage, 3);
    ir.attributeDMGBonus = mathCeil(ir.attributeDMGBonus, 3);
    ir.critRate = mathCeil(ir.critRate, 3);
    ir.critDMG = mathCeil(ir.critDMG, 3);
}

export function addAttackBase(ir: IResonator, num: number) {
    ir.attack_base += num;
}

export function addAttackPercentage(ir: IResonator, num: number) {
    ir.attack_percentage += num;
}

export function addAttributeDMGBonus(ir: IResonator, num: number) {
    ir.attributeDMGBonus += num;
}

export function addCritRate(ir: IResonator, num: number) {
    ir.critRate += num;
}

export function addCritDMG(ir: IResonator, num: number) {
    ir.critDMG += num;
}
