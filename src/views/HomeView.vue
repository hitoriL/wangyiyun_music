<template>
  <div class="home">
    <h2>这才是我不朽的工作</h2>
    <ol>
      <li>安徒生年表：</li>
      <li>1805年4月2日出生于丹麦费恩岛奥登塞小镇。</li>
      <li>1816年11岁时父亲过世。</li>
      <li>1819年14岁时独自离家到哥本哈根，寻求创作机会。</li>
      <li>1822年8月发表作品《尝试集》，此集子因其出身寒微而无出版机会，但已引起文化界某些人士的注意，鼓起安徒生对写作的信心。</li>
      <li>1830年，初恋失败。开始旅行。</li>
      <li>1831－1834年，恋爱再度失败，遭逢母丧。</li>
      <li>1835年出版第一本童话集，作品并未获得一致好评，甚至有人认为他没有写童话的天份，建议他放弃，但安徒生说：“这才是我不朽的工作。”</li>
      <li>1844年，写出自传作品《丑小鸭》。</li>
      <li>1846年，写出《卖火柴的小女孩》。</li>
      <li>1875年8月4日，因肝癌死于朋友的乡间别墅。</li>
    </ol>
    <div class="textblog">
      <h3>编织纯美的童话世界去超越现世的苦难和内心的不安稳</h3>
      <p>写歌和写童话是一样的。写悲伤的歌不代表眼下刚好失恋。写明亮的歌不代表当前刚好愉悦。克服自己的情绪用理性去创作。而不是图一时的歌为心声、感情宣泄。</p>
    </div>
    <img src="@/assets/hslg.jpg" alt="" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">
.home {
  background-color: #000;
  height: 900px;
  color: #fff;
  text-align: center;
  .textblog {
    margin-top: 100px;
  }
}
</style>
