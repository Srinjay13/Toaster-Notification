function createToaster(config) {
  return function (str) {
    const div = document.createElement("div");
    div.textContent = str;

    div.className = `inline-block ${
      config.theme === "dark"
        ? "bg-gray-800 text-white"
        : "bg-gray-100 text-black"
    } px-6 py-3 rounded shadow-lg`;

    // Play notification sound
    const sound = new Audio("notify.mp3");
    sound.volume = 0.3;
    sound.play();


    // Create Close Button
    const closeBtn = document.createElement("span");
    closeBtn.textContent = "×";
    closeBtn.className = "ml-3 text-xl font-bold cursor-pointer float-right";
    closeBtn.style.marginLeft = "10px";
    closeBtn.style.cursor = "pointer";

    // Add event listener for closing
    closeBtn.addEventListener("click", () => {
      // fade out before removing
      div.style.opacity = 0;
      setTimeout(() => {
        div.remove();
      }, 300);
    });

    // Append the close button to the toast div
    div.appendChild(closeBtn);

    const parent = document.querySelector(".parent");
    parent.appendChild(div);

    if (config.positionX !== "left" || positionY !== "top") {
      document.querySelector(".parent").className += ` ${
        config.positionX === "right" ? " right-5" : " left-5"
      } ${config.positionY === "bottom" ? " bottom-5" : " top-5"}`;
    }

    // Fade In
    div.style.opacity = 0;
    div.style.transition = "opacity 0.5s ease";
    requestAnimationFrame(() => (div.style.opacity = 1));

    // Fade Out and Remove
    setTimeout(() => {
      div.style.opacity = 0;
      setTimeout(() => div.remove(), 500);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "right",
  positionY: "top",
  theme: "dark",
  duration: 10,
});
toaster("Download Done !");
setTimeout(() => {
  toaster("Srinjay accepted your request");
}, 2000);

setTimeout(() => {
  toaster("Mome sent you a message");
}, 1500);
