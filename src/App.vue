<script setup lang="ts"></script>

<template>
  <header class="nav">
    <router-link to="/">首页</router-link>
    <router-link to="/articles">文章列表</router-link>
    <router-link to="/about">关于我</router-link>
  </header>
  <router-view />
</template>
<style>
.nav {
  padding: 16px;
  background: #222;
}
.nav a {
  color: #fff;
  margin-right: 16px;
  text-decoration: none;
}
a.router-link-active {
  color: #42b983;
}
</style>
