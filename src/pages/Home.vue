<template>
  <div class="center">
       <LifeHeader ></LifeHeader>
  </div>
</template>

<script>
  import LifeHeader from '@/components/LifeHeader.vue'      //导入组件
  export default {
    name: 'Home',
    components:{
      LifeHeader   // 注册组件
    },
    data () {
      return {

      }
    },
    methods:{

    }
  }
</script>

<style>
  .center {
    background-image: url(../assets/back.png);

  }
</style>
