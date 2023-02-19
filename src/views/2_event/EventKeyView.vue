<template>
  <div>
    <!-- <input type="search" v-model="searchText" @keyup="checkEnter($event)" /> -->
    <input type="search" v-model="searchText" @keyup.enter="doSearch" />
    <button @click="doSearch">조회</button>
  </div>
</template>
<script>
// @어쩌구에 .으로 바로 접근이 가능함
// .enter
// .tab
// .delete
// .esc
// .space
// .up
// .down
// .left
// .right
// .stop - event.stopPropagation()
// .prevent - event.preventDefault()
export default {
  components: {},
  data() {
    return {
      searchText: ''
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    doSearch() {
      console.log(this.searchText)
    },
    checkEnter(event) {
      if (event.keyCode === 13) {
        this.doSearch()
      }
    }
  }
}
</script>
