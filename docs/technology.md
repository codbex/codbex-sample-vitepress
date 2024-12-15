---
layout: home

hero:
  text: Technology
  tagline: User Guides

editLink: false
---

<script setup>
import { withBase } from 'vitepress'
import { data as posts } from '/data/technology.data'
import getSorted from '/.vitepress/theme/utils/getSorted';
const sortedPosts = getSorted( posts );
</script>

<section class="blog-posts">
  <ul class="post-list">
    <li class="post-item" v-for="post of sortedPosts">
      <h4 class="post-title"><a :href="withBase(post.url)">{{ post.frontmatter.title }}</a></h4>
      <p class="post-meta">
        <span class="post-date">{{ new Date(post.frontmatter.date).toDateString() }}</span> | 
        <span class="post-author">{{ post.frontmatter.author }}</span>
      </p>
      <p>{{ post.frontmatter.description }}...</p>
    </li>
  </ul>
</section>
