<template>
  <div>
    <div>
      <input type="checkbox" id="html" value="html" v-model="favoriteLang" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="checkbox" id="js" value="js" v-model="favoriteLang" />
      <label for="js">JS</label>
    </div>
    <div>
      <input type="checkbox" id="vue" value="vue" v-model="favoriteLang" />
      <label for="vue">vue</label>
    </div>
    <div>선택한 좋아하는 것은 : {{ favoriteLang }}</div>
    <!-- checkbox는 checked와 데이터 바인딩이 됨 -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ['js']
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
