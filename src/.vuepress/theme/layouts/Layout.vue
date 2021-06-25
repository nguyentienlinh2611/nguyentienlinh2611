<template>
  <BaseListLayout v-if="$pagination" />
  <Content v-else />
</template>

<script>
export default {
  name: "Layout"
}
</script>

<style lang="stylus">

</style>
