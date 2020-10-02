<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-12 q-py-lg">
        <div class="row justify-center">
          <img class="logo" height="200px" src="https://api.ofield.web.id/img/logo.jpg" alt="logo" srcset="">
        </div>
        <h1 class="text-center">OMK BMJ E-Voting</h1>
        <div class="row justify-center">
          <q-btn color="primary" label="Mulai Vote" to="calon-kandidat" />
          <!-- <q-btn color="secondary" label="Hasil Voting" to="hasil-vote"/> -->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
<style lang="stylus" scoped>
  @media only screen and (max-width: 600px) {
    logo{
      height : 80px;
    }
    h1{
      font-size : 5em;
    }
}
</style>
