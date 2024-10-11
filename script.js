document.addEventListener("DOMContentLoaded", function () {
  const uploadButton = document.getElementById("upload-button");
  const backgroundUpload = document.getElementById("background-upload");

  uploadButton.addEventListener("click", () => {
    backgroundUpload.click();
  });

  backgroundUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    const apiKey = 'YOUR_IMGBB_API_KEY';

    fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: 'POST',
      body: formData,
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          const imageUrl = data.data.url;
          document.body.style.backgroundImage = `url(${imageUrl})`;
          localStorage.setItem("backgroundImage", imageUrl);
        } else {
          console.error('Failed to upload image:', data);
          alert("Failed to upload image");
        }
      })
      .catch(error => {
        console.error('Error uploading image:', error);
        alert("Error uploading image");
      });
  });

  const savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) {
    document.body.style.backgroundImage = `url(${savedBackgroundImage})`;
  }

  function updateTime() {
    const vietnamTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    const tokyoTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });

    document.getElementById("vietnam-time").textContent = `Vietnam Time: ${vietnamTime}`;
    document.getElementById("tokyo-time").textContent = `Tokyo Time: ${tokyoTime}`;
  }

  setInterval(updateTime, 1000);
  updateTime();
});
