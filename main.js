Webcam.set({
    width: 400,
    height: 500,
    image_format: "png",
    png_quality: 90,

    constraint:{facingMode:"environment"}
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

