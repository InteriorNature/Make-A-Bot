<template>
<div v-if="availableParts" class="content">
<div class="left-side-content">
    <div class="top-row">
      <div class="top" >
        <!--<div class="robot-name">
          {{selectedRobot.head.title}}
          <span v-if="selectedRobot.head.onSale" class="sale">Sale!</span>
          </div> -->
        <PartSelector 
           :parts="availableParts.heads"
           position="top"
           @partselected="part => selectedRobot.head=part"
           :style="saleBorderStyle"/>
      </div>
    </div>
    <div class="middle-row">
      <PartSelector :parts="availableParts.arms" position="left"
         @partselected = "part => selectedRobot.leftArm = part"/>
      <PartSelector :parts="availableParts.torsos" position="center"
         @partselected = "part => selectedRobot.torso = part"/>
      <PartSelector :parts="availableParts.arms" position="right"
         @partselected = "part => selectedRobot.rightArm = part"/>
    </div>
    <div class="bottom-row">
      <PartSelector :parts="availableParts.bases" position="bottom" 
         @partselected = "part => selectedRobot.base = part"/>
    </div>
  </div>
  <div class="spacer">
  </div>
  <div class="right-side-content">
    <div class="preview">
     <CollapsibleSection @click="toggle">
        <div class="preview-content">
          <div class="top-row">
            <img :src="this.selectedRobot.head.src"/>
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.src" class="rotate-left"/>
            <img :src="selectedRobot.torso.src"/>
            <img :src="selectedRobot.rightArm.src" class="rotate-right"/>
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.src"/>
          </div>
        </div>
        </CollapsibleSection>
      <button class="add-to-cart" @click="addToCart()">Add To Cart</button>
    </div>
  </div>
  </div>
</template>

<script>
// import availableParts from '../data/parts'; BEFORE using axios 
import PartSelector from './PartSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';
import { mapActions } from 'vuex';

export default {
  name: 'RobotBuilder',
  created () {
		this.getParts(); // method call to store
		// this.$store.dispatch('robots/getParts'); added to ...mapActions helper to methods
  },
  addedToCart () {	
	},
  beforeRouteLeave (to, from, next) {
      /*eslint no-alert: 0 */
      /*eslint no-restricted-globals: 0 */
      if (this.$store.state.robots.cart.length > 0) {
				this.addedToCart = true;
				next(true);
			} else {
        this.addedToCart = false;
	      const response = confirm('You have not added a robot to cart. Are you sure you want to leave?');
        next(response);
      };
	},
  components: { PartSelector, CollapsibleSection },
  data () {
    return {
    	// availableParts, changed to computed property after axios implemented
      addedToCart: false,
    	cart: [],
    	selectedRobot: {
        head: {},
        leftArm: {},
        torso: {},
        rightArm: {},
        base: {},
		  },
    };
	},
	computed: {
		availableParts () {
			return this.$store.state.robots.parts;
		},
		saleBorderStyle () {
		  return {
		  	border: this.selectedRobot.head.onSale ? "3px solid red" : "3px solid #aaa",
		  };
		},
	},
	methods: {
	  ...mapActions ('robots', ['getParts', 'addRobotToCart']),
	  addToCart () {
	  	const robot = this.selectedRobot;
	  	const cost = robot.head.cost + robot.leftArm.cost + robot.torso.cost +
	  	               robot.rightArm.cost + robot.base.cost;
	  	this.addRobotToCart (Object.assign({}, robot, {cost})) 
	  	  .then(() => this.$router.push('/cart')); //using mapAction helper

	  	/* 3) this.$store.dispatch('robots/addRobotToCart', Object.assign({}, robot, {cost}))  
	  	  .then(() => this.$router.push('/cart'));     dispatching Action   */    
      // 2) this.$store.commit('addRobotToCart', Object.assign({}, robot, {cost})); commit mutation 	  	               
	  	// 1) this.cart.push(Object.assign({}, robot, { cost })); BEFORE store added
	  	this.addedToCart = true;
	  },
   },
};
</script>

