<template>
  <div ref="youtubePlayerAnchor">Video Player</div>
</template>

<script>
import { getYouTubePlayerInstance } from "../services/video";

export default {
  name: "VideoPlayer",
  data: function() {
    return {
      playerInstance: undefined
    };
  },
  props: {
    videoId: String
  },
  methods: {
    getPlayerIntance: async function() {
      this.playerInstance = await getYouTubePlayerInstance(
        this.$refs.youtubePlayerAnchor,
        {
          videoId: this.videoId
        }
      );
    }
  },
  mounted: function() {
    this.getPlayerIntance();
  }
};
</script>
