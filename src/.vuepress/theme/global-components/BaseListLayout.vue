<template>
  <div class="content-box">
    <AuthorBox/>
    <div class="posts" itemscope itemtype="https://schema.org/Blog">
      <ArticleCard class="col"
        v-for="page in pages"
        v-bind:key="page.key"
        v-bind:post="page"
      ></ArticleCard>
    </div>

    <component
      v-bind:is="paginationComponent"
      v-if="$pagination.length > 1 && paginationComponent"
    ></component>
  </div>
</template>

<script>
/* global THEME_BLOG_PAGINATION_COMPONENT */

import Vue from 'vue'
import {Pagination, SimplePagination} from '@vuepress/plugin-blog/lib/client/components'
import AuthorBox from "@theme/components/AuthorBox"
import ArticleCard from '@theme/components/ArticleCard'

export default {
  name: "BaseListLayout",
  components: {AuthorBox, ArticleCard, Pagination, SimplePagination},
  data() {
    return {
      paginationComponent: null,
    }
  },
  computed: {
    pages() {
      return this.$pagination.pages
    },
  },
  created() {
    this.paginationComponent = this.getPaginationComponent()
  },
  methods: {
    getPaginationComponent() {
      const n = THEME_BLOG_PAGINATION_COMPONENT
      if (n === 'Pagination') {
        return Pagination
      }
      if (n === 'SimplePagination') {
        return SimplePagination
      }
      return Vue.component(n) || Pagination
    },
  }
}
</script>

<style lang="stylus">
@import '~jeet/styl'

.content-box
  display flex
  flex-direction column

  .posts

    .col
      margin-bottom 80px
      column(1/3, $cycle: 3)

      @media (max-width: $MQNarrow)
        column(1/2, $cycle: 2)

      @media (max-width: $MQMobile)
        column(1, $cycle: 1)
</style>
