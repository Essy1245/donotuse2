new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Sorry not Sorry",
          artist: "ITZY",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/itzy_guesswho.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/sorrynotsorry.mp3",
          url: "https://youtu.be/nQKIWy27zN4",
          favorited: false
        },
        {
          name: "마.피.아. In the morning",
          artist: "ITZY",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/itzy_guesswho.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/Mafia.mp3",
          url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
          favorited: false
        },
        {
          name: "Not Shy",
          artist: "ITZY",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/notshy.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/Not_shy.mp3",
          url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
          favorited: false
        },
        {
          name: "Kidding Me",
          artist: "ITZY",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/itzy_guesswho.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/Kidding_me.mp3",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false
        },
        {
          name: "Aether",
          artist: "Geoxor",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/aether.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/Aether.mp3",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: true
        },
        {
          name: "Lucid Dream",
          artist: "Geoxor & Panda Eyes",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/luciddream.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/luciddream.mp3",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false
        },
        {
          name: "Crystalized",
          artist: "Camellia",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/crystallized.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/crystalized.mp3",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: true
        },
        {
          name: "Sakura",
          artist: "Geoxor & Canonblade",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/sakura.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/sakura.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "Stardust",
          artist: "Geoxor",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/stardust.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/stardust.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "Perfume!",
          artist: "fusq",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/perfume.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/perfume.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "Galaxy",
          artist: "Geoxor",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/galaxy.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/galaxy.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "Wonder Pop",
          artist: "Moe shop",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/wonderpop.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/wonderpop.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "Nana",
          artist: "Geoxor",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/nana.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/nana.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "Bloodlust",
          artist: "Geoxor",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/bloodlust.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/bloodlust.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "Ping",
          artist: "Exyl",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/ping.jfif",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/ping.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "Lagtrain",
          artist: "inabakumori",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/lagtrain.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/lagtrain.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false
        },
        {
          name: "WWW",
          artist: "Moe shop",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/www.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/www.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false
        },
        {
          name: "I don't care about Christmas though",
          artist: "Camellia & Nanahira",
          cover: "https://raw.githubusercontent.com/Essy1245/donotuse2/main/player/img/boringchristmas.jpg",
          source: "https://github.com/Essy1245/donotuse2/raw/main/player/audio2/boringchristmas.mp3",
          url: "https://www.youtube.com/watch?v=jFt4GIgtpBE",
          favorited: true
        }
      
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
