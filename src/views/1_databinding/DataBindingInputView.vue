<template>
  <div>
    <input type="text" v-model="userId" />
    <!-- v-model 은 양방향으로 바인딩이 된다. 콘솔로 확인 해 보면 사용자가 input에 무엇을 입력했는지 볼 수 있다. -->
    <button @click="btnfunction">submit</button>
    <button @click="btnchange">change</button>
    <br />
    <input type="text" v-model="num1" />+
    <input type="number" v-model="num2" />=
    <span>{{ num1 + num2 }}</span>
    <br />
    <input type="text" v-model.number="num3" />+
    <input type="number" v-model.number="num4" />=
    <span>{{ num3 + num4 }}</span>
    <!-- parseInt, parseFloat 없이 v-model.number를 사용하면 바로 적용이 됨 근데 type=number을 해도 되긴함 -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      userId: 'hello',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    btnfunction() {
      console.log(this.userId)
    },
    btnchange() {
      this.userId = 'jeremy'
    }
  }
}
</script>
