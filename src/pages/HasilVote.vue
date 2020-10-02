<template>
    <q-page style="padding: 48px;" class="bg-app-white">
      <div class="row">
        <div class="col-3 text-center">
          <div class="q-gutter-sm">
            <q-btn color="green-5" icon-right="highlight_off" label="Start" @click="load_(true)" />
            <q-btn color="red-5" icon-right="highlight_off" label="Stop" @click="load_(false)" />
          </div>
        </div>
        <div class="col-4">
          <span if class="text-h6">Total Voters : {{total}}</span>
        </div>
      </div>
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
      total: 0,
      load: true,
      expanded: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  async mounted () {
    // this.renderChart(this.chartdata, this.options)
    await this.getKandidat()
  },
  methods: {
    async getKandidat () {
      const res = await this.$axios.get('/calon-ketua')
      this.dataKandidat = res.data.results
      const resHasil = await this.$axios.get('/hasil')
      this.total = resHasil.data.total
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
