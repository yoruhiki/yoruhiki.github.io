document.addEventListener("DOMContentLoaded", function () {
  function updateTime() {
    const vietnamTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" });
    const tokyoTime = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo" });

    document.getElementById("vietnam-time").textContent = `Vietnam Time: ${vietnamTime}`;
    document.getElementById("tokyo-time").textContent = `Tokyo Time: ${tokyoTime}`;
  }

  setInterval(updateTime, 1000);
  updateTime();
});
