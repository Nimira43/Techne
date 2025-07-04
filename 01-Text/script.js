window.addEventListener('load', function () {
  const canvas = document.getElementById('canvas1')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight 

  ctx.strokeStyle = '#fff' 
  ctx.beginPath()
  ctx.moveTo(100, 100)
  ctx.lineTo(200, 300)
  ctx.stroke()

  const text = 'Text Animations'
  const textX = canvas.width / 2
  const textY = canvas.height / 2
  ctx.fillStyle = '#ff4500'
  ctx.strokeStyle = '#ffd700'
  ctx.lineWidth = 3
  ctx.font = '80px Verdana'
  ctx.fillText(text, textX, textY)
  ctx.strokeText(text, textX, textY)
})