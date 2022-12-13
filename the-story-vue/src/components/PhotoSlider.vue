<template>
  <v-carousel cycle height="400" hide-delimiter-background hide-delimiters style="margin-top: 10px;">
    <v-carousel-item v-for="(slide, i) in slides" :key="i" eager>
      <div class="carouselDiv">
      <v-img
        :src="slide.src"
        max-height="400px"
        contain
        eager
      ></v-img>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data: () => ({
    
  }),

  methods: {
    function() {
      
    }
  },

  props: {
    slides: Array
  },
};
</script>

<style scoped>
.carouselDiv {
  height: 100%;
  display: flex;
  align-items: center !important;
}

</style>