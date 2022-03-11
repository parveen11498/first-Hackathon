var nav = document.createElement("nav")
nav.className = "navbar"
var div = document.createElement("div")
div.className = "toggle-btn"
var span = document.createElement("span")
var span1 = document.createElement("span")
var span2 = document.createElement("span")
div.append(span, span1, span2)
var img = document.createElement("img")
img.src = "logo.PNG"
img.className = "logo"
img.alt = ""
var div1 = document.createElement("div")
div1.className = "search-box"
var input = document.createElement("input")
input.type = "text"
input.className = "search-bar"
input.placeholder = "search"
var button = document.createElement("button")
button.className = "search-btn"
var img1 = document.createElement("img")
img1.src = "search.PNG"
img1.addEventListener("click",getdata)
button.append(img1)
var img2 = document.createElement("img")
img2.src = "speaker.png"
img2.alt = ""

var div2 = document.createElement("div")
div2.className = "user-options"
var img3 = document.createElement("img")
img3.src = "video.PNG"
img3.className = "icon"
img3.id = "crt"
img3.alt = ""
var img4 = document.createElement("img")
img4.className = "icon"
img4.src = "grid.PNG"
var img5 = document.createElement("img")
img5.className = "icon"
img5.src = "bell.png"

var div3 = document.createElement("div")
div3.className = "user-dp"
aa = document.createElement("a")
aa.href = "index1.html"

imgsa = document.createElement("img")
imgsa.src = "profile-pic.png"
aa.append(imgsa)

div3.append(aa)
div1.append(input, button, img2)

div2.append(img3, img4, img5)
nav.append(div, img, div1, div2, div3)

// sidebar
divside = document.createElement("div")
divside.className = "side-bar"
a = document.createElement("a")

a.className = "links active"
imgs = document.createElement("img")
imgs.src = "home.PNG"
a.append(imgs, "Home")

a1 = document.createElement("a")
a1.href = "#"
a1.className = "links"
imgs1 = document.createElement("img")
imgs1.src = "explore.PNG"
a1.append(imgs1, "Explore")


a2 = document.createElement("a")
a2.href = "#"
a2.className = "links"
a2.addEventListener("click",subscription)
imgs2 = document.createElement("img")
imgs2.src = "subscription.PNG"
a2.append(imgs2, "Subscriptions")

hr = document.createElement("hr")
hr.className = "seperator"

a3 = document.createElement("a")
a3.href = "#"
a3.className = "links"
imgs3 = document.createElement("img")
imgs3.src = "library.PNG"
a3.append(imgs3, "Library")

a4 = document.createElement("a")
a4.href = "#"
a4.className = "links"
imgs4 = document.createElement("img")
imgs4.src = "history.PNG"
a4.append(imgs4, "History")

a5 = document.createElement("a")
a5.href = "#"
a5.className = "links"
imgs5 = document.createElement("img")
imgs5.src = "your-video.PNG"
a5.append(imgs5, "Your videos")

a6 = document.createElement("a")
a6.href = "#"
a6.className = "links"
imgs6 = document.createElement("img")
imgs6.src = "playlist.png"
imgs6.style = "height: 25px; width:25px;"
a6.append(imgs6, "Your Playlist")

a7 = document.createElement("a")
a7.href = "#"
a7.className = "links"
imgs7 = document.createElement("img")
imgs7.src = "watch-later.PNG"
a7.append(imgs7, "Watch-later")

a8 = document.createElement("a")
a8.href = "#"
a8.className = "links"
imgs8 = document.createElement("img")
imgs8.src = "liked video.PNG"
a8.append(imgs8, "Liked videos")

a9 = document.createElement("a")
a9.href = "#"
a9.className = "links"
imgs9 = document.createElement("img")
imgs9.src = "show more.PNG"
a9.append(imgs9, "Show more")
divside.append(a, a1, a2, hr, a3, a4, a5, a6, a7, a8, a9)
// filters
divf = document.createElement("div")
divf.className = "filters"
var b1 = createb("button", "All", "filter-options active")
var b2 = createb("button", "CSS", "filter-options ")
var b3 = createb("button", "Computer Programs", "filter-options ")
var b4 = createb("button", "Playlists", "filter-options ")
var b5 = createb("button", "Bollywood Music", "filter-options ")
var b6 = createb("button", "Game show", "filter-options ")
var b7 = createb("button", "Comedies", "filter-options ")
var b8 = createb("button", "Music", "filter-options ")
var b9 = createb("button", "T-series", "filter-options ")
var b10 = createb("button", "Trending", "filter-options")

