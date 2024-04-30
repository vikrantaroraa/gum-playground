const videoEl = document.querySelector("#my-video");
let stream = null; //creating a stream var so that we can use it later

const constraints = {
  audio: true, // use your headphones, or be prepared for feedback
  video: true,
};

const getMicAndCamera = async (e) => {
  try {
    stream = await navigator.mediaDevices.getUserMedia(constraints);
    console.log(stream);
    // const tracks = stream.getTracks();
    // console.log(tracks);
    changeButtons([
      "green",
      "blue",
      "blue",
      "grey",
      "grey",
      "grey",
      "grey",
      "grey",
    ]);
  } catch (error) {
    // user denied access to constraints
    console.log("user denied access to constraints");
    console.log("error: ", error);
  }
};

const showMyFeed = (e) => {
  if (!stream) {
    alert("stream still loading...");
    return;
  }
  videoEl.srcObject = stream; // this will set our MediaStream (stream) to <video />
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "blue",
    "grey",
    "grey",
    "blue",
  ]);
};

const stopMyFeed = (e) => {
  if (!stream) {
    alert("stream still loading...");
    return;
  }
  const tracks = stream.getTracks();
  tracks.forEach((track) => {
    // console.log(track);
    track.stop(); //dis-associates src from the track and sets track state to ended
  });
  changeButtons([
    "blue",
    "grey",
    "grey",
    "grey",
    "hrey",
    "grey",
    "grey",
    "grey",
  ]);
};

document
  .getElementById("share")
  .addEventListener("click", (e) => getMicAndCamera(e));

document
  .getElementById("show-video")
  .addEventListener("click", (e) => showMyFeed(e));

document
  .getElementById("stop-video")
  .addEventListener("click", (e) => stopMyFeed(e));

document
  .getElementById("change-size")
  .addEventListener("click", (e) => changeVideoSize(e));

document
  .getElementById("start-record")
  .addEventListener("click", (e) => startRecording(e));

document
  .getElementById("stop-record")
  .addEventListener("click", (e) => stopRecording(e));

document
  .getElementById("play-record")
  .addEventListener("click", (e) => playRecording(e));

document
  .getElementById("share-screen")
  .addEventListener("click", (e) => shareScreen(e));
