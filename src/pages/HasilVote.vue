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
          <span if class="text-h6">Total Voters : {{total_}}</span>
        </div>
      </div>
        <div class="row q-col-gutter-md justify-center">
         <div class="col-12">
            <bar-chart :total="total_" :isLoad="load" ></bar-chart>
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
      total_: 0,
      total: 0,
      load: true,
      expanded: false
    }
  },
  watch: {
    total_ (value) {
      return localStorage.total || 0
    }
  },
  async mounted () {
    this.total = setInterval(function () {
      this.total_ = parseInt(localStorage.total)
    }.bind(this), 4000)
    await this.getKandidat()
  },
  methods: {
    async getKandidat () {
      const res = await this.$axios.get('/calon-ketua')
      this.dataKandidat = res.data.results
    },
    load_ (value) {
      this.load = value
    }
  }
}
</script>

<style lang="scss"></style>
