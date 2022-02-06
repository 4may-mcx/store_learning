<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.FooterShow"></Footer>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import Swiper from "swiper";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 调入一次可以使用多次
    this.$store.dispatch("categoryList");

    setTimeout(() => {
        var mySwiper = new Swiper(".swiper-container", {
        loop: true, // 循环模式选项

        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
        },

        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        // 如果需要滚动条
        scrollbar: {
          el: ".swiper-scrollbar",
        },
      });
    }, 2000);
  },
};
</script>

<style></style>
