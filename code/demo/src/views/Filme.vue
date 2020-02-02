<template>
  <div>
      <div>film组件的轮播</div>
      <filmnav></filmnav>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import filmnav from './Filme/Filmnav'
export default {
    components: {
        filmnav
    }
}
</script>
