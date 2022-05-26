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
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Enterprise.setImage(assets.image`ship0`)
    setScroll(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Enterprise.setImage(assets.image`ship1`)
    setScroll(3)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    setScroll(4)
})
let Enterprise: Sprite = null
Enterprise = sprites.create(assets.image`ship1`, SpriteKind.Player)
controller.moveSprite(Enterprise)
Enterprise.setStayInScreen(true)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`background1`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`background2`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`background3`)
