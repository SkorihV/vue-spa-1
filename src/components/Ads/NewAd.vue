<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondart mb-3">Создать новый заказ</h1>
        <v-form ref="form" v-model="valid" validation mb3>
          <v-text-field
            name="title"
            label="Создать заголовок"
            type="text"
            v-model="title"
            :rules="[ v => !!v || 'Заголовок обязательный для заполнения']"
          ></v-text-field>
          <v-textarea
            name="description"
            label="Описание"
            type="text"
            v-model="description"
            :rules="[ v => !!v || 'Описание обязательный для заполнения']"
          ></v-textarea>
        </v-form>
        <v-layout row mb-3>
          <v-flex>
            <v-btn class="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg" alt height="100" />
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch color="orange" v-model="promo" label="Добавить в промо?"></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn :disabled="!valid" class="success" @click="createAd">Добавить</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      description: "",
      promo: false,
      valid: false
    };
  },
  methods: {
    createAd() {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          imageSrc:
            "https://miro.medium.com/max/400/1*wqYF-8Dmh7LhtLkKfERc3Q.png"
        };

        this.$store.dispatch("createAd", ad);
        console.log(ad);
      }
    }
  }
};
</script>

<style>
</style>template