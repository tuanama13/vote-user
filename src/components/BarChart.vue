<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    total: { type: Number },
    isLoad: Boolean
  },
  data () {
    return {
      polling: null,
      chartData: {
        // eslint-disable-next-line no-tabs
        labels: [],
        datasets: [
          {
            label: 'Hasil Vote',
            // eslint-disable-next-line no-tabs
            data: [],
            fill: false,
            // borderColor: '#2554FF',
            backgroundColor: ['#2554FF', '#709fb0', '#f08a5d', '#b83b5e', '#6a2c70'],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  watch: {
    isLoad: function (value) {
      if (value) {
        // this.polling = setInterval(function () {
        //   this.getHasil()
        // }.bind(this), 4000)
        this.loadBar()
      } else {
        clearInterval(this.polling)
      }
    }
  },
  mounted () {
    this.loadBar()
  },
  methods: {
    loadBar () {
      this.polling = setInterval(function () {
        this.getHasil()
      }.bind(this), 4000)
    },
    async getHasil () {
      this.chartData.labels = []
      this.chartData.datasets[0].data = []
      const res = await this.$axios.get('/hasil')
      for (const item of res.data.results) {
        this.chartData.labels.push(item.calonketua.nama)
        this.chartData.datasets[0].data.push(item.jumlah)
      }
      localStorage.total = res.data.total
      // this.$emit('update-voter', res.data.total)
      // this.total = parseInt(res.data.total)
      this.renderChart(this.chartData, this.options)
    },
    async vote (idcalonketua) {
      // eslint-disable-next-line no-unused-vars
      const body = {
        idcalonketua: idcalonketua
      }
    }
  },
  beforeDestroy () {
    clearInterval(this.polling)
  }
}
</script>
