<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
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
        src: "",
      },
      {
        id: 2,
        src: "",
      },
      {
        id: 3,
        src: "",
      },
    ],
  }),
};
</script>

<style scoped>
</style>