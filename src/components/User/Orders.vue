<template>
  <v-container>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondart mb-3">Заказы</h1>
        <v-list subheader two-line>
          <v-list-tile @click v-for="order in orders" :key="order.id">
            <v-list-tile-action>
              <v-checkbox :input-value="order.done" @change="markDone(order)" color="success"></v-checkbox>
            </v-list-tile-action>

            <v-list-tile-content>
              <v-list-tile-title>{{order.name}}</v-list-tile-title>
              <v-list-tile-sub-title>{{order.phone}}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn class="primary" :to="'/ad/' + order.adId">Open</v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: "1231",
          name: "Имя пользователя",
          phone: "232323232",
          adId: "123",
          done: false
        }
      ]
    };
  },
  methods: {
    markDone(order) {
      console.log(order);
      order.done = true;
    }
  }
};
</script>

<style>
</style>template