let SOLO_DURATION_MS = 150 // the average time, in milliseconds, that a solo glitch image gets displayed before reverting back
let SOLO_RANDOMIZER_MS = 120 // that time fluctuates by this number upwards & downwards
let CHILL_DURATION_MS = 2000 // the average wait time before playing a glitch
let CHILL_RANDOMIZER_MS = 1800 // the wait time fluctuates by this number upwards & downwards
let SEQ_FPS_MIN = 4 // minimum FPS for the sequenced glitches
let SEQ_FPS_MAX = 20 // maximum FPS for the sequenced glitches

let SEQ_FRAME_MS = 120 // average frame duration for sequenced glitches
let SEQ_RANDOMIZER_MS = 80 // fluctuates by this number

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST
PIXI.settings.ROUND_PIXELS = true

const imgURL = {
  base: '/img/Logo glitch light 0.png',
  solo: [
    '/img/Indexed sequences/Logo indexed solo1.png',
    '/img/Indexed sequences/Logo indexed solo2.png',
    '/img/Indexed sequences/Logo indexed solo3.png',
  ],
  seq: [
    [
      '/img/Indexed sequences/Logo indexed seq1.0.png',
      '/img/Indexed sequences/Logo indexed seq1.1.png',
      '/img/Indexed sequences/Logo indexed seq1.2.png',
      '/img/Indexed sequences/Logo indexed seq1.3.png',
      '/img/Indexed sequences/Logo indexed seq1.4.png',
      '/img/Indexed sequences/Logo indexed seq1.5.png',
    ],
    [
      '/img/Indexed sequences/Logo indexed seq2.0.png',
      '/img/Indexed sequences/Logo indexed seq2.1.png',
    ],
    [
      '/img/Indexed sequences/Logo indexed seq3.0.png',
      '/img/Indexed sequences/Logo indexed seq3.1.png',
      '/img/Indexed sequences/Logo indexed seq3.2.png',
      '/img/Indexed sequences/Logo indexed seq3.3.png',
      '/img/Indexed sequences/Logo indexed seq3.4.png',
    ],
  ]
}

const allImgURL = [imgURL.base, ...imgURL.solo, ...imgURL.seq.flat()] // NOTE just for debugging. Can remove.

const sprites = {
  base: PIXI.Sprite.from(imgURL.base),
  solo: imgURL.solo.map(url => PIXI.Sprite.from(url)),
  seq: imgURL.seq.map((frames) => {
    // const textures = frames.map(frame => {return PIXI.Texture.from(frame)})
    // const frameObjects = textures.map(texture => {return {texture: texture, time: SEQ_FRAME_MS}})
    // const as = new PIXI.AnimatedSprite(frameObjects)
    const as = new PIXI.AnimatedSprite(frames.map(frame => {return {
      texture: PIXI.Texture.from(frame),
      time: SEQ_FRAME_MS + SEQ_RANDOMIZER_MS * 2 * (Math.random() - 0.5)
    }}))
    as.loop = false
    return as
  })
}


// create renderer

let app = new PIXI.Application({ width: 1080, height: 1080 });
document.body.querySelector('.bg-glitch').appendChild(app.view);
const allSprites = [sprites.base, ...sprites.solo, ...sprites.seq]
allSprites.forEach((sprite) => {
  sprite.visible = false
  sprite.anchor.x = 0.5
  sprite.anchor.y = 0.5
  sprite.position.x = 540
  sprite.position.y = 540
  sprite.scale.x = 1.5
  sprite.scale.y = 1.5
  app.stage.addChild(sprite)
})
sprites.base.visible = true
let activeSprite = sprites.base
function changeActiveSprite(newActiveSprite) {
  activeSprite.visible = false
  activeSprite = newActiveSprite
  activeSprite.visible = true
}

// Define a state machine for the logo glitch
// wait for a random period of time // state = CHILL
// play either solo or sequence // state = SOLO or state = SEQ, set corresponding timers
// when that's finished, go back to waiting for a random period of time // state = CHILL, set corresponding timer

const STATE_CHILL = 0
const STATE_SOLO = 1
const STATE_SEQ = 2

let state = STATE_CHILL

function switchState() {
  switch (state) {
    case STATE_CHILL:
      enterGlitchState()
      break;
    case STATE_SOLO:
    case STATE_SEQ:
      enterWaitState()
      break;
    default:
      break;
  }
}

function enterGlitchState() {
  let newState = Math.floor(Math.random()*2)+1
  if (newState === STATE_SOLO) {
    changeActiveSprite(sprites.solo[Math.floor(Math.random()*sprites.solo.length)])
    setTimeout(switchState, SOLO_DURATION_MS + SOLO_RANDOMIZER_MS * 2 * (Math.random() - 0.5))
    state = STATE_SOLO
  } else if (newState === STATE_SEQ) {
    changeActiveSprite(sprites.seq[Math.floor(Math.random()*sprites.seq.length)])
    activeSprite._duration = Array(activeSprite.totalFrames).fill().map(() => (SEQ_FRAME_MS + SEQ_RANDOMIZER_MS * 2 * (Math.random() - 0.5)))
    activeSprite.gotoAndPlay(0)
    activeSprite.onComplete = switchState
    state = STATE_SEQ
  } else {
    throw new Error(`Entering unknown state ID ${newState}`)
  }
  
}
function enterWaitState() {
  changeActiveSprite(sprites.base)
  state = STATE_CHILL
  setTimeout(switchState, CHILL_DURATION_MS + CHILL_RANDOMIZER_MS * 2 * (Math.random() - 0.5))
}

const loader = PIXI.Loader.shared
// TODO: preload assets

enterWaitState()

// Utility functions for testing

function setBase1() {
  imgURL.base = '/img/Logo (base).png'
  var texture = PIXI.Texture.from(imgURL.base);
  sprites.base.texture = texture
}
function setBase2() {
  imgURL.base = '/img/Logo glitch light 0.png'
  var texture = PIXI.Texture.from(imgURL.base);
  sprites.base.texture = texture
}