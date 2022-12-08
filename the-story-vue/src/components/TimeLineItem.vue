<template>
  <v-timeline-item :color="titleBarColor" fill-dot right :icon="itemIcon">
    <v-card>
      <v-card-title :class="titleBarColor" style="justify-content: center">
        <h3 style="text-align: center; word-break: break-word">
          {{ itemTitle }}
        </h3>
      </v-card-title>
      <v-card-subtitle :class="titleBarColor" style="text-align: center;">
        {{ itemSubTitle }}
      </v-card-subtitle>
      <v-container>
        <v-row>
          <v-col>
            {{ itemText }}
          </v-col>
        </v-row>
      </v-container>
      <v-footer padless class="quoteFooter">
        <v-card flat tile width="100%">
          <v-card-text>
            <strong>{{ itemQuote }}</strong>
          </v-card-text>
        </v-card>
      </v-footer>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  data: () => ({}),

  methods: {},

  props: {
    titleBarColor: String,
    itemTitle: String,
    itemSubTitle: String,
    itemText: String,
    itemQuote: String,
    itemIcon: String,
  },
};
</script>

<style scoped>
.quoteFooter {
  text-align: center;
}
</style>