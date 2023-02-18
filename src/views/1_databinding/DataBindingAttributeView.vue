<template>
  <div>
    <!-- readonly일 경우 사용자가 읽기만 해야하는데 value값을 변경하면 양방향 데이터 바인딩으로 인해 정보가 변경될 위험이 있어 잘 사용하지 않음 -->
    <!-- <input type="text" v-model="userId" readonly /> -->
    <input type="text" v-bind:value="userId" readonly />
    <input type="text" :value="userId" readonly /><!-- v-bind는 생략 가능 -->
    <br />
    <img :src="imgSrc" alt="" style="width: 100px; height: auto" />
    <br />
    <input type="search" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: '조회만 할 수 있습니다.',
      imgSrc:
        'https://cc-prod.scene7.com/is/image/CCProdAuthor/smartphone-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900',
      txt1: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {}
}
</script>
