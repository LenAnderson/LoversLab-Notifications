console.log('this is the WebWorker');

onmessage = function(evt) {
  postMessage('message received');
  console.log('message received: ', evt);
  const note = evt.data;
  new Notification(note.title, {
    badge: note.icon,
    icon: note.icon,
    body: note.time,
    actions: [{action:'open', title:'Open'}]
  });
}
self.addEventListener('notificationclick', evt => {
  evt.preventDefault();
  console.log('note notifiationclicked', evt);
});
