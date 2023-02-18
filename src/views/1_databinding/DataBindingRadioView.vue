<template>
  <div>
    <div>
      <input type="radio" id="html" value="html" v-model="favoriteLang" />
      <label for="html">HTML</label>
    </div>
    <div>
      <input type="radio" id="js" value="js" v-model="favoriteLang" />
      <label for="js">JS</label>
    </div>
    <div>
      <input type="radio" id="vue" value="vue" v-model="favoriteLang" />
      <label for="vue">vue</label>
    </div>
    <div>선택한 좋아하는 것은 : {{ favoriteLang }}</div>
    <!-- radio버튼은 하나만 선택할 수 있는 속성이니까 문자열 데이터바인딩을 해줘야한다. checked와 데이터 바인딩이 됨 -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      favoriteLang: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
