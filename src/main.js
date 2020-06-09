import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fb from 'firebase'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created() {
    fb.initializeApp({
      apiKey: "AIzaSyAg-acRVRvEhk8ApMc-E_qb5jUMoWxC1dE",
      authDomain: "its-ads-d2d35.firebaseapp.com",
      databaseURL: "https://its-ads-d2d35.firebaseio.com",
      projectId: "its-ads-d2d35",
      storageBucket: "its-ads-d2d35.appspot.com",
      messagingSenderId: "244831025837",
      appId: "1:244831025837:web:f5f17d6becfaaf5820a424",
      measurementId: "G-RTQ18X7223"
    })
  }
})
