const videoElement = document.getElementById('video');
const button = document.getElementById('button');
// prompt user to select a media stream
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }

  } catch (error) {
    // catch error
    console.log('whooops, erro here', error);
  }
}

button.addEventListener('click', async () => {
  // disable button
  button.disabled = true;
  // start picture in picture
  await videoElement.requestPictureInPicture();
  // reset button
  button.disabled = false;
})

// On Load
selectMediaStream();