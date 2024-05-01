const audioInputEl = document.querySelector("#audio-input");
const audioOutputEl = document.querySelector("#audio-output");
const videoInputEl = document.querySelector("#video-input");

const getDevices = async () => {
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    console.log(devices);
    devices.forEach((d) => {
      const option = document.createElement("option"); // create the option tag
      option.value = d.deviceId;
      option.text = d.label;
      // add the option we just created to the right select
      if (d.kind === "audioinput") {
        audioInputEl.appendChild(option);
      } else if (d.kind === "audiooutput") {
        audioOutputEl.appendChild(option);
      } else if (d.kind === "videoinput") {
        videoInputEl.appendChild(option);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const chnageAudioInput = async (e) => {
  // user has changed audio input
  const deviceId = e.target.value;
  console.log("ye hai selected audio input device id: ", deviceId);
  const newConstraints = {
    audio: { deviceId: { exact: deviceId } },
    video: true,
  };

  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    console.log(stream);
    const tracks = stream.getAudioTracks();
    console.log(tracks);
  } catch (error) {
    console.log(error);
  }
};

const chnageAudioOutput = async (e) => {
  await videoEl.setSinkId(e.target.value);
  console.log("changed audio device!");
};

const chnageVideo = async (e) => {
  // user has changed video input
  const deviceId = e.target.value;
  console.log("ye hai selected audio input device id: ", deviceId);
  const newConstraints = {
    audio: true,
    video: { deviceId: { exact: deviceId } },
  };

  try {
    stream = await navigator.mediaDevices.getUserMedia(newConstraints);
    console.log(stream);
    const tracks = stream.getVideoTracks();
    console.log(tracks);
  } catch (error) {
    console.log(error);
  }
};

getDevices();
