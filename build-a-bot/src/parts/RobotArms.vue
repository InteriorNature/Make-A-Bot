<template>
  <div>
    <h2>Arms</h2>
    The arms are how your robot will interact with the world.
    They come in a variety of shapes and functions.
    <div v-for="(arm, idx) in parts.arms" :key="idx">  <!--arms changed to parts.arms after axios/mixin added-->
      <h4>{{arm.title}}</h4>
      <div>{{arm.description}}</div>
    </div>
  </div>
</template>

<script>
//import parts from '../data/parts'; BEFORE AXIOS
import getPartsMixin from '../parts/get-parts-mixin';

export default {
  name: 'RobotArms',
  mixins: [getPartsMixin],
  /*data() {                BEFORE AXIOS
    return { arms: parts.arms };
  },*/
};
</script>
