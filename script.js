document.addEventListener("DOMContentLoaded", function () {
  const uploadButton = document.getElementById("upload-button");
  const backgroundUpload = document.getElementById("background-upload");
  const apiKeyInput = document.getElementById("api-key-input");

  uploadButton.addEventListener("click", () => {
    backgroundUpload.click();
  });

  backgroundUpload.addEventListener("change", (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    const apiKey = apiKeyInput.value.trim();
    if (!apiKey) {
      alert("Please enter your ImgBB API key.");
      return;
    }

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
          alert("Failed to upload image");
        }
      })
      .catch(() => {
        alert("Error uploading image");
      });
  });

  const savedBackgroundImage = localStorage.getItem("backgroundImage");
  if (savedBackgroundImage) {
    document.body.style.backgroundImage = `url(${savedBackgroundImage})`;
  }
});
