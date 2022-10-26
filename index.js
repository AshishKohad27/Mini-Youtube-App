// API section--------------------------------------------------------------------
let API = "AIzaSyAVAcPCjcRQmyXheeLYem2Qfy057CSuNtM";
// API section--------------------------------------------------------------------

let id;
let search_result = document.getElementById("search_result");
let navbar2 = document.getElementById("navbar2");
// let sortLH = document.getElementById("sortLH");
// let sortHL = document.getElementById("sortHL")
let snippetArr = JSON.parse(localStorage.getItem("Going To Next Page:")) || [];

function goingToNextPage(snippet,videoId) {
    snippetArr.pop();
    console.log("goingToNextPage:", snippet);
    // stored inside arr
    // stored arr inside local staorgae
    snippetObj={
        videoId:videoId,
        snippet:snippet
    }
    snippetArr.push(snippetObj);
    localStorage.setItem("Going To Next Page:", JSON.stringify(snippetArr));
    window.location.href="relatedVideo.html"
};

let getData = async () => {
    try {
        let qurey = document.getElementById("qurey").value;
        console.log("qurey:", qurey);

        let res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?q=${qurey}%20&key=${API}&part=snippet&maxResults=${48}`
        );
        let { items } = await res.json();
        // let data_Filter = {items}
        // console.log('data_Filter:', data_Filter)
        array_of_video = items;
        console.log("array_of_video:", array_of_video);            
        appendData(array_of_video); // Calling data from here

                //         // adding sort function
                // sortLH.addEventListener("click",sortLH);
                // function sortLH() {
                //     console.log("---------------------------------")
                //     data = data.sort(function (a, b) {
                //     return a.price - b.price; //40-100= return -1;
                //     })
                //     console.log("sort Low to High:", data)
                //     // displayData(data)
                //     appendProducts(data);
                // }

                // function sortHL() {
                //     console.log("***********************************")
                //     data = data.sort(function (a, b) {
                //     return b.price - a.price; //40-100= return -1;
                //     })
                //     console.log("sort High to Low:", data)
                //     // displayData(data)
                //     appendProducts(data);
                // }
    } catch (error) {
        console.log("err:", "Hey There we got an error")
    }
};

let appendData = (data) => {
    // console.log('data:', data)

    search_result.innerHTML = null;

    data.forEach(({ snippet, snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } }) => {
        // console.log('snippet:', snippet);
        // console.log("videoId:", videoId);
        // console.log("title:", title);
        // console.log('url:', url)

        let container = document.createElement("div");
        container.addEventListener("click", function () {
            // console.log("divimage");
            goingToNextPage(snippet,videoId);
        })

        let thubnail_Image = document.createElement("img");
        thubnail_Image.src = url;
        thubnail_Image.setAttribute("class", "thubnail_Image")

        let div2 = document.createElement("div");
        div2.setAttribute("class", "div2 ");

        let titlE_Div = document.createElement("h5");
        titlE_Div.innerText = title;
        titlE_Div.setAttribute("class", "titlE_Div");

        let channelTitle = document.createElement("p");
        channelTitle.innerText = `${snippet.channelTitle} ☑`;

        let firstCharacter = document.createElement("h5");
        firstCharacter.innerText = snippet.channelTitle[0]

        let div21 = document.createElement("div");
        let div22 = document.createElement("div");
        let div_bottom = document.createElement("div");
        div_bottom.setAttribute("id", "div_bottom")

        div21.append(firstCharacter)
        div22.append(titlE_Div, channelTitle, div_bottom)
        div2.append(div21, div22)
        container.append(thubnail_Image, div2)
        search_result.append(container);
    });
};
function debounce(func, delay) {
    if (id) {
        clearInterval(id);
    }
    id = setTimeout(()=>{
        func();
    },delay)
};

