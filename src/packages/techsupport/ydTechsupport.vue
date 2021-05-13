<template>
    <div class="ql1d-techsup">
        <div class="ydimg-con">
            <img src="../../assets/tecTips.png" alt="" class="yd-jishu" @click="ishowydtech=true">
        </div>
        <div class="ydpopup-wrapper" :class="{'ybottom-up': ishowydtech}">
            <transition name="fade">
            <div class="yd-con"  v-if="ishowydtech">
                <div class="yd-title">技术支持<span class="close-btn" @click="ishowydtech=false"></span></div>
                <div class="yd-text">
                    <div class="tech-des">
                        <p>壹点传媒成立于2014年，是齐鲁晚报旗下的一流互联网科技传媒企业，是国家科技部审核认定的“国家高新技术企业”，是国内领先的媒体融合服务商。</p>
                        <p>壹点传媒致力于新技术与传统媒体深度融合，打造了包含智能移动采编系统、智能创作系统、智能追踪系统、版权保护系统等十余款拳头产品，助力媒体融合转型升级。</p>
                    </div>
                    <div class="link-detail">
                        <div class="link-tt">特色解决方案</div>
                        <div class="link-item"><a href="https://m.ql1d.com/new/techSupport/edit" target="_blank" class="links">移动采编一体化解决方案</a></div>
                        <div class="link-item"><a href="https://m.ql1d.com/new/techSupport/track" target="_blank" class="links">壹点智能追踪系统</a></div>
                        <div class="link-item"><a href="https://m.ql1d.com/new/techSupport/copyright" target="_blank" class="links">区块链版权保护平台</a></div>
                    </div>
                    <div class="phonenum">技术合作请致电：<a href="tel:0531-82625444">0531-82625444</a></div>
                </div>
            </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
    name:"ydTechsupport",
    data(){
        return {
            ishowydtech: false
        }
    }
}
</script>
<style lang="scss" scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(300px);
}
.link-item{
    margin-top: 10px;
}
.link-detail{
    padding-top: 30px;
}
.yd-title{
    font-size: 18px;
    font-weight: bold;
    text-align: center;
    position: relative;
    line-height: 48px;
    .close-btn{
        position: absolute;
        right: 10px;
        top: 11px;
        padding: 1px;
        width: 24px;
        height: 24px;
        background: url(../../assets/closed.png) no-repeat center center/18px;
    }
}
.links{
    color: #2872C9;
    border-bottom: 1px solid #2872C9;
    text-decoration: none;
}
.phonenum{
    text-align: center;
    padding-top: 56px;
    a{
        color: #2872C9;
        text-decoration: none;
    }
}
.link-tt,.phonenum{
    font-size: 12px;
    color: #B7B7B7;
}
.tech-des{
    line-height: 23px;
}
.yd-text{
    padding: 30px;
    padding-top: 46px;
    background: url('../../assets/tecBg.png') no-repeat center top/100% 100%;
    position: relative;
    &::before{
        content: "";
        display: inline-block;
        width: 30px;
        height: 25px;
        background: url(../../assets/tecIcon.png) no-repeat center center/100%;
        position: absolute;
        top: 14px;
        left: 20px;
    }
}
.yd-con{
    background-color: #fff;
    border-radius: 8px;
    color: #333;
    font-size: 15px;
    position: absolute;
    bottom: 0;
}
.ydpopup-wrapper{
    width: 100%;
    max-width: 375px;
    height: 100vh;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    bottom: 0;
    z-index: -1;
    opacity: 0;
}
.ybottom-up{
    z-index: 100;
    opacity: 1;
}
.ydimg-con{
    text-align: center;
}
.yd-jishu{
    width: 216px;
}
</style>