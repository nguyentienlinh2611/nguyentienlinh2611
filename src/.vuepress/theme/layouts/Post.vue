<template>
  <div class="wrapper">
    <router-link class="back-button" to="/">
      <ArrowLeftIcon />
      <span>Back</span>
    </router-link>
    <div class="post-layout">
    <article
        class="post-content"
        itemscope
        itemtype="https://schema.org/BlogPosting"
    >
      <div class="post-cover-image">
        <figure>
          <img class="post-image" v-bind:src="$frontmatter.thumbnail" v-bind:alt="$frontmatter.title">
        </figure>
      </div>
      <header>
        <h1 class="post-title" itemprop="name headline">
          {{ $frontmatter.title}}
        </h1>
        <PostMeta
            v-bind:tags="$frontmatter.tags"
            v-bind:author="$frontmatter.author"
            v-bind:date="$frontmatter.date"
        />
      </header>
      <Content itemprop="articleBody" />
      <footer>
        <Newsletter v-if="$service.email.enabled" />
        <hr />
        <Comment />
      </footer>
    </article>
    <Toc class="post-toc" />
  </div>
  </div>
</template>

<script>
import Toc from '@theme/components/Toc'
import PostMeta from '@theme/components/PostMeta.vue'
import { Comment } from '@vuepress/plugin-blog/lib/client/components'
import Newsletter from '@theme/components/Newsletter'
import { ArrowLeftIcon } from 'vue-feather-icons'

export default {
  name: "Post",
  components: {
    Toc,
    PostMeta,
    Comment,
    Newsletter,
    ArrowLeftIcon
  },
}
</script>

<style lang="stylus">
@import '~jeet/styl'

.wrapper
  position relative
  .back-button
    text-decoration none
    display inline-flex
    align-items center
    margin-bottom 1em
    padding 0.5em
    position absolute
    font-size 0.85em
    top -60px
    left 0
    transition all .35s cubic-bezier(.13,.43,.54,1.82)

    &:hover
      -webkit-transform scale(1.1)
      transform scale(1.1)
      left -10px

    svg
      margin-right 0.3em
      width 1em
      height 1em

  .post-layout
    display flex
    justify-content space-between

    .post-content
      column(4/5, $gutter: 5)

      .post-cover-image
        background-color #fafafa
        max-height 500px
        overflow hidden
        padding 0
        .post-image
          height 100%
          width 100%

      .newsletter__content
        white-space pre-wrap

    .post-toc
      column(1/5)

</style>
