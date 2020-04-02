onmessage = function(evt) {
  console.log('message received: ', evt);
  const note = evt.data;
  const n = new Notification(note.title, {
    badge: note.icon,
    icon: note.icon,
    body: note.time,
    actions: [{action:'open', title:'Open'}]
  });
  n.addEventListener('click', evt => {
    evt.preventDefault();
    console.log('note clicked', note.url);
    window.open(note.url, '_blank');
  });
  n.addEventListener('notificationclick', evt => {
    evt.preventDefault();
    console.log('note notifiationclicked', note.url, evt);
    window.open(note.url, '_blank');
  });
}
