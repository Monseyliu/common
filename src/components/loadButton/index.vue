<template>
  <div class="load_button">
    <el-button
      :disabled="btnDisabled"
      :type="btnType"
      :loading="isLoading"
      @click="btnHandler"
      :class="{inactive: btnDisabled}"
    >
      {{ btnText }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: "loadButton",
  props: {
    btnText: String,
    btnType: {
      type: String,
      default: "primary",
    },
    btnDisabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    btnHandler() {
      this.isLoading = true;
      this.$emit("btnHandler", "点击");
      setTimeout(() => {
        this.isLoading = false;
      }, 2000);
    },
  },
};
</script>

<style scoped lang="scss">
.load_button {
  .el-button {
    // background-color: #fff;
  }
  .inactive{
    //   border: none;
    //   background-color: #555;
  }
  .el-button--primary.is-disabled{
      border: none;
      background-color: #555;
  }
}
</style>
