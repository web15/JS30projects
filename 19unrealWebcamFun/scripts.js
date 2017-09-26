//alert('connected');

const video =
document.querySelector('.player');
const canvas =
document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip =
document.querySelector('.strip');
const snap = document.querySelector('.snap');


function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
  .then(localMediaStream => {
    console.log(localMediaStream);
    video.src = window.URL.createObjectURL(localMediaStream);
    video.play();
  })
  .catch(err => {
    console.error('OH NO!!!', err);
  });
}

  function paintToCanvas()  {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = hright;

    return setInterval(() =>  {
      ctx.drawImage(video, 0, 0, width, height);
      // take the pixels out
      let pixels = ctx.getImageData(0, 0, width,height);
      // mess with them
      // pixels = redEffect(pixels);

      pixels = rgbSplit(pixels);
      // ctx.globalAlpha = 0.8;

      // pixels = greenScreen(pixels);
      // put them back
      ctx.putImageData(pixels, 0, 0);
    }, 16);
  }

  function takePhoto()  {
    // played the sound
    snap.currentTime = 0;
    snap.play();

    // take the data out of the canvas
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    link.setAttribute('donwload', 'handsome');
    link.innerHTML = `<img src="${data}" alt="Handsome Man"/>`;
    strip.insertBefore(link, strip.firstChild);
  }

  function redEffect(pixels)  {
    for(let i = 0; i < pivels.data.length; i+=4)  {
      pixels.data[i + 0] = pixel.data[i + 0] + 200; //RED
      pixels.data[i + 1] = pixel.data[i + 1] - 50; // GREEN
      pixels.data[i + 2] = pixel.data[i + 2] * 0.5; // Blue
    }
    return pixels;
  }

  function rgbSplit(pixels) {
    for(let i = 0; i < pivels.data.length; i+=4)  {
      pixels.data[i - 150] = pixel.data[i + 0]; //RED
      pixels.data[i + 500] = pixel.data[i + 1]; // GREEN
      pixels.data[i - 550] = pixel.data[i + 2]; // Blue
    }
    return pixels;
  }

  function

getVideo();
