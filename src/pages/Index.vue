<template>
  <q-page class="flex flex-center">
    <div class="row">
      <div class="col-12 q-py-xl">
        <div class="row justify-center">
          <img class="logo" height="180px" src="https://api.ofield.web.id/img/logo.jpg" alt="logo" srcset="">
        </div>
        <h1 class="text-center"><strong>OMK BMJ</strong> <br> E-Voting</h1>
        <div class="row justify-center">
          <q-btn color="primary" label="Mulai Vote" to="calon-kandidat" />
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
