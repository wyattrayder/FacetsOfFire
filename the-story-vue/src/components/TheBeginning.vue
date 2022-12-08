<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover class="mb-10">
    <v-carousel-item v-for="(slide, i) in slides" :key="i" eager>
      <v-parallax :src="slide.src"></v-parallax>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    slides: [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1642007086358-278c226b915d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1641730710827-a3305f63c6a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1636587224433-3cd253788c40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      },
    ],
  }),
};
</script>

<style scoped>
</style>