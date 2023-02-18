<template>
  <div>
    <div :class="{ 'txt-red': hasError, active: isActive }">클래스 바인딩</div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      isActive: false,
      hasError: true
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>

<style scoped>
.active {
  background-color: antiquewhite;
  font-weight: bold;
}
.txt-red {
  color: red;
}
</style>
