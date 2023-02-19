<template>
  <div>
    <!-- 앞에서 어떻게 셀렉트를 선택하느냐에 따라 두번째가 바뀌는 로직 구성 -->
    <select name="" id="" @change="changeCity($event)" v-model="selectedCity">
      <option value="">===도시선택===</option>
      <option
        :value="city.cityCode"
        v-for="city in cityList"
        :key="city.cityCode"
      >
        {{ city.title }}
      </option>
    </select>
    <select name="" id="">
      <option
        :value="dong.dongCode"
        v-for="dong in selectedDongList"
        :key="dong.dongCode"
      >
        {{ dong.dongTitle }}
      </option>
    </select>
    <!--  <select name="" id="">
      <option
        :value="dong.dongCode"
        v-for="dong in dongList.filter(
          (dong) => dong.cityCode === selectedCity
        )"
        :key="dong.dongCode"
      >
        {{ dong.dongTitle }}
      </option>
    </select> -->
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      selectedCity: '',
      cityList: [
        { cityCode: '02', title: '서울' },
        { cityCode: '051', title: '부산' },
        { cityCode: '064', title: '제주' }
      ],
      dongList: [
        { cityCode: '02', dongCode: '1', dongTitle: '서울1동' },
        { cityCode: '02', dongCode: '2', dongTitle: '서울2동' },
        { cityCode: '02', dongCode: '3', dongTitle: '서울3동' },
        { cityCode: '02', dongCode: '4', dongTitle: '서울4동' },
        { cityCode: '051', dongCode: '1', dongTitle: '부산1동' },
        { cityCode: '051', dongCode: '2', dongTitle: '부산2동' },
        { cityCode: '051', dongCode: '3', dongTitle: '부산3동' },
        { cityCode: '064', dongCode: '1', dongTitle: '제주1동' },
        { cityCode: '064', dongCode: '2', dongTitle: '제주2동' }
      ],
      selectedDongList: []
    }
  },
  setup() {},
  created() {},
  mounted() {},
  unmounted() {},
  methods: {
    changeCity(event) {
      console.log(event.target.tagName)
      this.selectedDongList = this.dongList.filter(
        (dong) => dong.cityCode === this.selectedCity
      )
    }
  }
}
</script>
