<template>
  <div>
    <div class="flexAndCenter mt-5">
      <audio controls autoplay>
        <source src="../assets/media/ThisIsIt.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
    <!-- Future Timeline... -->
    <v-timeline dense style="padding-right: 24px" align-top>
      <time-line-item
        :titleBarColor="'red lighten-1'"
        :itemTitle="`Developing & Dancing`"
        :itemText="``"
        :itemQuote="`~To be fond of dancing was a certain step towards falling in love~`"
        :quoteGiver="'Jane Austen'"
        :itemIcon="'mdi-code-tags'"
      />
      <time-line-item
        :titleBarColor="'red lighten-1'"
        :itemTitle="`Puppies & Prague`"
        :itemText="``"
        :itemQuote="`~Gonna take you to Buckingham palace 'cause you're my queen~`"
        :quoteGiver="'Scotty McCreery'"
        :itemIcon="'mdi-dog'"
      />
      <time-line-item
        :titleBarColor="'red lighten-1'"
        :itemTitle="`Kitties & Kids`"
        :itemText="``"
        :itemQuote="`~Chapter 6 -- now we're talking kids~`"
        :quoteGiver="'Scotty McCreery'"
        :itemIcon="'mdi-cat'"
      />
      <time-line-item
        :titleBarColor="'red lighten-1'"
        :itemTitle="`Mrs. Sillavan & Me`"
        :itemText="``"
        :itemQuote="`~Now you're walking down the aisle. I can't help but smile~`"
        :quoteGiver="'Scotty McCreery'"
        :itemIcon="'mdi-ring'"
      />
    </v-timeline>
    <!-- ______________ -->
  </div>
</template>

<script>
import TimeLineItem from "../components/TimeLineItem.vue";
export default {
  components: { TimeLineItem },
  mounted() {
    this.$emit("title", "future");
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Niconne&display=swap");

.flexAndCenter {
  display: flex;
  justify-content: center;
}
.yearCards {
  background-color: var(--v-background-base);
}

strong {
  font-family: "Niconne", cursive;
  color: #e0d6e9;
  text-shadow: 2px 2px 0px #957dad, 4px 4px 0px #0d805d, 6px 6px 0px #016126,
    8px 8px 0px #553c9a, 10px 10px 0px #5a1178;
  font-size: 45px;
  font-weight: bold;
}
</style>