<template>
  <div>
    > 参考视频：BV1VZ42147px（b站）<br/><br/>
    根据金铃子攻略组公布的伤害公式（详见参考视频），总伤害由8个乘区构成，每个乘区内又包含多个词条。其中各乘区之间乘算、乘区内加算。<br/><br/>
    &emsp;伤害公式乘区：<br/><br/>
    &emsp;1. 基数区：攻击力，包含白值和黄值。<br/>
    &emsp;&emsp;1. 白值：角色攻击力+武器攻击力<br/>
    &emsp;&emsp;2. 黄值：百分比攻击力和固定数值攻击力，其中百分比攻击力是基于白值的百分比<br/>
    &emsp;2. 倍率乘区：技能倍率，包括技能基础倍率和倍率提升（多见于共鸣链）<br/>
    &emsp;3. 伤害加成乘区：延奏<br/>
    &emsp;4. 伤害加深区：包含属性伤害加成和技能伤害加成<br/>
    &emsp;&emsp;1. 属性伤害加成：就是面板上的6种属性伤害加成，取角色属性对应的那一条<br/>
    &emsp;&emsp;2. 技能伤害加成：分为**普攻、重击、E、R**，也在面板上有所体现<br/>
    &emsp;5. 暴击乘区：暴击率和暴击伤害，鸣潮的面板暴击伤害就是暴击后的伤害<br/>
    &emsp;6. 防御乘区：计算公式：（100+L1)/(199+L1+L2)。L1：玩家等级，L2：怪物等级<br/>
    &emsp;7. 抗性乘区：全属性抗性10%，对应属性抗性特化：大世界40%、深塔60%、全息80%<br/>
    &emsp;8. 其他：例如无音区的特殊buff<br/><br/>
    本工具仅涉及其中1、4、5，3个乘区（顺便说一下，<b>鸣钟之龟</b>和<b>无常凶鹭</b>的增伤在<b>4</b>区）。<br/><br/>
    本工具将根据用户选择的角色、共鸣链和武器，统计角色的：<br/>
    1. 攻击力：包括白值和黄值折算成的百分比<br/>
    2. 伤害加深乘区：角色技能树<br/>
    3. 暴击乘区：默认每个声骸的副词条都<b>只有</b>最低数值的暴击暴伤<br/><br/>
    加上声骸套装效果（不含主动技能效果）。<br/><br/>
    最后计算全部9种情况的最终伤害期望（44111 3种，43311 6种，其中4c不考虑主属性攻击的情况），<br/>
    按照期望值从高到低排序，默认展示前3种，用户可以手动查看全部情况，以及每一种情况的详细结果。
  </div>
</template>

<style lang="less" scoped>
</style>
<script setup lang="ts">
</script>
