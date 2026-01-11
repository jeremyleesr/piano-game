function spawnNote(staffIndex) {
  const targets = document.querySelectorAll('.staff-lines');
  const target = targets[staffIndex];
  const note = document.createElement('div');
  note.className = 'note';
  note.innerHTML = '♩'; 

  // Snap to Line (0, 25, 50, 75, 100) or Space (12.5, 37.5, 62.5, 87.5)
  const snapPoints = [0, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];
  const chosenY = snapPoints[Math.floor(Math.random() * snapPoints.length)];
  
  note.style.top = chosenY + "%";
  target.appendChild(note);

  let xPos = window.innerWidth;
  function move() {
    xPos -= 5;
    note.style.left = xPos + 'px';
    if (xPos > -60) requestAnimationFrame(move); else note.remove();
  }
  move();
}

setInterval(() => spawnNote(0), 2500);
setInterval(() => spawnNote(1), 4000);




