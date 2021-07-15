<template>
  <article class="article-card" itemprop="blogPost" itemscope itemtype="https://schema.org/BlogPosting">

    <div class="post-thumbnail">
      <NavLink v-bind:link="post.path">
        <img v-if="post.frontmatter.thumbnail" v-bind:src="post.frontmatter.thumbnail">
      </NavLink>
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
        <div class="date" v-if="post.frontmatter.author && post.frontmatter.date">
          <span itemprop="author name">{{ post.frontmatter.author }}</span>&nbsp;wrote
          <span>
            <time
                pubdate
                itemprop="datePublished"
                v-bind:datetime="post.frontmatter.date"
            >
              {{ resolvePostDate(post.frontmatter.date) }}
            </time>
          </span>
        </div>
        <ul v-if="post.frontmatter.tags" class="tags" itemprop="keywords">
          <li class="tag-item">
            <router-link
                class="tag"
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
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export default {
  name: "ArticleCard",
  components: {NavLink},
  props: ['post'],
  methods: {
    resolvePostDate(date) {
      return dayjs(date).fromNow()
    },

    resolvePostTags(tags) {
      if (!tags || Array.isArray(tags)) return tags
      return [tags]
    },
  }
}
</script>

<style lang="stylus">
.article-card
  border-radius 5px
  background #FFFFFF
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
  box-shadow: 0 3px 4px rgba(0, 0, 0, 0.40);

  .post-thumbnail
    overflow: hidden;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.40);
    border-radius: 5px;
    height: 300px;

    img
      -webkit-transition: all .9s ease;
      -moz-transition: all .9s ease;
      -o-transition: all .9s ease;
      -ms-transition: all .9s ease;
      width: 100%;
      height: 300px;
      object-fit cover;

  .text-container
    padding: 10px 20px;

    .title
      margin: 10px 0;
      a
        text-decoration: none;

    .description
      margin: 10px 0;

    footer
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .date
        font-size: 0.65em;

      .tags
        margin: 0;
        .tag-item
          line-height: 32px;
          .tag
            background: $postTagBgColor;
            border-radius: .2rem;
            color: $postTagColor;
            font-size: .55rem;
            font-weight: 900;
            margin-right: 5px;
            padding: .2rem .4rem;
            text-decoration: none;
            text-transform: uppercase;


  &:hover
    box-shadow: 0 15px 26px rgba(0, 0, 0, 0.50);
    -webkit-transition: all 0.2s ease-in;
    -moz-transition: all 0.2s ease-in;
    -ms-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;

    img
      opacity: 0.7;
      -webkit-transform:scale(1.15);
      -moz-transform:scale(1.15);
      -ms-transform:scale(1.15);
      -o-transform:scale(1.15);
      transform:scale(1.15);
</style>
