<template>
  <div id="app">
    <yd-techsupport></yd-techsupport>
  </div>
</template>

<script>
import ydTechsupport from "./packages/techsupport/ydTechsupport"
export default {
  name: 'app',
  data () {
    return {

    }
  },
  components:{
    ydTechsupport
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
</style>
