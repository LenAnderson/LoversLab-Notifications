onmessage = function(evt) {
  console.log('message received: ', evt);
  const note = evt.data;
  self.registration.showNotification(note.title, {
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
