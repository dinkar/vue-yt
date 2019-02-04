let YTDataPromise;
let YTPlayerInstancePromise;
export const loadYouTubeDataAPI = () => {
  if (!YTDataPromise) {
    YTDataPromise = new Promise((resolve, reject) => {
      const tag = document.createElement("script");
      tag.src =
        "https://apis.google.com/js/api.js?key=AIzaSyDjvScCVoxXOHRDfzit4uQUGXnZI4LjJPw";

      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      tag.onload = () => handleClientLoad();
      tag.onreadystatechange = () => {
        if (this.readyState === "complete") {
          handleClientLoad();
        }
      };

      function initClient() {
        window.gapi.client
          .init({
            apiKey: "AIzaSyDjvScCVoxXOHRDfzit4uQUGXnZI4LjJPw",
            discoveryDocs: [
              "https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"
            ]
            // scope: 'https://www.googleapis.com/auth/youtube.force-ssl https://www.googleapis.com/auth/youtubepartner'
          })
          .then(() => {
            resolve();
          })
          .catch(err => {
            console.log("err", err);
            reject();
          });
      }
      function handleClientLoad() {
        window.gapi.load("client", initClient);
      }
    });
  }
  return YTDataPromise;
};

export const getSearchItems = params => {
  return new Promise((resolve, reject) => {
    window.gapi.client.youtube.search.list(params).execute(response => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response.result);
      }
    });
  });
};

export const getVideoCategories = params => {
  return new Promise((resolve, reject) => {
    window.gapi.client.youtube.videoCategories
      .list(params)
      .execute(response => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(response.result);
        }
      });
  });
};

export const getChannelVideos = params => {
  return new Promise((resolve, reject) => {
    window.gapi.client.youtube.videos.list(params).execute(response => {
      if (response.error) {
        reject(response.error);
      } else {
        resolve(response.result);
      }
    });
  });
};

export const getYouTubePlayerInstance = (el, params) => {
  if (!YTPlayerInstancePromise) {
    YTPlayerInstancePromise = new Promise(resolve => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => resolve(window.YT);
    });
  }

  return YTPlayerInstancePromise.then(({ Player }) => {
    return new Player(el, {
      height: 600,
      width: 1000,
      host: "https://www.youtube.com",
      ...params
    });
  });
};
