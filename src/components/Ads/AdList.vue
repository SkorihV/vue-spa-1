<template>
  <v-container>
    <v-layout>
      <v-flex xs12 ms6 offset-sm3>
        <h1 class="text--secondart mb-3">Мои объявления</h1>

        <v-card class="elevation-10 mb-3" v-for="item in myAds" :key="item.id">
          <v-layout row>
            <v-flex xs4>
              <v-img :src="item.imageSrc" height="160px"></v-img>
            </v-flex>
            <v-flex xs8>
              <v-card-text>
                <h2 class="text--primary">{{item.title}}</h2>
                <p>{{item.description}}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn :to="'/ad/' + item.id" class="info">Открыть</v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds() {
      return this.$store.getters.myAds;
    }
  }
};
</script>

<style>
</style>template