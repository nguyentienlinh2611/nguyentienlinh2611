<template>
  <article class="article-card" itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">

    <div class="text-box">
      <div class="image-box">

      </div>
    </div>
    <div class="text-container">
      <h3 class="title" itemprop="name headline">
        <NavLink v-bind:link="post.path">{{ post.title }}</NavLink>
      </h3>
      <client-only v-if="post.excerpt">
        <p class="description" itemprop="description" v-html="post.excerpt"></p>
      </client-only>
      <p v-else class="description" itemprop="description">
        {{ post.frontmatter.summary || post.summary }}
      </p>
      <footer>
        <span v-if="post.frontmatter.date" class="date">
          <time
              pubdate
              itemprop="datePublished"
              v-bind:datetime="post.frontmatter.date"
          >
            {{ resolvePostDate(post.frontmatter.date) }}
          </time>
        </span>
        <ul v-if="post.frontmatter.tags" class="tags" itemprop="keywords">
          <li class="tag-item">
            <router-link
                v-for="tag in resolvePostTags(post.frontmatter.tags)"
                :key="tag"
                :to="'/tag/' + tag"
            >
              {{ tag }}
            </router-link>
          </li>
        </ul>
      </footer>
    </div>
  </article>
</template>

<script>
import NavLink from '../global-components/NavLink'
import dayjs from 'dayjs'

export default {
  name: "ArticleCard",
  components: {NavLink},
  props: ['post'],
  methods: {
    resolvePostDate(date) {
      return dayjs(date)
          .format('ddd MMM DD YYYY')
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  }
}
</script>

<style lang="stylus">

</style>
