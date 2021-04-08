<template>
  <div class="fleshright" :style="{ 'background-image': 'url(' + urlbackright + ')' }">
    <img :src="imagesrcright" class="boneright" />
  </div>
</template>

<script>

export default {
  props: {
    imagesrcright: String,
    urlbackright: String

  },
  computed:{

  },
  methods:{

  },
  mounted: function (){
      $(document).ready(function(){
              var currentMousePos = { x: -1, y: -1 };
              $('div.fleshright').mousemove(function(e) {
                  console.log("on")
                  currentMousePos.x = e.pageX;
                  currentMousePos.y = e.pageY;
                $('img.boneright').css('-webkit-mask-position-x', currentMousePos.x -700);
                $('img.boneright').css('-webkit-mask-position-y', currentMousePos.y -180)
              });
          })
  }
};
</script>

<style scoped >
.fleshright {
  background-repeat: no-repeat;
  background-size: 100% auto;
  box-sizing: border-box;
}
.boneright {
  mask-image: url(../../src/assets/effects/xray.png);
  mask-repeat: no-repeat;
  mask-size: 150px;
  cursor: none;
  box-sizing: border-box;
  width: inherit;
  height: inherit;
}

@media screen and (max-width: 600px){
  .boneright{
    mask-size: 80px;
  }
}
</style>