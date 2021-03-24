<template>
<div class="Home">
    <flipbook
    class="flipbook"
    v-slot="flipbook"
    :pages="[
      'https://upload.wikimedia.org/wikipedia/commons/3/30/Kat_met_brokjes.jpg',
      'https://cdn.pixabay.com/photo/2019/05/13/22/22/baby-cat-4201059_1280.jpg',
      'https://lh3.googleusercontent.com/proxy/_N7SgdhFEDfawr1KNQN6lXAYMUaswUpJ_3KAesLPkRrLsPHTC_7VbFCiPCe0c0byy2yPnvuc-l0L6o9f3UAcUsyxY5BPQPzM3b7Ot9hKiQ2sYtT6p3KW_CFdalv7e3zfbpWAiVyT_U9CQuopj0FFng-wrHmyStjq',
    ]"
  >
    <button @click="flipbook.flipLeft">Previous Page</button>
    <button @click="flipbook.flipRight">Next Page</button>
  </flipbook>
</div>
</template>

<script >
import Vue from "vue";
import Flipbook from "flipbook-vue";

export default {
  components: { Flipbook },
};
</script>

<style scoped>
.Home{
display: flex;
margin: auto;
width: 600px;
}
.flipbook {
  width: 600px;
  height: 700px;
  background-color: #fffbd5;
}
</style>