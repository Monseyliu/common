<template>
  <div class="logo_qr_wrapper"> 
    <QRCode
      :text="qrLink"
      :correctLevel="level"
      :size="qrSize"
      :margin="qrMargin"
      :colorDark="qrColor"
      :colorLight="qrLightColor"
      :backgroundColor="qrBgColor"
      :logoSrc="logoSrc"
      :logoScale="logoScle"
      :logoMargin="logoMargin"
      :backgroundDimming="DimmingColor"
      :logoBackgroundColor="logoBgColor"
      class="logo_qr"
    />
  </div>
</template>

<script>
//js
import QRCode from "vue-qr";

export default {
  name: "logoQRCode",
  props: {
    qrLink: String,
    logoSrc: String,
    level: {
      type: Number,
      default: 3,
    },
    qrSize: {
      type: Number,
      default:160,
    },
    qrMargin: {
      type: Number,
      default: 5,
    },
    qrColor: {
      type: String,
      default: "#000",
    },
    qrLightColor: {
      type: String,
      default: "#fff",
    },
    qrBgColor: {
      type: String,
      default: "#fff",
    },
    logoScle: {
      type: Number,
      default: 0.2,
    },
    logoMargin: {
      type: Number,
      default:5,
    },
    DimmingColor: {
      type: String,
      default: "#fff",
    },
    logoBgColor: {
      type: String,
      default: "#fff",
    },
  },
  components: {
    QRCode,
  },
};
</script>

<style scoped>
.logo_qr{
    border-radius: 4px;
}
.logo_qr_wrapper{
    margin: 20px 0;
}
</style>