function createb(elename, value, className) {
    let resf = document.createElement(elename)
    resf.innerHTML = value
    resf.className = className

    return resf
}
divf.append(b1, b2, b3, b4, b5, b6, b7, b8, b9, b10)

divcon = document.createElement("div")
divcon.className = "video-container"
divcon.id = "hideshow"

document.body.append(nav, divside, divf, divcon,)

const videoCardContainer = document.querySelector('.video-container');

let api_key = "AIzaSyDEofeCIJf_39CT1T-x0N4gdZDY-rkQeKg";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";

let channel_http = "https://www.googleapis.com/youtube/v3/channels?";


fetch(video_http + new URLSearchParams({

    key: api_key,
    part: 'snippet',
    chart: 'mostPopular',
    maxResults: 50,
    regionCode: 'IN'
}))
    .then(res => res.json())
    .then(data => {
        data.items.forEach(item => {
            getChannelIcon(item);
        })
    })
    .catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
        .then(res => res.json())
        .then(data => {
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            makeVideoCard(video_data);
        })
}
const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
}
let subscription_http = "https://www.googleapis.com/youtube/v3/subscriptions?"
function subscription(){
    fetch(subscription_http + new URLSearchParams({
    
        key: api_key,
        part: 'snippet',
        mine: true,
        regionCode: 'IN'
    }))
        .then(res => res.json())
        .then(data => {
            data.items.forEach(item => {
                getChannelIcon(item);
            })
        })
        .catch(err => console.log(err));
    
    const getChannelIcon = (video_subdata) => {
        fetch(channel_http + new URLSearchParams({
            key: api_key,
            part: 'snippet',
            id: video_subdata.snippet.channelId
        }))
            .then(res => res.json())
            .then(data => {
                video_subdata.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
                makeVideoCard1(video_subdata);
            })
    }
    const makeVideoCard1 = (subdata) => {
        videoCardContainer1.innerHTML += `
        <div class="video1" onclick="location.href = 'https://youtube.com/watch?v=${subdata.id}'">
            <img src="${subdata.snippet.thumbnails.high.url}" class="thumbnail" alt="">
            <div class="content">
                <img src="${subdata.channelThumbnail}" class="channel-icon" alt="">
                <div class="info">
                    <h4 class="title">${subdata.snippet.title}</h4>
                    <p class="channel-name">${subdata.snippet.channelTitle}</p>
                </div>
            </div>
        </div>
        `;
    }
    }


 function getdata(){
    let cc=document.getElementsByClassName("search-bar").value;
    console.log(cc)
     fetch(`https://www.googleapis.com/youtube/v3/videos?q=${cc}&appid=AIzaSyDEofeCIJf_39CT1T-x0N4gdZDY-rkQeKg`);
    fetch(subscription_http + new URLSearchParams({
    
        key: api_key,
        part: 'snippet',
        mine: true,
        chart: 'mostPopular',
     
        regionCode: 'IN'
    }))
        .then(res => res.json())
        .then(data => {
            data.items.forEach(item => {
                getChannelIcon(item);
            })
        })
        .catch(err => console.log(err));
    
    const getChannelIcon = (video_subdata) => {
        fetch(channel_http + new URLSearchParams({
            key: api_key,
            part: 'snippet',
            id: video_subdata.snippet.channelId
        }))
            .then(res => res.json())
            .then(data => {
                video_subdata.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
                makeVideoCard2(video_subdata);
            })
    }
    const makeVideoCard2 = (subdata) => {
        videoCardContainer2.innerHTML += `
        <div class="video2" onclick="location.href = 'https://youtube.com/watch?v=${subdata.id}'">
            <img src="${subdata.snippet.thumbnails.high.url}" class="thumbnail" alt="">
            <div class="content">
                <img src="${subdata.channelThumbnail}" class="channel-icon" alt="">
                <div class="info">
                    <h4 class="title">${subdata.snippet.title}</h4>
                    <p class="channel-name">${subdata.snippet.channelTitle}</p>
                </div>
            </div>
        </div>
        `;
    }
    }




