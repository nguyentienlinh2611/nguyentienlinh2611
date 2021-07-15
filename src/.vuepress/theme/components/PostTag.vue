<template>
  <li class="post-tag">
    <router-link :to="'/tag/' + tag">
      <span>#{{ tag }}</span>
    </router-link>
  </li>
</template>

<script>
export default {
  name: 'PostTag',
  props: {
    tag: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="stylus">
.post-tag
    height 26px

  &:not(:last-child)
    margin-right 10px

  a
    background $postTagBgColor
    border-radius .2rem
    color $postTagColor
    font-size .55rem
    font-weight 900
    margin-right 5px
    padding .2rem .4rem
    text-decoration none
    text-transform uppercase
</style>
