<template>
  <div class="part" :class="position">
    <router-link :to="{   //FORMER showPartInfo() METHOD in methods:
        name: 'Parts',
        params: {
          id: this.selectedPart.id,
          partType: this.selectedPart.type,
        }}">
      <img :src="selectedPart.src" title="arm"/>
      <!--<img @click="showPartInfo()" :src="selectedPart.src" title="arm"/>-->
    </router-link>
    <button @click="selectPreviousPart()" class="prev-selector"></button>
    <button @click="selectNextPart()" class="next-selector"></button>
    <span 
       @click="pinPadding='5px'" 
       v-pin="{ bottom: pinPadding, right: pinPadding }" 
       class="sale" 
       v-show="selectedPart.onSale">Sale!</span>
  </div>
</template>

<script>
import pinDirective from '../shared/pin-directive';

function getPreviousValidIndex(index, length) {
  const deprecatedIndex = index - 1;
  return deprecatedIndex < 0 ? length - 1 : deprecatedIndex;
}

function getNextValidIndex(index, length) {
  const incrementedIndex = index + 1;
  return incrementedIndex > length - 1 ? 0 : incrementedIndex;
}

export default {
  directives: { pin: pinDirective },
  props: { 
    parts: {
      type: Array,
      required: true,
    }, 
    position: {
      type: String,
      required: true,
      validator(value) {
        return ['top', 'left', 'center', 'right', 'bottom'].includes(value); 
      },
    },
  },
  data() {
    return { selectedPartIndex: 0, pinPadding: '5px', };
  },
  computed: {
    selectedPart() {
      return this.parts[this.selectedPartIndex];
    },
  },
  created() {
    this.emitSelectedPart();
  },
  updated() {
    this.emitSelectedPart();
  },
  methods: {        //FIRST this.$router.push('/parts');
    /*SECOND showPartInfo() {
      this.$router.push({
        name: 'Parts',
        params: {
          id: this.selectedPart.id,
          partType: this.selectedPart.type,
        },
      });
    }, */
    emitSelectedPart() {
      this.$emit('partselected', this.selectedPart);
    },
    selectNextPart() {
      this.selectedPartIndex = getNextValidIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
    },
    selectPreviousPart() {
      this.selectedPartIndex = getPreviousValidIndex(
        this.selectedPartIndex,
        this.parts.length,
      );
    },
  },
};

</script>

<style scoped>
.part-title {
  position: absolute;
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: red;
  padding-top: 5px;
  top: -25px;
}
.sale {
  position: absolute;
  bottom: 5px;
  right: 5px;
  color: white;
  background-color: red;
  padding: 3px;
}
.highlight {
  border: 1px solid red;
}
</style>
