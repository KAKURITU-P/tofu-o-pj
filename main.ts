let 無線ー名前 = ""
let cash = 0
let LOG = ""
input.onPinPressed(TouchPin.P0, function () {
    radio.sendValue(無線ー名前, 0)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    }
    basic.showString(無線ー名前)
})
input.onButtonPressed(Button.A, function () {
    radio.sendValue(無線ー名前, 1)
})
input.onPinPressed(TouchPin.P2, function () {
    if (true) {
        cash = 0
    } else {
    	
    }
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showString(LOG.charAt(0))
})
radio.onReceivedValue(function (name, value) {
    if (value == 0) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                # . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
            basic.pause(1000)
            basic.clearScreen()
            basic.pause(1000)
        }
        basic.showString(name)
    } else if (value == 1) {
        basic.showString(name)
        cash = "" + name + LOG
        LOG = cash
    } else {
    	
    }
})
