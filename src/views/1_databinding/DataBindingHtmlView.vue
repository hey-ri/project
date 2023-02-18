<template>
  <div>
    <div>{{ htmlstring }}</div>
    <div v-html="htmlstring"></div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      htmlstring: '<p style="color:red;">빨간색 문자</p>'
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
