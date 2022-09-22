if ("Notification" in window) {
  console.log("available");
} else {
  console.log("not available");
}

const requestPermission = () => {
  Notification.requestPermission().then((permission) =>
    permission
      ? console.log("permission granted")
      : console.log("permissiondenied")
  );
  const notify = new Notification("Mattermost Community", {
    body: "There's a new chat in the community channel",
    icon: "/mattermost.png" ,
  });

  notify.addEventListener("click", ()=>{
    window.open("https://mattermost.com/")
  })
};
requestPermission();

setTimeout(() => {
  notify.close()
}, 10 * 1000);

