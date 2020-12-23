const axios = require("axios");
let express = require('express');
let app = express();

app.get('/users/', function (req, res, next) {

    const size = 5;
    let URL = "https://www.googleapis.com/youtube/v3/search?";
    let quest = req.query.searchQuery;
    console.log(quest);

    let optionParam = {
        q: "노래방" + quest,
        part: "snippet",
        key: "AIzaSyCTTODURiPFsEDwZzTShHCMu_vmbumeaYY",
        // key:"AIzaSyAO-LUM67I3Q2sXqwBK_dijI-yP-Dh5Rc0",
        // key: "AIzaSyCqXfyf0z7DzixrveVNDZeRe8nmflPFrWs",
        // key:"AIzaSyDAAnWYlP0k5__km1C_CxqzCxwp0QApOos",
        maxResults: size,
        type: "video"
    }

    optionParam.q = encodeURI(optionParam.q);

    for (let option in optionParam) {
        URL += option + "=" + optionParam[option] + "&";
    }
    URL = URL.substr(0, URL.length - 1);

    const getHtml = async () => {
        try {
            return await axios.get(URL);
        } catch (error) {
            console.error(error);
        }
    };

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
        res.send(yList);
        // console.log(optionParam);

    });
});

// 3002번 포트넘버를 가진 서버 생성
const port = 3002;
app.listen(port, () => console.log(`listening on port ${port}!`));