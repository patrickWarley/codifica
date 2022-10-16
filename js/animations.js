var container = document.getElementById('containerSummary');
var blanket2 = document.getElementsByClassName('blanket2')[0];

container.addEventListener('mousemove', (evt) => {
  //lets discover which size the blanket 2 should have
  const container = evt.target.parentElement;

  var blanketSize = container.offsetWidth - evt.clientX;

  blanket2.style.width = blanketSize;
});