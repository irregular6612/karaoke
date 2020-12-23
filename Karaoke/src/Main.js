import './Main.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import bgim from "./source/img/bgim.png";
import axios from "axios";


function Main() {

  const [inki, setInki] = useState({ textColor: "white", boxColor: ":#D8D8D8", fontWeight: 400, chartList: "hidden" });
  const [jaemok, setJaemok] = useState({ textColor: "white", boxColor: ":#D8D8D8", fontWeight: 400, finder: "hidden" });
  const [kasu, setKasu] = useState({ textColor: "white", boxColor: ":#D8D8D8", fontWeight: 400, finder: "hidden" });

  const [youtubeList, setYoutubeList] = useState([{
    title: "Title",
    thumbnails: "Thumbnails",
    videoId: "videoId",
    description: "Description"
  },
  {
    title: "Title",
    thumbnails: "Thumbnails",
    videoId: "videoId",
    description: "Description"
  },
  {
    title: "Title",
    thumbnails: "Thumbnails",
    videoId: "videoId",
    description: "Description"
  },
  {
    title: "Title",
    thumbnails: "Thumbnails",
    videoId: "videoId",
    description: "Description"
  },
  {
    title: "Title",
    thumbnails: "Thumbnails",
    videoId: "videoId",
    description: "Description"
  }
  ]);

  const inkiChartTop = [
    {
      title: "힘든 건 사랑이 아니다. - 임창정",
      thumbnails: {
        "url": "https://i.ytimg.com/vi/UbY2pP4YE_0/default.jpg",
        "width": 120,
        "height": 90
      },
      videoId: "UbY2pP4YE_0",
      description: "[TJ노래방] 힘든건사랑이아니다 - 임창정 / TJ Karaoke"
    },
    {
      title: "오래된 노래 - 스탠딩 에그",
      thumbnails: {
        "url": "https://i.ytimg.com/vi/E_ZoYKMirIU/default.jpg",
        "width": 120,
        "height": 90
      },
      videoId: "E_ZoYKMirIU",
      description: "[TJ노래방] 오래된 노래 - 스탠딩에그 (Standing Egg) / TJ Karaoke"
    },
    {
      title: "서면 역에서 - 순순히",
      thumbnails: {
        "url": "https://i.ytimg.com/vi/uqa1vQHBitM/default.jpg",
        "width": 120,
        "height": 90
      },
      videoId: "uqa1vQHBitM",
      description: "서면역에서 -- 순순희 TJ 노래방 곡번호.89855 TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 가서 불러보세요! 그리고 언제 어디서나 노래방처럼 노래 ..."
    },
    {
      title: "VVS - 미란이, 먼치맨 등...",
      thumbnails: {
        "url": "https://i.ytimg.com/vi/tBd0a0eYEUk/default.jpg",
        "width": 120,
        "height": 90
      },
      videoId: "tBd0a0eYEUk",
      description: "VVS -- 미란이,먼치맨,쿤디판다(Khundi Panda),머쉬베놈.. TJ 노래방 곡번호.75984 TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 가서 불러보세요!"
    },
    {
      title: "너의 번호를 누르고 - #안녕",
      thumbnails: {
        "url": "https://i.ytimg.com/vi/LQwVgL_mRvY/default.jpg",
        "width": 120,
        "height": 90
      },
      videoId: "LQwVgL_mRvY",
      description: "너의번호를누르고 -- #안녕(Prod.영화처럼) TJ 노래방 곡번호.54825 TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 가서 불러보세요! 그리고 언제 ..."
    },
    {
      title: "꿈속애 너 - 에이치코드",
      thumbnails: {
        "url": "https://i.ytimg.com/vi/NY1g8e1tKGI/default.jpg",
        "width": 120,
        "height": 90
      },
      videoId: "NY1g8e1tKGI",
      description: "꿈속에너 -- 에이치코드(Feat.전상근) TJ 노래방 곡번호.96763 TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 가서 불러보세요! 그리고 언제 어디서나 ..."
    },
    {
      title: "잠이 오질 않네요 - 장범준",
      thumbnails: {
        "url": "https://i.ytimg.com/vi/6Akcpu_eYAs/default.jpg",
        "width": 120,
        "height": 90
      },
      videoId: "6Akcpu_eYAs",
      description: "잠이오질않네요 -- 장범준 TJ 노래방 곡번호.75838 TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 가서 불러보세요! 그리고 언제 어디서나 노래방처럼 ..."
    },
    {
      title: "밤하늘의 별을(2020) - 경서",
      thumbnails: {
        "url": "https://i.ytimg.com/vi/ecRwWYkt4tc/default.jpg",
        "width": 120,
        "height": 90
      },
      videoId: "ecRwWYkt4tc",
      description: "밤하늘의별을(2020) -- 경서 TJ 노래방 곡번호.75943 TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 가서 불러보세요! 그리고 언제 어디서나 노래방 ..."
    },
    {
      title: "고무신 거꾸로 신지마 - 포스트맨",
      thumbnails: {
        "url": "https://i.ytimg.com/vi/mEo-yaFwntM/default.jpg",
        "width": 120,
        "height": 90
      },
      videoId: "mEo-yaFwntM",
      description: "Sense Of Betrayal -- Postmen -- TJ Karaoke Song NO. 38935 고무신 거꾸로 신지마 -- 포스트맨 -- TJ노래방 곡번호 38935 If you want more K-Pop Karaoke?"
    },
    {
      title: "취기를 빌려 - 산들",
      thumbnails: {
        "url": "https://i.ytimg.com/vi/gjhbOH9Vs44/default.jpg",
        "width": 120,
        "height": 90
      },
      videoId: "gjhbOH9Vs44",
      description: "취기를빌려(취향저격그녀 X 산들) -- 산들 TJ 노래방 곡번호.75384 TJ KARAOKE 유튜브 노래방으로 노래 연습하고 TJ 노래방에 가서 불러보세요! 그리고 언제 ..."
    },

  ];


  function searchYoutube(searchQuery) {

    axios.get(`/users?searchQuery=${searchQuery}`).then(datas => {
      let dataList = [];

      for (let i = 0; i < 5; i++) {
        dataList[String(i)] = datas.data[i];
      }

      setYoutubeList(dataList);
      console.log(dataList);

    });
  }

  function ListItem({ title, thumbnails, description, videoId }) {

    if (title !== "Title") {
      return (
        <div className="chartItem">

          <div className="imgBox" >
            <Link to={`/song/${videoId}`} ><img className="chartImg" src={thumbnails !== "Thumbnails" ? thumbnails : "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png"} alt="https://winaero.com/blog/wp-content/uploads/   2019/11/Photos-new-icon.png" /></Link>
          </div>

          <div className="introduction">
            <text style={{ color: "white", fontSize: "43px", marginTop: "15px" }}>{title}</text>
            <text style={{ color: "white", fontSize: "25px" }}>{description}</text>
          </div>
        </div>
      );
    }
    else {
      return (<></>);
    }

  }


  function enterkey1() {
    if (window.event.keyCode === 13) {
      let searchQuery = document.getElementById("searchquery").value;
      searchYoutube(searchQuery);
    }
  }

  function enterkey2() {
    if (window.event.keyCode === 13) {
      let searchquery2 = document.getElementById("searchquery2").value;
      searchYoutube(searchquery2);
    }
  }


  return (

    <div className="Main">

      <header></header>

      <body>
        <div className="wrapper">

          <div id="backGroundImageBox">
            <img id="backGroundImg" src={bgim} alt="backgoundimage" />
          </div>

          <div id="inkiChart" onClick={() => {
            if (inki["textColor"] === "white") {
              setInki({
                textColor: "red",
                boxColor: "black",
                fontWeight: 900,
                chartList: "visible"
              }
              );
            }
            else {
              setInki({
                textColor: "white",
                boxColor: "#D8D8D8",
                fontWeight: 400,
                chartList: "hidden"
              }
              );
            }
            setJaemok({
              textColor: "white",
              boxColor: "#D8D8D8",
              fontWeight: 400,
              finder: "hidden"
            }
            );
            setKasu({
              textColor: "white",
              boxColor: "#D8D8D8",
              fontWeight: 400,
              finder: "hidden"
            }
            );
          }
          }

            style={{ backgroundColor: inki["boxColor"] }}>

            <text className="menuTitle" style={{ color: inki["textColor"], fontWeight: inki["fontWeight"] }}>인기차트</text>
          </div>
          <div id="jaeMokChatKi" onClick={() => {
            if (jaemok["textColor"] === "white") {
              setJaemok({
                textColor: "red",
                boxColor: "black",
                fontWeight: 900,
                finder: "visible"
              }
              );
            }
            else {
              setJaemok({
                textColor: "white",
                boxColor: "#D8D8D8",
                fontWeight: 400,
                finder: "hidden"
              }
              );
            }
            setInki({
              textColor: "white",
              boxColor: "#D8D8D8",
              fontWeight: 400,
              chartList: "hidden"
            }
            );
            setKasu({
              textColor: "white",
              boxColor: "#D8D8D8",
              fontWeight: 400,
              finder: "hidden"
            }
            );
          }
          }

            style={{ backgroundColor: jaemok["boxColor"] }}>

            <text className="menuTitle" style={{ color: jaemok["textColor"], fontWeight: jaemok["fontWeight"] }}>제목 찾기</text>
          </div>
          <div id="kaSuChatKi" onClick={() => {
            if (kasu["textColor"] === "white") {
              setKasu({
                textColor: "red",
                boxColor: "black",
                fontWeight: 900,
                finder: "visible"
              }
              );
            }
            else {
              setKasu({
                textColor: "white",
                boxColor: "#D8D8D8",
                fontWeight: 400,
                finder: "hidden"
              }
              );
            }
            setInki({
              textColor: "white",
              boxColor: "#D8D8D8",
              fontWeight: 400,
              chartList: "hidden"
            }
            );
            setJaemok({
              textColor: "white",
              boxColor: "#D8D8D8",
              fontWeight: 400,
              finder: "hidden"
            }
            );
          }
          }

            style={{ backgroundColor: kasu["boxColor"] }}>

            <text className="menuTitle" style={{ color: kasu["textColor"], fontWeight: kasu["fontWeight"] }}>가수 찾기</text>
          </div>

          <div id="inkiChartList" style={{ visibility: inki["chartList"] }}>
            <div id="chartTitleBox" ><text id="chartTitle">TOP 10 Onlive</text></div>
            <ListItem title={inkiChartTop["0"].title.substr(0, 60)} thumbnails={inkiChartTop["0"].thumbnails.url} description={inkiChartTop["0"].description} videoId={inkiChartTop["0"].videoId}></ListItem>

            <ListItem title={inkiChartTop["1"].title.substr(0, 60)} thumbnails={inkiChartTop["1"].thumbnails.url} description={inkiChartTop["1"].description} videoId={inkiChartTop["1"].videoId}></ListItem>

            <ListItem title={inkiChartTop["2"].title.substr(0, 60)} thumbnails={inkiChartTop["2"].thumbnails.url} description={inkiChartTop["2"].description} videoId={inkiChartTop["2"].videoId}></ListItem>

            <ListItem title={inkiChartTop["3"].title.substr(0, 60)} thumbnails={inkiChartTop["3"].thumbnails.url} description={inkiChartTop["3"].description} videoId={inkiChartTop["3"].videoId}></ListItem>

            <ListItem title={inkiChartTop["4"].title.substr(0, 60)} thumbnails={inkiChartTop["4"].thumbnails.url} description={inkiChartTop["4"].description} videoId={inkiChartTop["4"].videoId}></ListItem>

            <ListItem title={inkiChartTop["5"].title.substr(0, 60)} thumbnails={inkiChartTop["5"].thumbnails.url} description={inkiChartTop["5"].description} videoId={inkiChartTop["5"].videoId}></ListItem>

            <ListItem title={inkiChartTop["6"].title.substr(0, 60)} thumbnails={inkiChartTop["6"].thumbnails.url} description={inkiChartTop["6"].description} videoId={inkiChartTop["6"].videoId}></ListItem>

            <ListItem title={inkiChartTop["7"].title.substr(0, 60)} thumbnails={inkiChartTop["7"].thumbnails.url} description={inkiChartTop["7"].description} videoId={inkiChartTop["7"].videoId}></ListItem>

            <ListItem title={inkiChartTop["8"].title.substr(0, 60)} thumbnails={inkiChartTop["8"].thumbnails.url} description={inkiChartTop["8"].description} videoId={inkiChartTop["8"].videoId}></ListItem>

            <ListItem title={inkiChartTop["9"].title.substr(0, 60)} thumbnails={inkiChartTop["9"].thumbnails.url} description={inkiChartTop["9"].description} videoId={inkiChartTop["9"].videoId}></ListItem>

          </div>




          <div className="finder" style={{ visibility: jaemok["finder"] }}>

            <input id="searchquery" className="typeBox" type="text" name="title" placeholder="Type the title..." onKeyUp={enterkey1} />

            <ListItem title={youtubeList["0"].title !== "Title" ? youtubeList["0"].title.substr(0, 60) : "Title"} thumbnails={youtubeList["0"].title !== "Title" ? youtubeList["0"].thumbnails.url : "Thumbnails"} description={youtubeList["0"].title !== "Title" ? youtubeList["0"].description : "Description"} videoId={youtubeList["0"].title !== "Title" ? youtubeList["0"].videoId : "videoId"}></ListItem>

            <ListItem title={youtubeList["1"].title !== "Title" ? youtubeList["1"].title.substr(0, 60) : "Title"} thumbnails={youtubeList["1"].title !== "Title" ? youtubeList["1"].thumbnails.url : "Thumbnails"} description={youtubeList["1"].title !== "Title" ? youtubeList["1"].description : "Description"} videoId={youtubeList["1"].title !== "Title" ? youtubeList["1"].videoId : "videoId"} ></ListItem>

            <ListItem title={youtubeList["2"].title !== "Title" ? youtubeList["2"].title.substr(0, 60) : "Title"} thumbnails={youtubeList["2"].title !== "Title" ? youtubeList["2"].thumbnails.url : "Thumbnails"} description={youtubeList["2"].title !== "Title" ? youtubeList["2"].description : "Description"} videoId={youtubeList["2"].title !== "Title" ? youtubeList["2"].videoId : "videoId"} ></ListItem>

            <ListItem title={youtubeList["3"].title !== "Title" ? youtubeList["3"].title.substr(0, 60) : "Title"} thumbnails={youtubeList["3"].title !== "Title" ? youtubeList["3"].thumbnails.url : "Thumbnails"} description={youtubeList["3"].title !== "Title" ? youtubeList["3"].description : "Description"} videoId={youtubeList["3"].title !== "Title" ? youtubeList["3"].videoId : "videoId"} ></ListItem>

            <ListItem title={youtubeList["4"].title !== "Title" ? youtubeList["4"].title.substr(0, 60) : "Title"} thumbnails={youtubeList["4"].title !== "Title" ? youtubeList["1"].thumbnails.url : "Thumbnails"} description={youtubeList["4"].title !== "Title" ? youtubeList["1"].description : "Description"} videoId={youtubeList["4"].title !== "Title" ? youtubeList["4"].videoId : "videoId"} ></ListItem>

          </div>


          <div className="finder" style={{ visibility: kasu["finder"] }}>
            <input id="searchquery2" className="typeBox" type="text" name="title" placeholder="Type the Singer..." onKeyUp={enterkey2} />

            <ListItem title={youtubeList["0"].title !== "Title" ? youtubeList["0"].title.substr(0, 60) : "Title"} thumbnails={youtubeList["0"].title !== "Title" ? youtubeList["0"].thumbnails.url : "Thumbnails"} description={youtubeList["0"].title !== "Title" ? youtubeList["0"].description : "Description"} videoId={youtubeList["0"].title !== "Title" ? youtubeList["0"].videoId : "videoId"}></ListItem>

            <ListItem title={youtubeList["1"].title !== "Title" ? youtubeList["1"].title.substr(0, 60) : "Title"} thumbnails={youtubeList["1"].title !== "Title" ? youtubeList["1"].thumbnails.url : "Thumbnails"} description={youtubeList["1"].title !== "Title" ? youtubeList["1"].description : "Description"} videoId={youtubeList["1"].title !== "Title" ? youtubeList["1"].videoId : "videoId"} ></ListItem>

            <ListItem title={youtubeList["2"].title !== "Title" ? youtubeList["2"].title.substr(0, 60) : "Title"} thumbnails={youtubeList["2"].title !== "Title" ? youtubeList["2"].thumbnails.url : "Thumbnails"} description={youtubeList["2"].title !== "Title" ? youtubeList["2"].description : "Description"} videoId={youtubeList["2"].title !== "Title" ? youtubeList["2"].videoId : "videoId"} ></ListItem>

            <ListItem title={youtubeList["3"].title !== "Title" ? youtubeList["3"].title.substr(0, 60) : "Title"} thumbnails={youtubeList["3"].title !== "Title" ? youtubeList["3"].thumbnails.url : "Thumbnails"} description={youtubeList["3"].title !== "Title" ? youtubeList["3"].description : "Description"} videoId={youtubeList["3"].title !== "Title" ? youtubeList["3"].videoId : "videoId"} ></ListItem>

            <ListItem title={youtubeList["4"].title !== "Title" ? youtubeList["4"].title.substr(0, 60) : "Title"} thumbnails={youtubeList["4"].title !== "Title" ? youtubeList["1"].thumbnails.url : "Thumbnails"} description={youtubeList["4"].title !== "Title" ? youtubeList["1"].description : "Description"} videoId={youtubeList["4"].title !== "Title" ? youtubeList["4"].videoId : "videoId"} ></ListItem>

          </div>



        </div>


      </body>
    </div>

  );
}


export default Main;
