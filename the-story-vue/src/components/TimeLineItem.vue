<template>
  <v-timeline-item :color="titleBarColor" fill-dot right :icon="itemIcon" >
    <v-card :color="titleBarColor">
      <v-card-title style="justify-content: center">
        <h3 style="text-align: center; word-break: break-word" class="cursiveFont">
          {{ itemTitle }}
        </h3>
      </v-card-title>
      <v-card-subtitle style="text-align: center;">
        {{ itemSubTitle }}
      </v-card-subtitle>
      <v-container class="whiteBackground fullWidth" v-if="!$vuetify.theme.dark">
        <v-row>
          <v-col class="normalFont">
            {{ itemText }}
          </v-col>
        </v-row>
      </v-container>
      <v-container class="blackBackground fullWidth" v-if="$vuetify.theme.dark">
        <v-row>
          <v-col class="normalFont">
            {{ itemText }}
          </v-col>
        </v-row>
      </v-container>
      <v-footer padless class="quoteFooter">
        <v-card flat tile width="100%">
          <v-card-text class="cursiveFont">
            <strong>{{ itemQuote }}</strong>
            <div style="display: block;">{{ quoteGiver }}</div>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
    <photo-slider v-if="photoSlides" :slides="photoSlides"/>
  </v-timeline-item>
</template>

<script>
import PhotoSlider from './PhotoSlider.vue'
export default {
  data: () => ({
    
  }),

  components: { PhotoSlider },

  props: {
    titleBarColor: String,
    itemTitle: String,
    itemSubTitle: String,
    itemText: String,
    itemQuote: String,
    quoteGiver: String,
    itemIcon: String,
    photoSlides: Array,
  },
};
</script>

<style scoped>
.quoteFooter {
  text-align: center;
}
.normalFont {
  font-family: "Roboto", sans-serif !important;
}
.cursiveFont {
  font-family: "Niconne", cursive;
}
.whiteBackground {
  background-color: white !important;
}
.blackBackground {
  background-color: #1E1E1E !important;
}
.fullWidth {
  min-width: fit-content !important;
  max-width: none;
}
</style>