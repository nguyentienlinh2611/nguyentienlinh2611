<template>
  <div class="post-layout">
    <article
        class="post-content"
        itemscope
        itemtype="https://schema.org/BlogPosting"
    >
      <header>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title}}
        </h1>
        <Content itemprop="articleBody" />
        <footer>
          <Newsletter v-if="$service.email.enabled" />
          <hr />
          <Comment />
        </footer>
      </header>
    </article>
    <Toc class="post-toc" />
  </div>
</template>

<script>
import Toc from '@theme/components/Toc'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
import Newsletter from '@theme/components/Newsletter'
export default {
  name: "Post",
  components: {
    Toc,
    Comment,
    Newsletter
  },
}
</script>

<style lang="stylus">
@import '~jeet/styl'

.post-layout
  display flex
  justify-content space-between


  .post-content
    column(4/5, $gutter: 5)
  .post-toc
    column(1/5)

</style>
