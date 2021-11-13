<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <QRCode v-if="0" qrLink="www.baidu.com" />
     <LogoQr 
     qrLink="www.blibli.com-www.baidu.com-www.baidu.comwww.blibli.com-www.baidu.com-www.baidu.com"
     :logoSrc="require('../assets/logo.png')"
     :qrSize="120"
       />
       <LoadButton :btnDisabled="false" @btnHandler="btnHandler" btnText="来吧按钮"/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import QRCode from '@/components/common/qrCode.vue'
import LogoQr from '@/components/common/logoQR.vue'
import LoadButton from '@/components/loadButton'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    QRCode,
    LogoQr,
    LoadButton
  },
  methods:{
    btnHandler(value){
      console.log(value);
    }
  }
}
</script>
