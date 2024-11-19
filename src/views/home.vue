<template>
  <div class="home-top">
    <div class="ht-title" @click="link('home')">
      鸣潮声骸选择工具
    </div>

    <div class="ht-code">
      <a href="https://github.com/mats0319" target="_blank">Github</a>
    </div>
  </div>

  <div class="home-content">
    <div class="hc-left">
      <p class="hcl-item" @click="link('manual')">说明</p>
      <p class="hcl-item" @click="link('echoChoose')">声骸选择</p>
      <p class="hcl-item-placeholder"></p>
      <p class="hcl-item" @click="link('formula')">计算公式</p>
    </div>

    <el-divider class="hc-divider" direction="vertical" />

    <div class="hc-right">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import { log } from "@/ts/log.ts";

const router = useRouter();

function link(name: string) {
    try {
        router.push({ name: name });
    } catch (e) {
        log.fail("router link failed", e);
    }
}
</script>

<style lang="less" scoped>
.home-top {
  display: flex;
  height: 10rem;
  background-color: lightgray;
  text-align: center;

  .ht-title {
    width: 20vw;
    margin-left: 15vw;
    line-height: 10rem;
    font-size: 3rem;
  }
  .ht-title:hover {
    cursor: pointer;
  }

  .ht-code {
    width: 15vw;
    margin-left: 45vw;
    line-height: 10rem;
    font-size: 2.5rem;

    a {
      color: black;
      text-decoration-line: none;
    }
  }
}

.home-content {
  display: flex;
  height: calc(100vh - 10rem);

  .hc-left {
    width: 14vw;
    padding: 5vh 3vw;

    .hcl-item, .hcl-item-placeholder {
      padding-left: 1vw;
      height: 4rem;
      line-height: 4rem;
      font-size: 2rem;
    }

    .hcl-item:hover {
      cursor: pointer;
      background-color: aliceblue;
    }
  }

  .hc-divider {
    height: inherit;
  }

  .hc-right {
    width: 70vw;
    padding: 5vh 3vw;

    font-size: 2rem;
  }
}
</style>
