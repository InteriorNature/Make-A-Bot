<template>
  <div>
    <h1>{{ part.title }} </h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
  //import parts from "../data/parts"; BEFORE AXIOS
  import { getPartsMixin } from '../parts/get-parts-mixin';

  export default {
  	name: "PartInfo",
    mixins: [getPartsMixin],
  	props: {
      partType: {type: String},
      id: {
      	type: [Number, String],
      	validator(value) {
      		return Number.isInteger(Number(value));
      	},
      },
  	},
  	computed: {
      part() {
      	//const { partType, id } = this.$route.params; change Params to props from route
      	const { partType, id } = this;
      	return this.parts[partType].find(part => part.id === +id); //added this after axios implemented
      },
  	},
  /*	data () {    1st test before computing params
  		return {
  	      part:	{	
           title: "Part Title",
           description: "Part Description",
          }, 
  		};
  	},*/
  }
</script>