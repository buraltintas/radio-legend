import "./App.css";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import logo from "./legend-logo-modified.png";

function App() {
  const audioList1 = [
    {
      name: "Radio Legend",

      cover: logo,
      musicSrc: "https://meral.radioca.st/;",
    },
  ];

  const options = {
    // audio lists model
    audioLists: audioList1,

    // default play index of the audio player  [type `number` default `0`]
    defaultPlayIndex: 0,

    // if you want dynamic change current play audio you can change it [type `number` default `0`]
    // playIndex: 0,

    // color of the music player theme    [ type: 'light' | 'dark' | 'auto'  default `dark` ]
    theme: "auto",

    // Specifies movement boundaries. Accepted values:
    // - `parent` restricts movement within the node's offsetParent
    //    (nearest node with position relative or absolute), or
    // - a selector, restricts movement within the targeted node
    // - An object with `left, top, right, and bottom` properties.
    //   These indicate how far in each direction the draggable
    //   can be moved.
    // Ref: https://github.com/STRML/react-draggable#draggable-api
    bounds: "body",

    /**
     * Don't interrupt current playing state when audio list updated
     * audioLists eg. (A) is current playing...
     * [A,B] => [A,C,B]
     * [A,B] => [A,B,C]
     *
     * if (A) not in updated audio lists
     * [A,B] => [C]
     * (C) is playing
     */
    // [type `boolean`, default `false`]
    quietUpdate: false,

    // Replace a new playlist with the first loaded playlist
    // instead of adding it at the end of it.
    // [type `boolean`, default `false`]
    clearPriorAudioLists: false,

    // Play your new play list right after your new play list is loaded turn false.
    // [type `boolean`, default `false`]
    autoPlayInitLoadPlayList: false,

    // Whether to load audio immediately after the page loads.  [type `Boolean | String`, default `false`]
    // "auto|metadata|none" "true| false"
    preload: false,

    // Whether the player's background displays frosted glass effect  [type `Boolean`, default `false`]
    glassBg: true,

    // The next time you access the player, do you keep the last state  [type `Boolean` default `false`]
    remember: false,

    // The Audio Can be deleted  [type `Boolean`, default `true`]
    remove: false,

    // audio controller initial position    [ type `Object` default '{top:0,left:0}' ]
    defaultPosition: {
      right: 100,
      bottom: 120,
    },

    // if you want dynamic change current play mode you can change it
    // [type`order | orderLoop | singleLoop | shufflePlay`, default `order`]
    // playMode: 'order',
    defaultPlayMode: "order",

    // audio mode        mini | full          [type `String`  default `mini`]
    mode: "full",

    /**
     * [ type `Boolean` default 'false' ]
     * The default audioPlay handle function will be played again after each pause, If you only want to trigger it once, you can set 'true'
     */
    once: false,

    // Whether the audio is played after loading is completed. [type `Boolean` default 'true']
    autoPlay: false,

    // Whether you can switch between two modes, full => mini  or mini => full   [type 'Boolean' default 'true']
    toggleMode: false,

    // audio cover is show of the "mini" mode [type `Boolean` default 'true']
    showMiniModeCover: true,

    // audio playing progress is show of the "mini"  mode
    showMiniProcessBar: false,

    // audio controller is can be drag of the "mini" mode     [type `Boolean` default `true`]
    drag: false,

    // drag the audio progress bar [type `Boolean` default `true`]
    seeked: false,

    // Display chrome media session.  [type `Boolean` default `false`]
    showMediaSession: true,

    // Displays the audio load progress bar.  [type `Boolean` default `true`]
    showProgressLoadBar: true,

    // play button display of the audio player panel   [type `Boolean` default `true`]
    showPlay: true,

    // reload button display of the audio player panel   [type `Boolean` default `true`]
    showReload: false,

    // download button display of the audio player panel   [type `Boolean` default `true`]
    showDownload: false,

    // loop button display of the audio player panel   [type `Boolean` default `true`]
    showPlayMode: false,

    // theme toggle switch  display of the audio player panel   [type `Boolean` default `true`]
    showThemeSwitch: true,

    // lyric display of the audio player panel   [type `Boolean` default `false`]
    showLyric: false,

    // destroy player button display  [type `Boolean` default `false`]
    showDestroy: false,

    // Extensible custom content       [type 'Array' default '-' ]
    extendsContent: null,

    // default volume of the audio player [type `Number` default `1` range `0-1`]
    defaultVolume: 1,

    // playModeText show time [type `Number(ms)` default `600`]
    playModeShowTime: 600,

    // Whether to try playing the next audio when the current audio playback fails [type `Boolean` default `true`]
    loadAudioErrorPlayNext: true,

    // Auto hide the cover photo if no cover photo is available [type `Boolean` default `false`]
    autoHiddenCover: true,

    // Play and pause audio through blank space [type `Boolean` default `false`]
    spaceBar: false,

    // international [type `en_US | zh_CN | Object` default `en_US`]

    // Enable responsive player, auto toggle desktop and mobile [type `Boolean` default `true`]
    responsive: true,

    /**
     * Custom mobile media query string, eg use the mobile version UI on iPad.
     * https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries
     * [type `String` default '(max-width: 768px) and (orientation : portrait)']
     */
    mobileMediaQuery: "(max-width: 3000px)",

    // Audio volume with fade in and fade out [type `{ fadeIn: number, fadeOut: number }` default `{ fadeIn: 0, fadeOut: 0 }`]
    volumeFade: {
      fadeIn: 1000,
      fadeOut: 1000,
    },
    /**
     * Restarts the current track when trying to play previous song, if the current time of the song is more than 1 second
        Otherwise, plays the previous song in the list
        [type `Boolean` default `false`]
    */
    restartCurrentOnPrev: false,

    // https://github.com/SortableJS/Sortable#options
    sortableOptions: {},

    // audio play progress handle
    // eslint-disable-next-line no-unused-vars
    onAudioProgress(audioInfo) {
      // console.log('audio progress', audioInfo)
    },

    // theme change handle
    // onThemeChange(theme) {
    //   console.log('theme change:', theme)
    // },

    // onPlayModeChange(playMode) {
    //   console.log('play mode change:', playMode)
    // },

    // onModeChange(mode) {
    //   console.log('mode change:', mode)
    // },

    // custom music player root node
    getContainer() {
      return document.body;
    },

    /**
     * @description get origin audio element instance , you can use it do everything
     * @example
     * audio.playbackRate = 1.5  // set play back rate
     * audio.crossOrigin = 'xxx' // config cross origin
     */

    onBeforeDestroy(currentPlayId, audioLists, audioInfo) {
      return new Promise((resolve, reject) => {
        // your custom validate
        // eslint-disable-next-line no-alert
        if (window.confirm("Are you confirm destroy the player?")) {
          // if resolve, player destroyed
          resolve();
        } else {
          // if reject, skip.
          reject();
        }
      });
    },
  };

  return (
    <div className="App">
      <ReactJkMusicPlayer {...options} />
    </div>
  );
}

export default App;
