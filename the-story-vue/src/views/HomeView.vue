<template>
  <div>

    <photo-slider :slides="topSlides" />
    
    <p class="introParagraph ma-4">
      Merry Christmas, Ms. Faith! I made this website as a recap, or a summary if
      you will, of the "book" we call our relationship! As you know, it's been
      one amazing story so far -- starting from Dr. Finan's class all of the way
      to this very moment! I cannot wait for the next chapters in our life --
      it's such a page-turner!
    </p>

    <time-line />

  </div>
</template>

<script>
import TimeLine from "../components/TimeLine.vue";
import PhotoSlider from "../components/PhotoSlider.vue";
export default {
  name: "HomeView",

  data: () => ({
    topSlides: [
      {
        id: 1,
        src: require("../assets/Slider Photos/TopSlider/APT-Party-NoHat.jpg"),
      },
      {
        id: 2,
        src: require("../assets/Slider Photos/TopSlider/CornMazeKiss.jpg"),
      },
      {
        id: 3,
        src: require("../assets/fallPhoto.jpg"),
      },
      {
        id: 4,
        src: require("../assets/Slider Photos/TopSlider/ClarksvilleBowling.jpg"),
      },
      {
        id: 5,
        src: require("../assets/Slider Photos/TopSlider/CrazyPoseWithMimi.jpg"),
      },
      {
        id: 6,
        src: require("../assets/Slider Photos/TopSlider/BandBanquet.jpg"),
      },
      {
        id: 7,
        src: require("../assets/Slider Photos/TopSlider/FaithAndWyattGreenPants.jpg"),
      },
      {
        id: 8,
        src: require("../assets/Slider Photos/TopSlider/BazSelfie.jpg"),
      },
      {
        id: 9,
        src: require("../assets/Slider Photos/TopSlider/ArtMuseum.jpg"),
      },
      {
        id: 10,
        src: require("../assets/Slider Photos/TopSlider/FaithAndMtnDew.jpg"),
      },
      {
        id: 11,
        src: require("../assets/Slider Photos/TopSlider/FaithOliveGarden.jpg"),
      },
      {
        id: 12,
        src: require("../assets/Slider Photos/TopSlider/WyattOliveGarden.jpg"),
      },
      {
        id: 13,
        src: require("../assets/Slider Photos/TopSlider/RedLeatherFaith.jpg"),
      },
      {
        id: 14,
        src: require("../assets/Slider Photos/TopSlider/TaytoOnFaith.jpg"),
      },
      {
        id: 15,
        src: require("../assets/Slider Photos/TopSlider/WyattAndFaithAndJerry.jpg"),
      },
      {
        id: 16,
        src: require("../assets/Slider Photos/TopSlider/WyattFaithOrangeHat.jpg"),
      },
      {
        id: 17,
        src: require("../assets/Slider Photos/TopSlider/WyattWithDerp.jpg"),
      },
    ],
  }),

  components: {
    TimeLine,
    PhotoSlider,
  },

  mounted() {
    this.$emit('title', 'story');
  }
};
</script>

<style scoped>
.introParagraph {
  background-color: #957dad;
  margin: 10px 0px 10px 0px;
  border: solid var(--v-background-base) 5px;
  padding: 10px;
}
</style>