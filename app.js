const requestPermission = () => {
  Notification.requestPermission().then((permission) => {
    if (permission) {
      const notify = new Notification("Mattermost Community", {
        body: "There's a new chat in the community channel",
        icon: "/mattermost.png",
        vibrate:200
      });

      notify.addEventListener("click", () => {
        window.open("https://mattermost.com/");
      });
      setTimeout(() => {
        notify.close();
      }, 10 * 1000);
    } else {
      null;
    }
  });
};

new Notification(title,{body,})

if ("Notification" in window) {
  requestPermission();
} else {
  console.log("not available");
}
