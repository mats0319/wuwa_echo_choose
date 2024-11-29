<template>
  <div class="echo-choose">
    <el-form label-width="20%">
      <el-form-item label="共鸣者">
        <el-select v-model="resonator" value-key="name" placeholder="请选择共鸣者" @change="onResonatorChanged"
                   @clear="onResonatorChanged" clearable>
          <el-option
            v-for="(item, index) in resonatorList"
            :key="index"
            :label="item.name"
            :value="item"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="共鸣链等级">
        <el-select v-model="resonanceChain" placeholder="请选择共鸣链等级">
          <el-option
            v-for="item in 7"
            :label="item-1"
            :value="item-1"
          />
        </el-select>
      </el-form-item>

      <el-form-item label="武器">
        <el-select v-model="weapon" value-key="name" placeholder="请选择武器" clearable>
          <el-option
            v-for="(item, index) in weaponForSelect"
            :key="index"
            :label="item.name"
            :value="item"
          />
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button plain type="info" @click="startCalc">开始计算</el-button>
        <el-button plain type="info" @click="showAllRes">显示全部结果</el-button>
      </el-form-item>
    </el-form>

    <el-divider/>

    <el-table v-show=showRes :data="calcResForShow" max-height="50vh" stripe highlight-current-row>
      <el-table-column type="expand">
        <template #default="item">
          <el-descriptions title="详细信息" :column="1" size="small" border>
            <el-descriptions-item label="攻击力">
              {{ showATK(item.row.attack, item.row.attack_base, item.row.attack_percentage) }}
            </el-descriptions-item>
            <el-descriptions-item label="属性伤害">
              {{ showPercentageValue(item.row.attributeDMGBonus) }}
            </el-descriptions-item>
            <el-descriptions-item label="暴击率">{{ showPercentageValue(item.row.critRate) }}</el-descriptions-item>
            <el-descriptions-item label="暴击伤害">{{ showPercentageValue(item.row.critDMG) }}</el-descriptions-item>
            <el-descriptions-item label="总伤害期望">
              {{ item.row.dmgExpectation ? item.row.dmgExpectation : "NaN" }}
            </el-descriptions-item>
            <el-descriptions-item label="声骸选择">
              {{ showEchoAssemble(item.row.echoAssembleNumber ? item.row.echoAssembleNumber : 0) }}
            </el-descriptions-item>
          </el-descriptions>
        </template>
      </el-table-column>

      <el-table-column label="总伤害期望" prop="dmgExpectation" min-width="2"></el-table-column>

      <el-table-column label="暴击率" min-width="2">
        <template #default="item">{{ showPercentageValue(item.row.critRate) }}</template>
      </el-table-column>

      <el-table-column label="声骸选择" min-width="3" show-overflow-tooltip>
        <template #default="item">
          {{ showEchoAssemble(item.row.echoAssembleNumber ? item.row.echoAssembleNumber : 0) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { resonatorList } from "@/data/resonators.ts";
import { broadblade } from "@/data/weapons/weapon_broadblade.ts";
import { calcDMGExpectation, showEchoAssemble } from "@/ts/echo_assemble.ts";
import { mathCeil } from "@/ts/utils.ts";
import { Resonator } from "@/data/define_resonator.ts";
import { Weapon, WeaponType } from "@/data/define_weapon.ts";
import { CalcRes } from "@/data/define_calc_res.ts";
import { log } from "@/ts/log.ts";
import { NewIResonatorForCalc } from "@/ts/calc.ts";

let resonator = ref<Resonator>();
let resonanceChain = ref<number>(0);
let weaponForSelect = ref<Array<Weapon>>();
let weapon = ref<Weapon>();

let showRes = ref<boolean>(false);
let calcRes = ref<Array<CalcRes>>();
let calcResForShow = ref<Array<CalcRes>>();

function startCalc(): void {
    if (!resonator.value || resonator.value.name.length === 0) {
        log.fail("invalid resonator", resonator.value);
        return;
    }

    let resonatorForCalc = NewIResonatorForCalc(resonator.value as Resonator, resonanceChain.value, weapon.value as Weapon);
    calcRes.value = calcDMGExpectation(resonatorForCalc);
    calcResForShow.value = calcRes.value.slice(0, 3);

    showRes.value = true;
    log.success("calc finish");
}

function showAllRes(): void {
    calcResForShow.value = calcRes.value;
}

function onResonatorChanged(value: Resonator): void {
    showRes.value = false;

    resonanceChain.value = 0;
    weapon.value = new Weapon();

    if (!!value) {
        switch (value.weaponType) {
            case WeaponType.broadblade:
                weaponForSelect.value = broadblade;
                break;
            default:
                break;
        }
    } else {
        weaponForSelect.value = new Array<Weapon>();
    }
}

function showATK(atk: number, atk_base: number, atk_percentage: number): string {
    return atk.toString() + " ( " + atk_base.toString() + "+" + mathCeil(atk_base * atk_percentage) + " ) ";
}

function showPercentageValue(v: number): string {
    return (v * 100).toString() + "%";
}
</script>

<style lang="less" scoped>
.echo-choose {
  .el-form-item {
    .el-select {
      width: 40%;
    }
  }
}
</style>
