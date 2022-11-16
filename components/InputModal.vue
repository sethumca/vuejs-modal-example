<template>
  <div>
    <b-modal
      id="input-modal"
      centered
      no-close-on-esc
      ref="modal"
      title="Please confirm your password"
      ok-title="confirm"
      @ok="ok"
      @show="reset"
      @cancel="reset"
      @close="reset"
    >
      <form ref="form" @submit.stop.prevent="handleSubmit">
        <b-form-group
          label="Password"
          label-for="password"
          invalid-feedback="password is required"
          :state="pwdState"
        >
          <b-form-input
            id="password"
            type="password"
            v-model="password"
            :state="pwdState"
            required
          >
          </b-form-input>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: "",
      pwdState: null,
      data: undefined,
    };
  },
  methods: {
    confirm(data) {
      this.data = data;
      this.$bvModal.show("input-modal");
    },
    ok() {
      this.data.password = this.password;
      console.log(JSON.stringify(this.data));
    },
    reset() {
      this.password = "";
      this.pwdState = null;
    },
  },
};
</script>