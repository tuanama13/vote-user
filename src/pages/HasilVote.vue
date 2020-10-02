<template>
    <q-page style="padding: 48px;" class="bg-app-white">
      <!-- <q-btn color="primary" label="Stop" @click="load_(false)" /> -->
        <div class="row q-col-gutter-md justify-center">
         <div class="col-12">
            <bar-chart :isLoad="load" ></bar-chart>
         </div>
        </div>
    </q-page>
</template>

<script>
import BarChart from 'src/components/BarChart'
export default {
  name: 'HasilVote',
  components: {
    BarChart
  },
  data () {
    return {
      tes: null,
      dataKandidat: [],
      load: true,
      expanded: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  mounted () {
    // this.renderChart(this.chartdata, this.options)
    this.getKandidat()
  },
  methods: {
    async getKandidat () {
      const res = await this.$axios.get('/calon-ketua')
      this.dataKandidat = res.data.results
    },
    load_ (value) {
      this.load = value
    },
    async vote (idcalonketua) {
      const body = {
        idcalonketua: idcalonketua
      }
      const res = await this.$axios.patch('/hasil/vote', body)
      //   this.dataKandidat = res.data.results
      console.log(res.data.message)
    }
  }
}
</script>

<style lang="scss"></style>
