// API section--------------------------------------------------------------------
let API_KEY = "AIzaSyAVAcPCjcRQmyXheeLYem2Qfy057CSuNtM";
// API section--------------------------------------------------------------------

let getDataM = async () => {
    try {
        let res = await fetch(
            // `https://youtube.googleapis.com/youtube/v3/search?%20&key=${API}&part=snippet&maxResults=${20}`
            `https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key=${API_KEY}&part=snippet&maxResults=${50}`
        );
        // console.log('res:', res)
        let { items } = await res.json();
        // console.log('items:', items)
        let array_of_video = items;
        // console.log("array_of_video:", array_of_video);


        appendDataM(array_of_video); // Calling data from here
    } catch (error) {
        console.log("err:", "Hey There, we got an error")
    }
}
getDataM()

let appendDataM = (data) => {
    console.log('data:', data)

    search_result.innerHTML = null;
    data.forEach(({ snippet, snippet: { title }, id: { videoId }, snippet: { thumbnails: { medium: { url } } } }) => {
        // console.log('snippet:', snippet);
        // console.log("videoId:", videoId);
        // console.log("title:", title);
        // console.log('url:', url)

        let container = document.createElement("div");
        container.setAttribute("class","container");
        
        let thubnail_Image = document.createElement("img");
        thubnail_Image.src = url;
        thubnail_Image.setAttribute("class", "thubnail_Image")

        let div2 = document.createElement("div");
        div2.setAttribute("class", "div2 ")
        let titlE_Div = document.createElement("h5");
        titlE_Div.innerText = title;
        titlE_Div.setAttribute("class", "titlE_Div");

        let channelTitle = document.createElement("p");
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
        container.append(thubnail_Image, div2)
        search_result.append(container);
    });
};

