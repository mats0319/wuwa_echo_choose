import { mathCeil, mathFloor } from "@/ts/utils.ts";

export class CalcRes {
    dmgExpectation: number = 0; // use for order
    echoAssembleNumber: number = 0; // use for show

    attack: number = 0;
    attack_base: number = 0;
    attack_percentage: number = 0;

    attributeDMGBonus: number = 0;

    critRate: number = 0;
    critDMG: number = 0;
}

export function deepCopyCalcRes(cr: CalcRes): CalcRes {
    return <CalcRes>{
        dmgExpectation: cr.dmgExpectation,
        echoAssembleNumber: cr.echoAssembleNumber,

        attack: cr.attack,
        attack_base: cr.attack_base,
        attack_percentage: cr.attack_percentage,

        attributeDMGBonus: cr.attributeDMGBonus,

        critRate: cr.critRate,
        critDMG: cr.critDMG,
    };
}

export function formatCalcRes(cr: CalcRes) {
    cr.dmgExpectation = mathCeil(cr.dmgExpectation);
    // cr.echoAssembleNumber = cr.echoAssembleNumber; // format when show

    cr.attack = mathFloor(cr.attack);
    cr.attack_base = mathFloor(cr.attack_base);
    cr.attack_percentage = mathFloor(cr.attack_percentage, 3);

    cr.attributeDMGBonus = mathFloor(cr.attributeDMGBonus, 3);

    cr.critRate = mathFloor(cr.critRate, 3);
    cr.critDMG = mathFloor(cr.critDMG, 3);
}

export function calcAttack(cr: CalcRes) {
    cr.attack = cr.attack_base * (1 + cr.attack_percentage);
}

export function addAttackBase(cr: CalcRes, num: number) {
    cr.attack_base += num;
}

export function addAttackPercentage(cr: CalcRes, num: number) {
    cr.attack_percentage += num;
}

export function addAttributeDMGBonus(cr: CalcRes, num: number) {
    cr.attributeDMGBonus += num;
}

export function addCritRate(cr: CalcRes, num: number) {
    cr.critRate += num;
}

export function addCritDMG(cr: CalcRes, num: number) {
    cr.critDMG += num;
}
