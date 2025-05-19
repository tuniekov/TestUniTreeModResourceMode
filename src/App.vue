<template>
  <UniTreePanel :treetabs="testunitreemodresourcemode"/>
</template>

<script setup>
  import { PVTables, UniTreePanel } from 'pvtables/dist/pvtables'
  import { ref } from 'vue'
  const testunitreemodresourcemode = ref({
    modResource2:{
      type:'tree',
      title: 'modResource2',
      table: 'modResource2',
    },
  });
</script>
<style>
 #testunitreemodresourcemode{
  display: flex;
  width: auto;
  height: 100vh;
 }
</style>