<template>
  <div>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
             <div class="swiper-slide">
                 <a href="" class="link_to_food">
                     <div>
                         <!-- <img src="../assets/logo.png" alt=""> -->
                     </div>
                     <span>甜品饮料</span>
                 </a>
                   <a href="" class="link_to_food">
                     <div>
                         <!-- <img src="../assets/logo.png" alt=""> -->
                     </div>
                     <span>商超便利</span>
                 </a>
             </div>
            <div class="swiper-slide">slider2</div>
            <div class="swiper-slide">slider3</div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </nav>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'

export default {
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true, // 可选选项，自动滑动
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="stylus" ref = "stylesheet/stylus"></style>
