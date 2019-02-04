<template>
  <div>
    <ListView :items="items" />
  </div>
</template>

<script>
import ListView from "./ListView";
import { getChannelVideos } from "../services/video";

export default {
  name: "ListViewWrapper",
  components: {
    ListView
  },
  methods: {
    getData: async function getData() {
      let items = [];
      try {
        const result = await getChannelVideos({
          videoCategoryId: this.$route.params.categoryId,
          chart: "mostPopular",
          regionCode: "US",
          part: "snippet,statistics",
          type: "video",
          maxResults: 6
        });
        items = result.items;
      } catch (e) {
        console.log(e);
      } finally {
        console.log("item", items);
        this.items = items;
      }
    }
  },
  data: function() {
    return {
      items: []
    };
  },
  watch: {
    $route: "getData"
  },
  created: function() {
    this.getData();
  }
};
</script>
