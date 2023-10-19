function addLocationObserver(callback) {
  const config = { attributes: false, childList: true, subtree: false };

  const observer = new MutationObserver(callback);

  observer.observe(document.body, config);
}

function clickButton() {
  const getVideoId = window.location.search.split("=")[1].split("&")[0];
  window.open(
    "https://www.youtube.com/embed/" + getVideoId + "?autoplay=1",
    "_blank"
  );
}

function manageElement() {
  const getButtonGroup = document.querySelector("#top-level-buttons-computed");
  const getYoutubeVideoNoPubButton = document.querySelector("#youtube-no-pub");

  if (getYoutubeVideoNoPubButton) {
    getYoutubeVideoNoPubButton.removeEventListener("click", clickButton);
    getYoutubeVideoNoPubButton.remove();
  }
  if (getButtonGroup) {
    const newButton = document.createElement("button");
    newButton.id = "youtube-no-pub";
    newButton.style =
      "border: none; border-radius: 2rem; padding: 1rem; font-weight: bold; cursor: pointer;";
    newButton.innerHTML = "Youtube sans pub";
    getButtonGroup.appendChild(newButton);

    document
      .querySelector("#youtube-no-pub")
      .addEventListener("click", clickButton);
  }
}

function observerCallback() {
  if (window.location.href.startsWith("https://www.youtube.com/watch?v=")) {
    manageElement();
  }
}

addLocationObserver(observerCallback);
observerCallback();
