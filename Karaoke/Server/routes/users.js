const express = require('express');
const router = express.Router();
const axios = require("axios");



let URL = "https://www.googleapis.com/youtube/v3/search?";



const getHtml = async () => {
  try {
    return await axios.get(URL);
  } catch (error) {
    console.error(error);
  }
};



router.get('/', function (req, res, next) {
  // let quest = "블랙핑크";
  let quest = req.query.searchQuery;
  quest = "블랙핑크";
  const size = 3;

  let optionParam = {
    q: quest,
    part: "snippet",
    // key:"AIzaSyCTTODURiPFsEDwZzTShHCMu_vmbumeaYY",
    // key:"AIzaSyAO-LUM67I3Q2sXqwBK_dijI-yP-Dh5Rc0",
    key: "AIzaSyCqXfyf0z7DzixrveVNDZeRe8nmflPFrWs",
    // key:"AIzaSyDAAnWYlP0k5__km1C_CxqzCxwp0QApOos",
    maxResults: size,
    type: "video"
  }

  optionParam.q = encodeURI(optionParam.q);

  for (let option in optionParam) {
    URL += option + "=" + optionParam[option] + "&";
  }
  URL = URL.substr(0, URL.length - 1);

  getHtml().then(body => {
    let yList = [];
    for (let i = 0; i < size; i++) {
      yList[i] = {
        "title": body.data.items[i].snippet.title,
        "description": body.data.items[i].snippet.description,
        "videoId": body.data.items[i].id.videoId,
        "thumbnails": {
          "url": body.data.items[i].snippet.thumbnails.default.url,
          "width": body.data.items[i].snippet.thumbnails.default.width,
          "height": body.data.items[i].snippet.thumbnails.default.height,
        },
      };
    };
    // console.log(yList);
    console.log(optionParam);
    res.send(yList);
    console.log(req);


  });
});

module.exports = router;