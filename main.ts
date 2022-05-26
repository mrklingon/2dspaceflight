controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Enterprise.setImage(assets.image`ship0`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Enterprise.setImage(assets.image`ship1`)
})
let Enterprise: Sprite = null
Enterprise = sprites.create(assets.image`ship1`, SpriteKind.Player)
controller.moveSprite(Enterprise)
Enterprise.setStayInScreen(true)
scroller.setLayerImage(scroller.BackgroundLayer.Layer0, assets.image`background1`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer1, assets.image`background2`)
scroller.setLayerImage(scroller.BackgroundLayer.Layer2, assets.image`background3`)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer0)
scroller.scrollBackgroundWithSpeed(-10, -10, scroller.BackgroundLayer.Layer0)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer2)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.BothDirections, scroller.BackgroundLayer.Layer3)
scroller.scrollBackgroundWithSpeed(-20, -20, scroller.BackgroundLayer.Layer1)
scroller.scrollBackgroundWithSpeed(-40, -40, scroller.BackgroundLayer.Layer2)
