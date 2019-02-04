<template>
  <div>
    <VideoPlayer :videoId="$route.params.videoId" />
  </div>
</template>

<script>
import VideoPlayer from "./VideoPlayer";

export default {
  name: "VideoPlayerWrapper",
  components: {
    VideoPlayer
  }
};
</script>
