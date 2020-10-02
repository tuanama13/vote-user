import Vue from 'vue'
import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.ofield.web.id'
})

Vue.prototype.$axios = instance
