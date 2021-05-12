// Create a Vue instance for the portfolio section
var porfolio = new Vue({
  el: "#portfolio",
  data: {
    projects: [
      {
        image: "./images/bmicalc.png",
        name: "BMI Calculator",
        desc: "See your BMI and other formulas for the body",
        site: "https://afdesignsbmicalc.netlify.app/",
        repo: "https://github.com/FlorezAdam-FS/BMICalc",
        languages: ["HTML", "CSS", "JS"],
        packages: ["Bootstrap"],
      },
      {
        image: "./images/musicplayer.png",
        name: "Music Player",
        desc: "created a static music player of songs I enjoy at the moment.",
        site: "https://afdesignsmusicplayer.netlify.app/",
        repo: "https://github.com/FlorezAdam-FS/MusicPlayer",
        languages: ["HTML", "CSS", "JS"],
        repos: [],
      },
      {
        image: "./images/stocks.png",
        name: "Historical Stock App",
        desc: "See historical data of a stock depending on the dates chosen using an api from MarketStack.com",
        site: "https://afdesignsstockapp.netlify.app/",
        repo: "https://github.com/FlorezAdam-FS/legendary-eureka",
        languages: ["HTML", "CSS", "JS"],
        packages: [
          "Bootstrap",
          "SweetAlert2",
          "fontawesome",
          "jQuery",
          "Daterangepicker.css",
          "moment",
        ],
      },
    ],
  },
});
