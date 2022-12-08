<template>
  <div class="outerContainer">
    <div id="photoContainer">
      <div class="parallax" style="width: 50%">
        <v-parallax src="https://picsum.photos/1920/1080?random">
          <div class="white black--text pa-4 titleDiv">The Story of Us</div>
        </v-parallax>
      </div>
      <div class="parallax">
        <v-parallax src="../assets/fallPhoto.jpg" style="width: 65vw;">
        </v-parallax>
      </div>
    </div>
    <!-- <div id="photoContainer">
      <div class="parallax">
        <v-parallax src="../assets/fallPhoto.jpg" ></v-parallax>
      </div>
      <div class="parallax" style="width: 50%">
        <v-parallax src="https://picsum.photos/1920/1080?random">
          <div class="white black--text pa-4 titleDiv">The Story of Us</div>
        </v-parallax>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({}),
};
</script>

<style scoped>

.parallax {
  margin: 30px;
  border: 20px solid black;
}
.titleDiv {
  text-align: center;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-size: xx-large;
}
.photoContainer {
  display: flex;
}
.photo {
  width: 70vw;
}
</style>