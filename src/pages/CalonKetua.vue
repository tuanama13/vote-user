<template>
    <q-page style="" class="q-py-lg q-px-lg bg-app-white">
        <div class="row q-col-gutter-md justify-center">
            <div class="col-6 col-md-2" v-for="(item,index) in dataKandidat" :key="index">
                <q-card  class="my-card" >
                    <img style="height:250px;object-fit:cover;" :src="'https://api.ofield.web.id/img/kandidat/'+item.gambar">

                    <q-card-section class="text-center">
                        <div class="text-h5 q-mt-sm q-mb-xs text-left">{{item.nama}}</div>
                        <!-- <div class="text-caption text-grey text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div> -->
                        <q-separator class="q-my-md"/>
                        <div class="row q-col-gutter-sm  justify-around">
                          <div class="col-12 col-md-6">
                            <q-btn flat align="around" class="btn-fixed-width" color="blue-5" label="Visi & Misi" @click="detailKandidat(item.id)" />
                          </div>
                          <div class="col-12 col-md-6">
                            <q-btn align="around" class="btn-fixed-width" color="green-5" label="Vote" @click="vote(item.id)" />
                          </div>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
import { Loading } from 'quasar'
export default {
  name: 'Konsultasi',
  data () {
    return {
      dataKandidat: [],
      expanded: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  mounted () {
    this.getKandidat()
  },
  methods: {
    async getKandidat () {
      const res = await this.$axios.get('/calon-ketua')
      this.dataKandidat = res.data.results
    },
    async vote (idcalonketua) {
      Loading.show()
      const body = {
        idcalonketua: idcalonketua
      }
      const res = await this.$axios.patch('/hasil/vote', body)
      if (res.data.message === 'berhasil') {
        return Loading.hide()
      }
      Loading.hide()
      return this.$q.notify({
        type: 'negative',
        message: 'Terjadi Kesalahan'
      })
    },
    detailKandidat (idcalonketua) {
      this.$router.push('/calon-kandidat/' + idcalonketua)
    }
  }
}
</script>

<style lang="scss"></style>
