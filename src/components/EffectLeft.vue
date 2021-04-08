<template>
  <div class="fleshleft" :style="{ 'background-image': 'url(' + urlbackleft + ')' }">
    <img :src="imagesrcleft" class="boneleft" />
  </div>
</template>

<script>

export default {
  props: {
    imagesrcleft: String,
    urlbackleft: String
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
                $('img.boneleft').css('-webkit-mask-position-x', currentMousePos.x -180);
                $('img.boneleft').css('-webkit-mask-position-y', currentMousePos.y -240)
              });
          })
  }
};
</script>

<style scoped >
.fleshleft {
  background-repeat: no-repeat;
  background-size: 100% auto;
  box-sizing: border-box;
}
.boneleft {
  mask-image: url(../../src/assets/effects/xray.png);
  mask-repeat: no-repeat;
  mask-size: 150px;
  cursor: none;
  box-sizing: border-box;
  width: inherit;
  height: inherit;
}
@media screen and (max-width: 600px){
  .boneleft{
    mask-size: 80px;
  }
}
</style>