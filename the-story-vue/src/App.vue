<template>
  <v-app>
    <v-app-bar  color="background" prominent class="appBar">

      <v-spacer></v-spacer>

      <!-- <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          style="width: 350px;"
          contain
          src="./assets/names2.png"
          transition="scale-transition"
        />
      </div> -->

      <h1 v-if="currentView == 'story'">The Story of Us</h1>
      <h1 v-if="currentView == 'future'">The Future of Us</h1>

      <v-spacer></v-spacer>

      <!-- <v-switch
        v-model="$vuetify.theme.dark"
        inset
      ></v-switch> -->
    </v-app-bar>

    <v-main class="mainBackground">
      <router-view v-on:title="updateTitle"/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    currentView: "story"
  }),

  methods: {
    updateTitle(newTitle) {
      this.currentView = newTitle;
    },
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Niconne&display=swap"); /* This is neat! */

.mainBackground {
  background-color: var(--v-background-lighten3);
}
.appBar {
  display: list-item;
}

h1 {
  font-size: 55px;
  font-weight: 600;
  font-family: "Niconne", cursive;
  color: #e0d6e9;
  text-shadow: 2px 2px 0px #957dad, 4px 4px 0px #0d805d, 6px 6px 0px #016126,
    8px 8px 0px #553c9a, 10px 10px 0px #5a1178;
}
</style>
