export default {
  state: {
    ads: [
      {
        title: "первая",
        description: "Это дискрипшин",
        promo: false,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "123"
      },
      {
        title: "Вторая",
        description: "Это дискрипшин",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        id: "333"
      },
      {
        title: "Третья",
        description: "Это дискрипшин",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        id: "144523"
      }
    ]
  },
  mutations: {
    playload(state, playload) {
      state.ads.push(playload);
    }
  },
  actions: {
    createAd({ commit }, playload) {
      playload.id = String(parseInt(Math.random() * 1000));

      commit("playload", playload);
    }
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => {
        return ad.promo;
      })
    },
    myAds(state) {
      return state.ads;
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }

}
