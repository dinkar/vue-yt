<template>
  <div>
    <ul>
      <li v-for="videoCategory in videoCategories" :key="videoCategory.id">
        <router-link :to="`/list-view/${videoCategory.id}`">
          {{ videoCategory.snippet.title }}
        </router-link>
        |
      </li>
    </ul>
  </div>
</template>

<script>
import { getVideoCategories } from "../services/video";
export default {
  name: "Navbar",
  data: function() {
    return {
      videoCategories: []
    };
  },
  beforeCreate: async function() {
    const result = await getVideoCategories({
      chart: "mostPopular",
      regionCode: "US",
      part: "snippet"
    });

    this.videoCategories = result.items.slice(0, 10);
  }
};
</script>
