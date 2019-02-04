<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      <router-link :to="`/video-player/${item.id}`">
        <img
          :src="item.snippet.thumbnails.medium.url"
          :width="item.snippet.thumbnails.medium.width"
          :height="item.snippet.thumbnails.medium.height"
          :alt="item.snippet.thumbnails.title"
        />
        <div>{{ item.snippet.title.substr(0, 30) }}</div>
        <div>{{ item.snippet.channelTitle }}</div>
        <div>
          Published {{ new Date(item.snippet.publishedAt).toDateString() }}
        </div>
        <div>{{ item.statistics.viewCount }} Views</div>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListView",
  props: {
    items: Array
  }
};
</script>
