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
    const tracks = stream.getTracks();
    console.log(tracks);
  } catch (error) {
    // user denied access to constraints
    console.log("error: ", error);
  }
};

const showMyFeed = (e) => {
  videoEl.srcObject = stream; // this will set our MediaStream (stream) to <video />
};

const stopMyFeed = (e) => {
  const tracks = stream.getTracks();
  tracks.map((track) => {
    // console.log(track);
    track.stop(); //dis-associates src from the track and sets track state to ended
  });
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
