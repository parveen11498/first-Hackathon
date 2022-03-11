var nav=document.createElement("nav")
nav.className="navbar"
var div=document.createElement("div")
div.className="toggle-btn"
var span=document.createElement("span")
var span1=document.createElement("span")
var span2=document.createElement("span")
div.append(span,span1,span2)
var img=document.createElement("img")
img.src="logo.PNG"
img.className="logo"
img.alt=""
var div1=document.createElement("div")
div1.className="search-box"
var input=document.createElement("input")
input.type="text"
input.className="search-bar"
input.placeholder="search"
var button=document.createElement("button")
button.className="search-btn"
var img1=document.createElement("img")
img1.src="search.PNG"
button.append(img1)
var img2=document.createElement("img")
img2.src="speaker.png"
img2.alt=""

var div2=document.createElement("div")
div2.className="user-options"
var img3=document.createElement("img")
img3.src="video.PNG"
img3.className="icon"
img3.id="crt"
img3.alt=""
var img4=document.createElement("img")
img4.className="icon"
img4.src="grid.PNG"
var img5=document.createElement("img")
img5.className="icon"
img5.src="bell.png"

var div3=document.createElement("div")
div3.className="user-dp"
var dpbt=document.createElement("button")
dpbt.id="dpbt"

var img6=document.createElement("img")
img6.src="profile-pic.png"
img6.alt=""
img6.id="dp"
dpbt.append(img6)


div3.append(dpbt)
div1.append(input,button,img2)

div2.append(img3,img4,img5)
nav.append(div,img,div1,div2,div3)

// sidebar
divside=document.createElement("div")
divside.className="side-bar"
a=document.createElement("a")
a.href="#"
a.className="links active"
imgs=document.createElement("img")
imgs.src="home.PNG"
a.append(imgs,"Home")

a1=document.createElement("a")
a1.href="#"
a1.className="links"
imgs1=document.createElement("img")
imgs1.src="explore.PNG"
a1.append(imgs1,"Explore")


a2=document.createElement("a")
a2.href="#"
a2.className="links"
imgs2=document.createElement("img")
imgs2.src="subscription.PNG"
a2.append(imgs2,"Subscriptions")

hr=document.createElement("hr")
hr.className="seperator"

a3=document.createElement("a")
a3.href="#"
a3.className="links"
imgs3=document.createElement("img")
imgs3.src="library.PNG"
a3.append(imgs3,"Library")

a4=document.createElement("a")
a4.href="#"
a4.className="links"
imgs4=document.createElement("img")
imgs4.src="history.PNG"
a4.append(imgs4,"History")

a5=document.createElement("a")
a5.href="#"
a5.className="links"
imgs5=document.createElement("img")
imgs5.src="your-video.PNG"
a5.append(imgs5,"Your videos")

a6=document.createElement("a")
a6.href="#"
a6.className="links"
imgs6=document.createElement("img")
imgs6.src="playlist.png"
imgs6.style="height: 25px; width:25px;"
a6.append(imgs6,"Your Playlist")

a7=document.createElement("a")
a7.href="#"
a7.className="links"
imgs7=document.createElement("img")
imgs7.src="watch-later.PNG"
a7.append(imgs7,"Watch-later")

a8=document.createElement("a")
a8.href="#"
a8.className="links"
imgs8=document.createElement("img")
imgs8.src="liked video.PNG"
a8.append(imgs8,"Liked videos")

a9=document.createElement("a")
a9.href="#"
a9.className="links"
imgs9=document.createElement("img")
imgs9.src="show more.PNG"
a9.append(imgs9,"Show more")
divside.append(a,a1,a2,hr,a3,a4,a5,a6,a7,a8,a9)

var pdiv=document.createElement("div")
pdiv.className="aligndiv"
var pimg=document.createElement("img")
pimg.src="profile-pic.png"
pimg.id="adj"
var h5=document.createElement("h5")
h5.innerHTML="Parvin Khan"
var p=document.createElement("p")
p.innerHTML="No subscription"
p.style.fontWeight="lighter"
p.style.fontSize="10px"
h5.append(p)

var cc=document.createElement("button")
cc.innerHTML="CUSTOMIZE CHANNEL"
cc.className="adjbutton"

cc.style="background-color:blue; color:white"
var mv=document.createElement("button")
mv.className="adjbutton1"
mv.style.marginLeft="50px"
mv.innerHTML="MANAGE VIDEOS"
mv.style="background-color:blue; color:white"
pdiv.append(pimg,h5,cc,mv)

var d=document.createElement("div")
d.id="d"
d.style.display="flex"

var ahdiv=document.createElement("button")
ahdiv.id="ahome"

ahdiv.innerHTML="HOME"
ahdiv.style="border:0px solid black;padding-left:15px;padding-right:15px;border-bottom:3px solid black;background-color:white "

var vhdiv=document.createElement("button")
vhdiv.id="ahome1"
vhdiv.innerHTML="VIDEOS"
vhdiv.style="border:0px solid black;padding-left:15px;padding-right:15px;background-color:white "

var phdiv=document.createElement("button")
phdiv.id="ahome2"
phdiv.innerHTML="PLAYLISTS"
phdiv.style="border:0px solid black;padding-left:15px;padding-right:15px;background-color:white "

var chdiv=document.createElement("button")
chdiv.id="ahome3"
chdiv.innerHTML="CHANNELS"
chdiv.style="border:0px solid black;padding-left:15px;padding-right:15px;background-color:white "


var abdiv=document.createElement("button")
abdiv.id="ahome4"
abdiv.innerHTML="ABOUT"
abdiv.style="border:0px solid black;padding-left:15px;padding-right:15px;background-color:white "

d.append(ahdiv,vhdiv,phdiv,abdiv)

// upload button
var uploadbtn=document.createElement("button")
uploadbtn.innerHTML="Upload Videos"
uploadbtn.style="margin-top:300px; margin-left:600px;background-color:blue; color:white;padding:5px"

// uploadvideos
divcon=document.createElement("div")
divcon.className="video-container1"

function uploadvideo(){
divcon.innerHTML+=`
<div class="video">
          <img src="profile-pic.png" class="thumbnail" alt="">
          <div class="content">
              <img src="profile-pic.png" class="channel-icon" alt="">
              <div class="info">
                  <h4 class="title">youtube clone 2022 | created working youtube clone</h4>
                  <p class="channel-name">youtubeclone</p>
              </div>
          </div>
      </div>
      fetch(video_http,{
        method:"POST",
        body:JSON.stringify(divcon),
      headers:{
        "Content-type":"application/json; charset=UTF-8",
      } ,
    })
`;

}

    



document.body.append(nav,divside,pdiv,d,divcon,uploadbtn)
