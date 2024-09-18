input.onPinPressed(TouchPin.P0, function () {
    radio.sendValue(端末ID, 0)
    basic.showString(端末ID)
})
input.onButtonPressed(Button.A, function () {
    if ("z" == 端末ID) {
        受け取り_１番目 = 0
    } else {
        radio.sendValue(端末ID, 1)
    }
})
input.onPinPressed(TouchPin.P2, function () {
    if (p2 <= 9) {
        p2 += 1
        basic.showString("1234567890z".charAt(p2))
        端末ID = "1234567890z".charAt(p2)
    } else {
        p2 = 0
        basic.showString("1234567890z".charAt(p2))
        端末ID = "1234567890z".charAt(p2)
    }
})
input.onButtonPressed(Button.B, function () {
    if ("z" == 端末ID) {
        basic.showString(cash)
    }
})
input.onPinPressed(TouchPin.P1, function () {
    端末ID = "z"
    basic.showString(端末ID)
})
radio.onReceivedValue(function (name, value) {
    if (value == 0) {
        basic.showString(name)
    } else if (value == 1 && 端末ID == "z") {
        if (0 == 受け取り_１番目) {
            basic.showString(name)
            受け取り_１番目 = 1
            cash = name
        }
    } else if (value == 2) {
        LOG = 0
    } else {
    	
    }
})
let sound = 0
let LOG = 0
let cash = ""
let p2 = 0
let 受け取り_１番目 = 0
let 端末ID = ""
端末ID = "a"
basic.forever(function () {
    sound = 0
    while ("z" == 端末ID && 受け取り_１番目 == 1) {
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        2400,
        2400,
        255,
        255,
        200,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        basic.clearScreen()
        music.play(music.createSoundExpression(
        WaveShape.Sine,
        2400,
        2400,
        255,
        255,
        500,
        SoundExpressionEffect.None,
        InterpolationCurve.Linear
        ), music.PlaybackMode.InBackground)
        basic.showString(cash)
        basic.pause(100)
        basic.clearScreen()
    }
})
