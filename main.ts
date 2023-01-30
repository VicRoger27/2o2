input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    _2o2 = 2
})
input.onButtonPressed(Button.A, function () {
    if (1 > _2o2) {
        game.gameOver()
        music.playTone(262, music.beat(BeatFraction.Breve))
    } else {
        basic.pause(500)
        game.addScore(1)
        basic.pause(500)
    }
})
input.onButtonPressed(Button.B, function () {
    if (1 < _2o2) {
        game.gameOver()
        music.playTone(262, music.beat(BeatFraction.Breve))
    } else {
        basic.pause(500)
        game.addScore(1)
        basic.pause(500)
    }
})
input.onGesture(Gesture.Shake, function () {
    game.gameOver()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    _2o2 = 0
})
let _2o2 = 0
_2o2 = 2
basic.forever(function () {
    basic.pause(500)
    game.addScore(1)
    basic.pause(500)
})