<style>
:root {
        --imgsize: 105px;
        --selectorsize: 84px;
        --nextheight: 111px;
        --addtocart: 100px;
        --preview: 25px;
        --zonerobot: 100%;
        --zonespacer: 0%;
        --zonecart: 0%;
    }

@media (min-width: 530px) {
    :root {
      --zonerobot: 70%;
      --zonespacer: 10%;
      --zonecart: 20%;
    }
}

@media (min-width: 955px) {
    :root {
      --imgsize: 155px;
      --selectorsize: 134px;
      --nextheight: 161px;
      --addtocart: 190px;
      --preview: 50px;
    }    
}

.content {
  display: flex;
  flex-direction: row;
}
.left-side-content {
  position: relative;
  min-width: var(--zonerobot);
}
.part {
  position: relative;
  width: var(--imgsize);
  height: var(--imgsize);
  border: 3px solid #aaa;
} 
.part img {
  width: var(--imgsize);
  cursor: pointer;
}
.top-row {
  display:flex;
  justify-content: space-around;
}
.middle-row {
  display:flex;
  justify-content: center;
}
.bottom-row {
  display:flex;
  justify-content: space-around;
  border-top: none;
}
.head {
  border-bottom: none;
}
.left {
  border-right: none;
}
.right {
  border-left: none;
}
.left img {
  transform: rotate(-90deg);
}
.right img {
  transform: rotate(90deg);
}
.bottom {
  border-top: none;
}

.prev-selector {
  position: absolute;
  z-index:1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: var(--nextheight);
}
.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: var(--nextheight);
}
.center .prev-selector, .center .next-selector {
  opacity:0.8;
}

.left .prev-selector {
  top: -28px;
  left: -3px;
  width: var(--selectorsize);
  height: 25px;
}
.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px; 
  width: var(--selectorsize);
  height: 25px;
}
.right .prev-selector {
  top: -28px;
  left: 24px;  
  width: var(--selectorsize);
  height: 25px;
}
.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;    
  width: var(--selectorsize);
  height: 25px;
}
.right .next-selector {
  right: -3px;
}
.left .prev-selector:after,  .right .prev-selector:after{
  content: '\25B2'
}
.left .next-selector:after, .right .next-selector:after {
  content: '\25BC'
}
.top .prev-selector:after, .bottom .prev-selector:after, .center .prev-selector:after{
  content: '\25C4'
}
.top .next-selector:after, .bottom .next-selector:after, .center .next-selector:after{
  content: '\25BA'
}

.robot-name {
	position: absolute;
	top: -25px;
	text-align: center;
	width: 100%;
}
.sale {
	color: red;
}
.spacer {
  min-width: var(--zonespacer);
}
.right-side-content {
  position: relative;
  min-width: var(--zonecart);
}
.add-to-cart {
    position: absolute;
    width: var(--addtocart);
    padding: 3px;
    font-size: 16px; 
}
td, th {
	text-align: center;
	padding: 5px;
	padding-right: 20px;
}

.cost {
	text-align: right;
}

.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: var(--addtocart);
  height: var(--addtocart);
  padding: 5px;
}
.preview-content {
  border: 1px solid #999;
}
.preview img {
  width: var(--preview);
  height: var(--preview);
}
.rotate-right {
  transform: rotate(90deg);
}
.rotate-left {
  transform: rotate(-90deg);
}

@media (max-width: 420px) {
  .add-to-cart {
    top: 25px;
    margin: 0px 35px;
    word-wrap: break-word;
    width: 50px;
  }
}
@media (max-width: 530px) {
    .spacer {
      display: none;
    }
    .left-side-content {
      width: 95%;
    }
}
@media (max-width: 768px) {
    .aside {
        display: none;
    }
  }
  @media (min-width: 769px) {
    .aside {
        display: block;
    }
  }

</style>

