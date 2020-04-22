<template>
    <section class="msize">
           <!--首页头部-->
            <HeaderTop :title = address>
              <span class="header_search" slot = "left">
                <i class="iconfont iconsousuo"></i>
              </span>
              <span slot="right">
                <span class="header_login" slot = "right">
                  <span class="header_login_text">登录|注册</span>
                </span>
              </span>
            </HeaderTop>
          <div class="miste-content-wrapper">
            <!--轮播分类导航-->
            <div class="msize_nav">
              <!--首页导航-->
            <nav class="msite_nav">
              <SwiperNav></SwiperNav>
            </nav>
            </div>
            <!--附近商家-->
            <div>
                222
            </div>
          </div>
    </section>
</template>
<script>
import HeaderTop from '../components/HeaderTop.vue'
import SwiperNav from '../components/Mise/swiper/SwiperNav.vue'
export default {
  components: {
    HeaderTop,
    SwiperNav
  },
  data () {
    return {
      address: '软件谷科创城A1南'
    }
  }
}
</script>

<style lang="stylus" ref="stylesheet/stylus">
 @import "../assets/stylus/mixins.styl"
.msite  //首页
  width 100%
 .miste-content-wrapper
      position fixed
      top: 45px
      bottom: 46px
      width: 100%
      .msite_nav
         bottom-border-1px(#e4e4e4)
         margin-top 15px
         height 200px
         background #fff
</style>
