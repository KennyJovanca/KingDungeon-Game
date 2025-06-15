// Daftar level 
function createLevel({
  collisionData,
  backgroundImage,
  playerStart,
  doorPositions,
  npcData = []
}) {
  return {
    init: () => {
      parsedCollisions = collisionData.parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D();
      player.collisionBlocks = collisionBlocks;

      player.position.x = playerStart.x;
      player.position.y = playerStart.y;

      if (player.currentAnimation) {
        player.currentAnimation.isActive = false;
      }

      background = new Sprite({
        position: { x: 0, y: 0 },
        imageSrc: backgroundImage
      });

      doors = doorPositions.map(pos => new Sprite({
        position: pos,
        imageSrc: './img/doorOpen.png',
        frameRate: 5,
        frameBuffer: 8,
        loop: false,
        autoplay: false
      }))
      if (npcData.length > 0) {
        npcs = npcData.map(data => new Sprite(data))
      }
    }
  }
}

let levels = {
  0: createLevel({
    collisionData: collisionsLevel1,
    backgroundImage: './img/backgroundLevel0.png',
    playerStart: { x: 150, y: 180 },
    doorPositions: [{ x: 767, y: 270 }]
  }),
  1: createLevel({
    collisionData: collisionsLevel2,
    backgroundImage: './img/backgroundLevel1.png',
    playerStart: { x: 96, y: 140 },
    doorPositions: [
      { x: 150, y: 400 },
      { x: 370, y: 400 },
      { x: 530, y: 400 },
      { x: 772, y: 336 }
    ]
  }),
  2: createLevel({
    collisionData: collisionsLevel3,
    backgroundImage: './img/backgroundLevel2.png',
    playerStart: { x: 750, y: 230 },
    doorPositions: [
      { x: 176, y: 335 },
      { x: 345, y: 335 },
      { x: 515, y: 335 },
      { x: 678, y: 335 }
    ]
  }),
  3: createLevel({
    collisionData: collisionsLevel4,
    backgroundImage: './img/backgroundLevel3.png',
    playerStart: { x: 90, y: 200 },
    doorPositions: [
      { x: 280, y: 400 },
      { x: 400, y: 210 },
      { x: 470, y: 400 },
      { x: 851, y: 332 }
    ]
  }),
  4: createLevel({
    collisionData: collisionsLevel5,
    backgroundImage: './img/backgroundLevel4.png',
    playerStart: { x: 65, y: 185 },
    doorPositions: [
      { x: 210, y: 210 },
      { x: 390, y: 397 },
      { x: 650, y: 142 },
      { x: 700, y: 397 }
    ]
  }),
  5: createLevel({
    collisionData: collisionsLevel6,
    backgroundImage: './img/backgroundLevel5.png',
    playerStart: { x: 90, y: 200 },
    doorPositions: [
      { x: 325, y: 400 },
      { x: 525, y: 400 },
      { x: 820, y: 80 },
      { x: 851, y: 335 }
    ]
  }),
  6: createLevel({
    collisionData: collisionsLevel7,
    backgroundImage: './img/backgroundLevel6.png',
    playerStart: { x: 750, y: 220 },
    doorPositions: [
      { x: 80, y: 400 },
      { x: 300, y: 270 },
      { x: 600, y: 270 },
      { x: 850, y: 400 }
    ]
  }),

  7: createLevel({
    collisionData: collisionsLevel8,
    backgroundImage: './img/backgroundLevel7.png',
    playerStart: { x: 90, y: 200 },
    doorPositions: [
      { x: 75, y: 400 },
      { x: 260, y: 272 },
      { x: 660, y: 80 },
      { x: 750, y: 400 }
    ]
  }),

  8: createLevel({
    collisionData: collisionsLevel9,
    backgroundImage: './img/backgroundLevel8.png',
    playerStart: { x: 50, y: 200 },
    doorPositions: [
      { x: 80, y: 270 },
      { x: 530, y: 143 },
      { x: 720, y: 80 },
      { x: 851, y: 400 }
    ]
  }),

  9: createLevel({
    collisionData: collisionsLevel10,
    backgroundImage: './img/backgroundLevel9.png',
    playerStart: { x: 20, y: 200 },
    doorPositions: [
      { x: 75, y: 400 },
      { x: 360, y: 273 },
      { x: 780, y: 400 },
      { x: 840, y: 142 }
      
    ]
  }),

  10: createLevel({
    collisionData: collisionsLevel11,
    backgroundImage: './img/backgroundLevel10.png',
    playerStart: { x: 820, y: 100 },
    doorPositions: [
      { x: 410, y: 80 },
      { x: 500, y: 400 },
      { x: 540, y: 80 },
      { x: 760, y: 400 }
    ]
  }),

  11: createLevel({
    collisionData: collisionsLevel12,
    backgroundImage: './img/backgroundLevel11.png',
    playerStart: { x: 80, y: 500 },
    doorPositions: [{ x: 850, y: 400 }],
    npcData: [
      {
        position: { x: 380, y: 136 },
        imageSrc: './img/pig/pig.png',
        frameRate: 11,
        frameBuffer: 12,
        loop: true,
        autoplay: true
      },
      {
        position: { x: 190, y: 73 },
        imageSrc: './img/pig/pigKing.png',
        frameRate: 12,
        frameBuffer: 8,
        loop: true,
        autoplay: true
      }
    ]
  })
}


// Export untuk import file lain
window.levels = levels;