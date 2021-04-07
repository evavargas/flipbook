<template>
  <div class="fleshleft">
    <img :src="imageSrc" class="boneleft" />
  </div>
</template>

<script>

export default {
  props: {
    imageSrc: String
  },
  computed:{

  },
  methods:{

  },
  mounted: function (){
      $(document).ready(function(){
              var currentMousePos = { x: -1, y: -1 };
              $('div.fleshleft').mousemove(function(e) {
                  console.log("on")
                  currentMousePos.x = e.pageX;
                  currentMousePos.y = e.pageY;
                $('img.boneleft').css('-webkit-mask-position-x', currentMousePos.x -400);
                $('img.boneleft').css('-webkit-mask-position-y', currentMousePos.y -180)
              });
          })
  }
};
</script>

<style scoped >
.fleshleft {
  background: url("https://catalogimg.blob.core.windows.net/catalogo2020/cat2.jpg");
  background-repeat: no-repeat;
  background-size: 100% auto;
  box-sizing: border-box;
}
.boneleft {
  mask-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/40713/xray-machine.png");
  mask-repeat: no-repeat;
  mask-size: 150px;
  cursor: none;
  box-sizing: border-box;
  width: inherit;
  height: inherit;
}
</style>