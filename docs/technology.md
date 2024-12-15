---
layout: home

hero:
  name: Technology
  text: User Guides

editLink: false
---

<script setup>
import { withBase } from 'vitepress';
import { data as posts } from '/data/technology.data';
import getSorted from '/.vitepress/theme/utils/getSorted';
const sortedPosts = getSorted( posts );
import members from './data/staff.data.json';
import { getMember } from '/.vitepress/theme/utils/membersUtils';
</script>

<section class="blog-posts">
  <ul class="post-list">
    <li class="post-item" v-for="post of sortedPosts">
      <p class="post-meta">
        <img :src="getMember(members, post.frontmatter.author).avatar" alt="{{ getMember(members, post.frontmatter.author).name }}" class="author-image" />
        <span class="post-author">{{ getMember(members, post.frontmatter.author).name }}</span>&nbsp;&nbsp;  
        <span class="post-date">{{ new Date(post.frontmatter.date).toDateString() }}</span>
      </p>
      <h4 class="post-title"><a :href="withBase(post.url)">{{ post.frontmatter.title }}</a></h4>
      <p>{{ post.frontmatter.description }}...</p>
    </li>
  </ul>
</section>
