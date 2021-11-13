<template>
  <div class="qr_code_wrapper" :style="{width:`${width}px`,height:`${width}px`}">
    <div id="qrcode"></div>
  </div>
</template>

<script>
//js
import QRCode from "qrcodejs2";

export default {
  name: "QRCode",
  props: {
    width: {
      type: Number,
      default: 120,
    },
    qrLink: String,
  },
  data() {
    return {

    };
  },
  mounted() {
    this.generQrCode();
  },
  methods: {
    generQrCode() {
      let qrcode = new QRCode("qrcode", {
        width: this.width,
        height: this.width,
        text: this.qrLink,
        colorDark: "#000",
        colorLight: "#FFF",
      });
    },
  },
};
</script>

<style scoped>
.qr_code_wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: #eee;
  margin: 0 auto;
}
.qrcode {
  width: 100%;
  height: 100%;
}
</style>