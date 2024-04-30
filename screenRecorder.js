let mediaRecorder;
let recordedBlobs;

const startRecording = () => {
  if (!stream) {
    alert("No current feed");
    return;
  }
  console.log("start recording");
  recordedBlobs = []; // an array to hold the blobs for playback
  mediaRecorder = new MediaRecorder(stream); // make a media recorder form the constructor
  mediaRecorder.ondataavailable = (e) => {
    // ondataavailable will run when the stream ends, or stopped,  or we specifically asked for it
    console.log("data is available");
    recordedBlobs.push(e.data);
  };
  mediaRecorder.start();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "blue",
    "grey",
    "blue",
  ]);
};

const stopRecording = () => {
  if (!mediaRecorder) {
    alert("please record before stopping!");
    return;
  }
  console.log("stop recording");
  mediaRecorder.stop();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "blue",
    "blue",
  ]);
};

const playRecording = () => {
  if (!recordedBlobs) {
    alert("No recording saved!");
  }
  console.log("play recording");
  const superBuffer = new Blob(recordedBlobs); //superBuffer is a super buffer of our array of blobs

  const recordedVideoEl = document.querySelector("#other-video");
  recordedVideoEl.src = window.URL.createObjectURL(superBuffer);
  recordedVideoEl.controls = true;
  recordedVideoEl.play();
  changeButtons([
    "green",
    "green",
    "blue",
    "blue",
    "green",
    "green",
    "green",
    "blue",
  ]);
};
