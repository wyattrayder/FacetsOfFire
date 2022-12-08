<template>
  <v-app>
    <v-app-bar app color="background" prominent class="appBar">

      <v-spacer></v-spacer>

      <div class="d-flex align-center">
        <v-img
          class="shrink mr-2"
          style="width: 300px;"
          contain
          src="./assets/names2.png"
          transition="scale-transition"
        />
      </div>

      <v-spacer></v-spacer>

      <!-- <v-switch
        v-model="$vuetify.theme.dark"
        inset
      ></v-switch> -->
    </v-app-bar>

    <v-main class="mainBackground">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.mainBackground {
  background-color: var(--v-background-lighten3);
}
.appBar {
  display: list-item;
}
</style>
