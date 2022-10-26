// API section--------------------------------------------------------------------
let API_releted = "AIzaSyAVAcPCjcRQmyXheeLYem2Qfy057CSuNtM";
// API section--------------------------------------------------------------------



// Related video will display on right side
let videoNum = (videoId) => {
    let getData = async () => {
        try {
            let res = await fetch(
                // `https://youtube.googleapis.com/youtube/v3/search?%20&key=${API}&part=snippet&maxResults=${20}`
                `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${videoId}&type=video&key=${API_releted}&part=snippet&maxResults=${10}`
            );
            // console.log('res:', res)
            let { items } = await res.json();
            // console.log('items:', items)
            let array_of_video = items;
            console.log("array_of_video:", array_of_video);


            appendData(array_of_video); // Calling data from here
        } catch (error) {
            console.log("err:", "Hey There, we got an error")
        }
    }
    getData()

    let appendData = (data) => {
        console.log('data:', data)
        // console.log("data[0]",data[1]);
        // search_result.innerHTML = null;
        // ({ snippet, snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } })
        data.forEach(({snippet, snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } }) => {
            console.log('title:', title)
            // console.log('url:', url)
            // console.log('videoId:', videoId)

            let thubnail_Image = document.createElement("img");
            thubnail_Image.src = url;
            thubnail_Image.setAttribute("class", "thubnail_Image")

            let titlE_Div = document.createElement("h5");
            titlE_Div.innerText = title;
            titlE_Div.setAttribute("class", "titlE_Div");

            let div = document.createElement("div");
            let div_container = document.createElement("div");
            div_container.setAttribute("class", "div_container");

            channelTitle = document.createElement("p");
            channelTitle.innerText = `${snippet.channelTitle} ☑`;

            let div22 = document.createElement("div");
            let div_bottom = document.createElement("div");
            div_bottom.setAttribute("id", "div_bottom")

            div22.append(titlE_Div, channelTitle, div_bottom)
            div_container.append(div22)

            div.append(thubnail_Image, div_container)
            container2.append(div)

        })
    };
}


// WORKING RELATED VIDEO
let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");

let getsnippetArr = JSON.parse(localStorage.getItem("Going To Next Page:")) || [];
console.log('getsnippetArr:', getsnippetArr)

let appendDataR = (data) => {
    console.log('data:', data)

    search_result.innerHTML = null;
    //  snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } }
    console.log("ashish")
    data.forEach(({ videoId, snippet, snippet: { title }, snippet: { channelTitle } }) => {
        console.log('videoId:', videoId)
        console.log('channelTitle:', channelTitle)
        // console.log('title:', title);
        // console.log('snippet:', snippet);

        videoNum(videoId);
        // OsU0CGZoV8E
        var Vid="AgS_6UbQ8JM";
         let iframe = document.createElement("iframe");
         iframe.src = `https://www.youtube.com/embed/${videoId}`;
         iframe.width = '100%';
         iframe.height = '100%';
         iframe.allow = "fullscreen"

         let container = document.createElement("div");
         container.setAttribute("class", "container");

         let div2 = document.createElement("div");
         div2.setAttribute("class", "div2 ")
         let titlE_Div = document.createElement("h5");
         titlE_Div.innerText = title;
         titlE_Div.setAttribute("class", "titlE_Div");

         channelTitle = document.createElement("p");
         channelTitle.innerText = `${snippet.channelTitle} ☑`;
         // console.log('channelTitle_first_chara:', snippet.channelTitle[0])

         let firstCharacter = document.createElement("h5");
         firstCharacter.innerText = snippet.channelTitle[0]

         let div21 = document.createElement("div");
         let div22 = document.createElement("div");
         let div_bottom = document.createElement("div");
         div_bottom.setAttribute("id", "div_bottom")

         div21.append(firstCharacter)
         div22.append(titlE_Div, channelTitle, div_bottom)
         div2.append(div21, div22)
         container1.append(iframe,div2)
        // search_result.append(container);
    });
};
appendDataR(getsnippetArr);



