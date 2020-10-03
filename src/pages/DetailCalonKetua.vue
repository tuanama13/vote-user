<template>
    <q-page style="padding: 48px;" class="bg-app-white">
        <div class="row">
          <div class="col-12 text-center">
            <q-avatar size="200px">
              <img style="object-fit:cover" :src="'https://api.ofield.web.id/img/kandidat/'+dataKandidat.gambar">
            </q-avatar>

            <h2>{{dataKandidat.nama}}</h2>
            <q-separator />
          </div>
          <div class="col-12">
              <q-card  class="my-card">
                <q-card-section>
                  <div class="row q-py-lg q-px-md">
                    <div class="col-12 col-md-4 text-center"><span class="text-h4">Visi</span></div>
                    <q-separator class="q-my-md lt-md" />
                    <div class="col-12 col-md-8"><p class="text-h6 q-pl-md"><i>"{{dataKandidat.visi}}"</i></p></div>
                  </div>
                  <q-separator class="gt-sm" inset />
                  <div class="row q-py-lg q-px-md" >
                    <div class="col-12 col-md-4 text-center q-pt-md"><span class="text-h4">Misi</span></div>
                    <q-separator class="q-my-md lt-md" />
                    <div class="col-12 col-md-8">
                      <span class="text-h6" v-html="dataKandidat.misi"></span>
                    </div>
                  </div>
                </q-card-section>
              </q-card>
          </div>
          <div class="row justify-center q-py-md">
              <q-btn color="primary" label="kembali" @click="back" />
          </div>
        </div>
    </q-page>
</template>

<script>
export default {
  name: 'DetailCalonKetua',
  data () {
    return {
      id: null,
      dataKandidat: {}
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getKandidat()
  },
  methods: {
    async getKandidat () {
      const res = await this.$axios.get('/calon-ketua/' + this.id)
      this.dataKandidat = res.data.results[0]
    },
    back () {
      this.$router.go(-1)
    }
    // async vote (idcalonketua) {
    //   const body = {
    //     idcalonketua: idcalonketua
    //   }
    //   const res = await this.$axios.patch('/hasil/vote', body)
    //   //   this.dataKandidat = res.data.results
    //   console.log(res.data.message)
    // },
    // detailKandidat (idcalonketua) {
    //   this.$router.push('/calon-ketua/' + idcalonketua)
    // }
  }
}
</script>

<style lang="scss"></style>
