<template>
  <div class="manual">
    <h3>引言</h3>
    <p>
      社区经常看到有人问声骸，是带44111还是43311、4c带暴击还是暴伤、3c带攻击还是属性伤害……<br/>
      但鸣潮里有很多因素都会影响声骸的选择，例如共鸣链等级、武器效果等；
      这些因素具体到每个人都不尽相同，要针对每个人的情况计算他适合怎么带声骸，那你就算去吧，一算一个不吱声。<br/>
      所以我想做一个工具，只通过一些简单的操作就可以知道对应角色在自己手里应该怎么带声骸。
    </p>

    <h3>功能</h3>
    <p>
      声骸选择工具（以下简称本工具）可以针对不同角色的不同练度，给出伤害期望最高的声骸选择，包括：
      <b>声骸费用选择（4c/3c）</b>和<b>声骸主属性选择（暴击/暴伤）</b>，以供养成参考。
    </p>

    <h3>使用方法</h3>
    <p>
      选择想要计算的<b>角色、共鸣链等级和武器</b>，点击确认按钮开始计算，在结果区查看计算结果。<br/>
      结果区将展示3种伤害期望最高的声骸搭配。
    </p>

    <h3>更新计划</h3>
    <p>
      1. 加入另外两位角色可能提供的增益，包括但不限于：治疗套和共鸣套加的攻击、声骸主动技能、角色延奏、角色加攻击……<br/>
      2. 加入更多的可选项，如暴击率、暴击伤害（当前版本默认声骸副词条只有最小值双暴）<br/>
      3. 支持更多角色、武器<br/>
      4. 支持更多评判维度（当前版本仅支持计算目标角色携带对应属性套装时的伤害期望，拟增加其他套装计算、角色的辅助定位计算等）<br/>
      5. 支持声骸副词条比较，解决诸如“哪些词条算有效词条”、“这个2有效高数值和那个3有效低数值哪个更好”等问题<br/>
      &emsp;这个问题涉及其他伤害乘区，使用者只需要对着工具点来点去，我这个作者要考虑的就多了&ensp;￣へ￣<br/>
      6. 支持武器升阶（当前版本默认武器为1阶）<br/>
      7. 支持技能类型增伤计算（即普攻、重击、E、R）<br/>
      &emsp;当前版本不支持该计算，是因为计算这一项，需要先排一个轴，然后测出排轴中四种伤害类型占比，再结合这个占比，将技能类型增伤折算成属性伤害。<br/>
      &emsp;而在这个过程中，不同的轴、不同的队友、不同的队友声骸、不同的角色共鸣链等级……影响计算结果的因素太多，如果都允许自定义，那操作又太复杂了。<br/>
      &emsp;而我还没有找到一种相对平衡的解决方案。&ensp;┐(ﾟ～ﾟ)┌
    </p>

    <h3>说明</h3>
    <p>
      1. 暴击率除了影响暴击伤害期望，还涉及到手感问题，而这是一个主观的概念，因人而异。<br/>
      &emsp;有的人能接受50%暴击率硬凹；有的人觉得95%的暴击率还差点意思。<br/>
      &emsp;本工具仅能计算暴击伤害期望，无法反映出手感问题。对此，我会在每一套搭配中注明暴击率，请在参考搭配前自行确认能否接受该暴击率的手感。<br/>
      2. 上一节“更新计划”实际上更像是补丁排序，就是列举出工具还有哪些不完善的地方……<br/>
      &emsp;说真的，做的越多，越发觉没做的越多。有时候一个人写代码挺无助的。&ensp;(；′⌒`)<br/>
      &emsp;需要打的补丁越多，我越怀疑这个东西能有多大用……<br/>
      &emsp;可能最后这个工具只是对纯萌新有点用处吧：就是在你啥也不懂的时候，可以按照工具给出的前几种结果混合培养，先出哪一套算哪一套。&ensp;ヽ(ー_ー)ノ<br/>
      3. 计算结果仅供参考。
    </p>
  </div>
</template>

<style lang="less" scoped>
.manual {
  height: calc(90vh - 10rem);
  overflow-y: auto;
}
</style>
<script setup lang="ts">
</script>
