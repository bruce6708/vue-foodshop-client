<template>
    <section class="msize">
           <!--首页头部-->
            <HeaderTop :title = address>
              <span class="header_search" slot = "left">
                <i class="iconfont iconsousuo"></i>
              </span>
              <span slot="right">
                <span class="header_login" slot = "right">
                  <router-link to="/login" class="header_login_text">登录|注册</router-link>
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
            <!-- 首页附近商家 -->
            <div class="msite_shop_list border-1px">
              <div class="shop_header">
                <i class="iconfont icon-xuanxiang"></i>
                <span class="shop_header_title">附近商家</span>
              </div>
              <ShopList />
            </div>
          </div>
    </section>
</template>
<script>
import HeaderTop from '../components/HeaderTop.vue'
import SwiperNav from '../components/Mise/swiper/SwiperNav.vue'
import ShopList from '../components/Mise/ShopList.vue'
import {mapState} from 'vuex'
import {reqTest, mgmtLogin} from '../api/index'
import * as utility from 'utility'
export default {
  components: {
    HeaderTop,
    SwiperNav,
    ShopList
  },
  mounted () {
    this.getTest()
    this.getTest1()
  },
  computed: {
    ...mapState(['test'])
  },
  data () {
    return {
      address: '软件谷科创城A1南'
    }
  },
  methods: {
    async getTest () {
      const result = await reqTest()
      console.log(result)
    },
    async getTest1 () {
      const pwd = utility.md5(123456)
      const result = await mgmtLogin('fyt', pwd)
      console.log(result)
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
 .msite_shop_list
         top-border-1px(#e4e4e4)
         margin-top 10px
         background #fff
         .shop_header
           padding 10px 10px 0
           .shop_icon
             margin-left 5px
             color #999
           .shop_header_title
             color #999
             font-size 14px
             line-height 20px
</style>
