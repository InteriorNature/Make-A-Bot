<template slot-scope="{ toggle }">
  <div>
    <div class="header">
      <span v-if="open" @click="toggle"> &#x25B2 Collapse</span>
      <span v-else="!open" @click="toggle"> &#x25BC Expand</span>
    </div>
    <!-- injectible, toggable content - e.g when calling elsewhere -->
    <!-- use as follows: <CollapsibleSection><div>My Content</div></CollapsibleSection> -->
    <slot v-if="open">
    </slot>
  </div>
</template>

<script>
  export default {
  	name: 'CollapsibleSection',
    data() {
      return {open: true};
    },
    created() {
      this.mediaToggler(); //check viewport to toggle collapsiblesection
    },
    beforeDestroy() {
       window.removeEventListener('resize', this.mediaToggler());
    },
    methods: {
    toggle() {
        this.open=!this.open;
    },
    mediaToggler() {
      var x = window.matchMedia("(max-width: 530px)");
      if (x.matches) { // If media query matches
        if (this.open) {
          this.toggle();
        }
      }
    },
  },//methods
  };
</script>

<style scoped>

  .header {
  	background-color: #bbb;
  	padding: 3px;
  	cursor: pointer;
  }

  @media (max-width: 420px) {
    .header {
      display: none;
    }
  }
</style>