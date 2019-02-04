import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () =>
        import(/* webpackChunkName: "home" */ "./views/ListViewWrapper.vue")
    },
    {
      path: "/list-view/:categoryId",
      name: "listView",
      component: () =>
        import(/* webpackChunkName: "listView" */ "./views/ListViewWrapper.vue")
    },
    {
      path: "/video-player/:videoId",
      name: "videoPlayer",
      component: () =>
        import(/* webpackChunkName: "videoPlayer" */ "./views/VideoPlayerWrapper.vue")
    }
  ]
});
