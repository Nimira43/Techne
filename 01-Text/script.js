window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight 

  const text = 'Text Animations'
  const textX = 150
  const textY = 150
  ctx.fillStyle = '#ff4500'
  ctx.strokeStyle = '#ffd700'
  ctx.lineWidth = 3
  ctx.font = '80px Helvetica'
  ctx.fillText(text, textX, textY)
  ctx.strokeText(text, textX, textY)
})