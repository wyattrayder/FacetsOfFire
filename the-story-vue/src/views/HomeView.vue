<template>
  <div>
    <time-line />
    <hello-world />
    <the-beginning />
  </div>
</template>

<script>
import TimeLine from '../components/TimeLine.vue';
import HelloWorld from "../components/HelloWorld.vue";
import TheBeginning from "../components/TheBeginning.vue";

export default {
  name: "HomeView",

  components: {
    HelloWorld,
    TheBeginning,
    TimeLine,
  },
};
</script>
