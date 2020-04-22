<template>
  <!--图片轮播-->
    <swiper :options="swiperOption">
      <swiper-slide class="swiper-slide">
       <a href="javascript:" class="link_to_food">
         <div class="food_container">
           <img src="../../../../static/imgs/nav/1.jpg">
         </div>
         <span>甜品饮品</span>
       </a>
       <a href="javascript:" class="link_to_food">
         <div class="food_container">
           <img src="../../../../static/imgs/nav/2.jpg">
         </div>
         <span>商超便利</span>
       </a>
       <a href="javascript:" class="link_to_food">
         <div class="food_container">
           <img src="../../../../static/imgs/nav/3.jpg">
         </div>
         <span>美食</span>
       </a>
       <a href="javascript:" class="link_to_food">
         <div class="food_container">
           <img src="../../../../static/imgs/nav/4.jpg">
         </div>
         <span>简餐</span>
       </a>
       <a href="javascript:" class="link_to_food">
         <div class="food_container">
           <img src="../../../../static/imgs/nav/5.jpg">
         </div>
         <span>新店特惠</span>
       </a>
       <a href="javascript:" class="link_to_food">
         <div class="food_container">
           <img src="../../../../static/imgs/nav/6.jpg">
         </div>
         <span>准时达</span>
       </a>
       <a href="javascript:" class="link_to_food">
         <div class="food_container">
           <img src="../../../../static/imgs/nav/7.jpg">
         </div>
         <span>预订早餐</span>
       </a>
       <a href="javascript:" class="link_to_food">
         <div class="food_container">
           <img src="../../../../static/imgs/nav/8.jpg">
         </div>
         <span>土豪推荐</span>
       </a>
      </swiper-slide>
      <swiper-slide class="swiper-slide">
      <a href="javascript:" class="link_to_food">
        <div class="food_container">
          <img src="../../../../static/imgs/nav/9.jpg">
        </div>
        <span>甜品饮品</span>
      </a>
      <a href="javascript:" class="link_to_food">
        <div class="food_container">
          <img src="../../../../static/imgs/nav/10.jpg">
        </div>
        <span>商超便利</span>
      </a>
      <a href="javascript:" class="link_to_food">
        <div class="food_container">
          <img src="../../../../static/imgs/nav/11.jpg">
        </div>
        <span>美食</span>
      </a>
      <a href="javascript:" class="link_to_food">
        <div class="food_container">
          <img src="../../../../static/imgs/nav/12.jpg">
        </div>
        <span>简餐</span>
      </a>
      <a href="javascript:" class="link_to_food">
        <div class="food_container">
          <img src="../../../../static/imgs/nav/13.jpg">
        </div>
        <span>新店特惠</span>
      </a>
      <a href="javascript:" class="link_to_food">
        <div class="food_container">
          <img src="../../../../static/imgs/nav/14.jpg">
        </div>
        <span>准时达</span>
      </a>
      <a href="javascript:" class="link_to_food">
        <div class="food_container">
          <img src="../../../../static/imgs/nav/1.jpg">
        </div>
        <span>预订早餐</span>
      </a>
      <a href="javascript:" class="link_to_food">
        <div class="food_container">
          <img src="../../../../static/imgs/nav/2.jpg">
        </div>
        <span>土豪推荐</span>
      </a>
      </swiper-slide>
      <!-- 分页器 -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
</template>
<script>
export default {
  data () {
    return {
      carouselArr: [
        '/static/imgs/Msize/swiper_01.jpg',
        '/static/imgs/Msize/swiper_02.jpg',
        '/static/imgs/Msize/swiper_03.jpg'
      ],
      swiperOption: {
        // 显示分页
        pagination: {
          el: '.swiper-pagination'
        },
        // 设置点击箭头
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        // 自动轮播
        autoplay: {
          delay: 2000,
          // 当用户滑动图片后继续自动轮播
          disableOnInteraction: false
        },
        // 开启循环模式
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
.swiper-container
   width 100%
   height 100%
   .swiper-wrapper
     width 100%
     height 100%
     .swiper-slide
       display flex
       justify-content center
       align-items flex-start
       flex-wrap wrap
       .link_to_food
         width 25%
         .food_container
           display block
           width 100%
           text-align center
           padding-bottom 10px
           font-size 0
           img
             display inline-block
             width 50px
             height 50px
         span
           display block
           width 100%
           text-align center
           font-size 13px
           color #666
   .swiper-pagination
     >span.swiper-pagination-bullet-active
       background #02a774
</style>
