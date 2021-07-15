<template>
  <div class="post-meta">
    <div class="date" v-if="author && date">
      <ClockIcon />
      <span itemprop="author name">{{ author }}</span>&nbsp;wrote&nbsp;
      <span v-if="date">
            <time
                pubdate
                itemprop="datePublished"
                v-bind:datetime="date"
            >
              {{ resolvedDate }}
            </time>
          </span>
    </div>
    <ul v-if="tags" class="post-meta-tags" itemprop="keywords">
      <PostTag v-for="tag in resolvedTags" :key="tag" :tag="tag" />
    </ul>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { NavigationIcon, ClockIcon } from 'vue-feather-icons'
import PostTag from './PostTag.vue'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default {
  name: 'PostMeta',
  components: { NavigationIcon, ClockIcon, PostTag },
  props: {
    tags: {
      type: [Array, String],
    },
    author: {
      type: String,
    },
    date: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  computed: {
    resolvedDate() {
      return dayjs(this.date).fromNow()
    },
    resolvedTags() {
      if (!this.tags || Array.isArray(this.tags)) return this.tags
      return [this.tags]
    },
  },
}
</script>

<style lang="stylus">
.post-meta
  display flex
  flex-direction row
  justify-content space-between

  @media (max-width: $MQMobile)
    flex-direction column

  &-tags
    display flex
    flex-wrap wrap
    list-style none
    overflow hidden
    padding 0
    margin 0

    > li
      margin-bottom 10px

  > div
    display inline-flex
    font-size 0.85em
    align-items center
    margin-bottom 10px

  svg
    margin-right 5px
    width 14px
    height 14px
</style>
