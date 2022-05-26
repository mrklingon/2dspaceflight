namespace SpriteKind {
    export const rck = SpriteKind.create()
    export const sht = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    setScroll(2)
})
function setScroll (dir: number) {
    if (dir == 1) {
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer0)
        scroller.scrollBackgroundWithSpeed(10, 0, scroller.BackgroundLayer.Layer0)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer2)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer3)
        scroller.scrollBackgroundWithSpeed(20, 0, scroller.BackgroundLayer.Layer1)
        scroller.scrollBackgroundWithSpeed(40, 0, scroller.BackgroundLayer.Layer2)
    } else if (dir == 2) {
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer0)
        scroller.scrollBackgroundWithSpeed(0, 10, scroller.BackgroundLayer.Layer0)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer2)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer3)
        scroller.scrollBackgroundWithSpeed(0, 20, scroller.BackgroundLayer.Layer1)
        scroller.scrollBackgroundWithSpeed(0, 40, scroller.BackgroundLayer.Layer2)
    } else if (dir == 3) {
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer0)
        scroller.scrollBackgroundWithSpeed(-10, 0, scroller.BackgroundLayer.Layer0)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer2)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer3)
        scroller.scrollBackgroundWithSpeed(-20, 0, scroller.BackgroundLayer.Layer1)
        scroller.scrollBackgroundWithSpeed(-40, 0, scroller.BackgroundLayer.Layer2)
    } else if (dir == 4) {
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer0)
        scroller.scrollBackgroundWithSpeed(0, -10, scroller.BackgroundLayer.Layer0)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer2)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer3)
        scroller.scrollBackgroundWithSpeed(0, -20, scroller.BackgroundLayer.Layer1)
        scroller.scrollBackgroundWithSpeed(0, -40, scroller.BackgroundLayer.Layer2)
    } else {
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer0)
        scroller.scrollBackgroundWithSpeed(0, 0, scroller.BackgroundLayer.Layer0)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer2)
        scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer3)
        scroller.scrollBackgroundWithSpeed(0, 0, scroller.BackgroundLayer.Layer1)
        scroller.scrollBackgroundWithSpeed(0, 0, scroller.BackgroundLayer.Layer2)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.sht, function (sprite, otherSprite) {
    music.baDing.play()
    otherSprite.destroy()
    info.changeScoreBy(randint(10, 20))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    blast = sprites.createProjectileFromSprite(assets.image`phaser`, Enterprise, pdir * 200, 0)
    music.pewPew.play()
    blast.setFlag(SpriteFlag.AutoDestroy, true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Enterprise.setImage(assets.image`ship0`)
    setScroll(1)
    pdir = -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.rck, function (sprite, otherSprite) {
    info.changeScoreBy(randint(10, 20))
    music.knock.play()
    sprite.destroy()
    otherSprite.destroy(effects.fire, 500)
})
sprites.onOverlap(SpriteKind.rck, SpriteKind.sht, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(-10)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Enterprise.setImage(assets.image`ship1`)
    setScroll(3)
    pdir = 1
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    setScroll(4)
})
sprites.onOverlap(SpriteKind.rck, SpriteKind.Player, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 500)
    scene.cameraShake(4, 200)
    music.knock.play()
    info.changeLifeBy(-1)
    info.changeScoreBy(1)
})
let shtl: Sprite = null
let ast: Sprite = null
let blast: Sprite = null
let pdir = 0
let Enterprise: Sprite = null
info.setLife(10)
game.splash("Pilot the Enterprise through the asteroids", "and collect the shuttles")
let rocks = [
assets.image`asteroid1`,
assets.image`asteroid2`,
assets.image`asteroid0`,
assets.image`asteroid3`
]
Enterprise = sprites.create(assets.image`ship1`, SpriteKind.Player)
controller.moveSprite(Enterprise)
Enterprise.setStayInScreen(true)
pdir = 1
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`background1`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`background2`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`background3`)
forever(function () {
    pause(250 * randint(3, 8))
    ast = sprites.create(rocks[randint(0, 3)], SpriteKind.rck)
    ast.setPosition(randint(0, 100), randint(0, 100))
    ast.setVelocity(randint(-50, 50), randint(-50, 50))
    ast.setFlag(SpriteFlag.AutoDestroy, true)
})
forever(function () {
    pause(randint(2, 6) * 500)
    if (4 <= randint(0, 10)) {
        shtl = sprites.create(assets.image`shuttle1`, SpriteKind.sht)
        shtl.setVelocity(randint(50, 100), 0)
        shtl.setPosition(0, randint(10, 99))
        shtl.setFlag(SpriteFlag.DestroyOnWall, true)
    } else {
        shtl = sprites.create(assets.image`shuttle1`, SpriteKind.sht)
        shtl.setVelocity(randint(-50, -100), 0)
        shtl.setPosition(160, randint(10, 99))
        shtl.setFlag(SpriteFlag.DestroyOnWall, true)
    }
})
