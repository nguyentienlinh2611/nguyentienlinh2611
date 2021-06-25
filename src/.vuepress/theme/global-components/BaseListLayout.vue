<template>
  <div class="content-box">
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
import ArticleCard from '../components/ArticleCard'

export default {
  name: "BaseListLayout",
  components: {ArticleCard, Pagination, SimplePagination},
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
  .posts

    .col
      column(1/3, $cycle: 3)
</style>
