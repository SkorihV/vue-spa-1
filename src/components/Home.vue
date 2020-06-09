<template>
  <div>
    <v-container>
      <v-layout>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item v-for="item in ads" :key="item.id" :src="item.imageSrc">
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + item.id">{{item.title}}</v-btn>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 v-for="item in ads" :key="item.id">
          <v-card>
            <v-img :src="item.imageSrc" aspect-ratio="3"></v-img>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{item.title}}</h3>
                <div>{{ item.description }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/' + item.id">Open</v-btn>
              <v-btn flat class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
          promo: false,
          imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "144523"
        }
      ]
    };
  }
};
</script>

<style scoped>
.car-link {
  position: absolute;
  bottom: 50px;
  left: 50%;
  background: rgb(0, 0, 0, 0.5);
  transform: translate(-50%, 0);
  padding: 5px 15px;
  border-radius: 5px 5px 0 0;
}
</style>>
