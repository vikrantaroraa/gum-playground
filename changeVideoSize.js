const supportedContraints = navigator.mediaDevices.getSupportedConstraints();
console.log(supportedContraints);

const changeVideoSize = () => {
  stream.getVideoTracks().forEach((track) => {
    // track is a video track
    // we can get its capablities from ".getCapabilities()"
    // or we can apply constraints with ".applyConstraints()"
    const capabilities = track.getCapabilities();
    const height = document.querySelector("#vid-height").value;
    const width = document.querySelector("#vid-width").value;
    const vConstraints = {
      height: {
        exact:
          height < capabilities.height.max ? height : capabilities.height.max,
      },
      width: {
        exact: width < capabilities.width.max ? width : capabilities.width.max,
      },
      // frameRate: 5,
      // aspectRatio: 10,
    };
    track.applyConstraints(vConstraints);
  });

  // stream.getTracks().forEach((track) => {
  //   const capabilities = track.getCapabilities();
  //   console.log(capabilities);
  // });
};
