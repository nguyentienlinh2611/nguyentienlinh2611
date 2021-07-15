<template>
  <div class="author-box">
    <div class="avatar">
      <a href="/">
        <img v-bind:src="$themeConfig.avatarImg" alt="avatar"/>
      </a>
    </div>
    <div class="personality">
      <a v-bind:href="$themeConfig.socialPage">@{{$themeConfig.tagName}}</a>
      <client-only>
        <VueTyper v-if="$themeConfig.personalities"
                  v-bind:text="$themeConfig.personalities"
                  erase-style="backspace" v-bind:erase-delay="70"
                  v-bind:shuffle="true"></VueTyper>
      </client-only>
    </div>
    <div class="social-links-group">
      <ul v-if="$themeConfig.socialLinks">
        <li
            v-if="$themeConfig.socialLinks.github"
            key="github"
            class="social-button"
        >
          <a v-bind:href="$themeConfig.socialLinks.github" target="_blank">
            <GithubIcon />
          </a>
        </li>
        <li
            v-if="$themeConfig.socialLinks.linkedin"
            key="linkedin"
            class="social-button"
        >
          <a v-bind:href="$themeConfig.socialLinks.linkedin" target="_blank">
            <LinkedinIcon />
          </a>
        </li>
        <li
            v-if="$themeConfig.socialLinks.facebook"
            key="facebook"
            class="social-button"
        >
          <a v-bind:href="$themeConfig.socialLinks.facebook" target="_blank">
            <FacebookIcon />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import GithubIcon from '../assets/github.svg'
import LinkedinIcon from '../assets/linkedin.svg'
import FacebookIcon from '../assets/facebook.svg'

export default {
  name: "AuthorBox",
  components: {
    GithubIcon,
    LinkedinIcon,
    FacebookIcon,
    VueTyper
  }
}
</script>

<style lang="stylus">
.author-box
  display flex
  flex-direction column
  align-items center

  .avatar
    img
      width 200px
      height 200px
      vertical-align middle
      border-radius 50%
      transition: all .35s cubic-bezier(.13,.43,.54,1.82)
      margin-bottom 1.2em

      &:hover
        transform scale(1.2)
        -webkit-transform scale(1.2)

  .personality
    font-weight 500

  .social-links-group
    ul
      display flex
      flex-direction row
      padding 0

      li.social-button
        margin 1em
        transition: all .35s cubic-bezier(.13,.43,.54,1.82);

        &:hover
          transform scale(1.2)
          -webkit-transform scale(1.2)

        svg
          width 32px
          height 32px
</style>
