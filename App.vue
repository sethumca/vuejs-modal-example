<template>
  <div>
    <b-button size="sm" @click="toggle">
      {{ show ? "Hide" : "Show" }} Alert
    </b-button>
    &nbsp;
    <b-button size="sm" @click="openModal">Show Modal</b-button>
    <input-modal ref="inputModal"></input-modal>
    <b-alert v-model="show" class="mt-3" dismissible @dismissed="dismissed">
      Hello {{ name }}!
    </b-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "BootstrapVue",
      show: true,
    };
  },
  watch: {
    show(newVal) {
      console.log("Alert is now " + (newVal ? "visible" : "hidden"));
    },
  },
  methods: {
    toggle() {
      console.log("Toggle button clicked");
      this.show = !this.show;
    },
    dismissed() {
      console.log("Alert dismissed");
    },
    openModal() {
      console.log("Open modal method");
      let someData = {
        prop1: "value1",
        prop2: "value2",
      };
      this.$refs.inputModal.confirm(someData);
    },
  },
};
</script>

<style>
body {
  padding: 1rem;
}
</style>