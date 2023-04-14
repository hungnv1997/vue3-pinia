<template>
  <div>
    Home........

    <button @click="handleClick">{{ store.count }}</button>
    <button @click="handleClickTest">test</button>
  </div>
</template>

<script setup>
import { useCounterStore } from "../store/counter";
const store = useCounterStore();
const handleClick = () => {
  store.increment();
};
const handleClickTest = () => {
  let { count } = store;
  count = 9999;
};
</script>

<style lang="scss" scoped></style>
