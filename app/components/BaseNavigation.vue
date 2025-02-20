<template>
  <header class="py-4 border-b">
    <nav class="flex container items-center">
      <NuxtLink to="/" class="flex gap-1 items-center">
        <NuxtImg width="56px" densities="x1" src="/icon-green.png" alt="" format="webp" />
        <span class="text-3xl font-bold">NUXTレシピ</span>
      </NuxtLink>
      <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
        <li>
          <NuxtLink to="/">ホーム</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">概要</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
