input.onGesture(Gesture.TiltLeft, function () {
    if (x < 4) {
        x = x - 1
        basic.clearScreen()
        led.plot(x, y)
    }
    led.unplot(x + 1, y)
})
input.onGesture(Gesture.TiltRight, function () {
    if (x < 4) {
        x = x + 1
        basic.clearScreen()
        led.plot(x, y)
        led.unplot(x - 1, y)
    }
})
let y5 = 0
let y = 0
let x = 0
x = 2
y = 4
led.plot(x, y)
let y0 = 0
let y1 = 0
let y2 = 0
let y3 = 0
let y4 = 0
basic.forever(function () {
    basic.pause(randint(0, 3) * 100)
    y0 = 0
    for (let index = 0; index < 5; index++) {
        led.plot(0, y0)
        basic.pause(500)
        y0 = y0 + 1
        led.unplot(0, y0 - 1)
    }
})
basic.forever(function () {
    basic.pause(randint(0, 3) * 100)
    y1 = 0
    for (let index = 0; index < 5; index++) {
        led.plot(0, y1)
        basic.pause(500)
        y1 = y1 + 1
        led.unplot(0, y1 - 1)
    }
})
basic.forever(function () {
    if (x == 0 && y == y0) {
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
        x = 2
        y = 4
        led.plot(x, y)
        y0 = randint(0, 2)
        y1 = randint(0, 2)
        y2 = randint(0, 2)
        y3 = randint(0, 2)
        y4 = randint(0, 2)
    }
    if (x == 1 && y == y1) {
        game.gameOver()
        led.unplot(x, y)
    }
})
basic.forever(function () {
    basic.pause(randint(0, 3) * 100)
    y2 = 0
    for (let index = 0; index < 5; index++) {
        led.plot(0, y2)
        basic.pause(500)
        y2 = y2 + 1
        led.unplot(0, y2 - 1)
    }
})
basic.forever(function () {
    basic.pause(randint(0, 3) * 100)
    y3 = 0
    for (let index = 0; index < 5; index++) {
        led.plot(0, y3)
        basic.pause(500)
        y3 = y3 + 1
        led.unplot(0, y3 - 1)
    }
})
basic.forever(function () {
    basic.pause(randint(0, 3) * 100)
    y4 = 0
    for (let index = 0; index < 5; index++) {
        led.plot(0, y4)
        basic.pause(500)
        y4 = y4 + 1
        led.unplot(0, y4 - 1)
    }
})
basic.forever(function () {
    basic.pause(randint(0, 3) * 100)
    y5 = 0
    for (let index = 0; index < 5; index++) {
        led.plot(0, y5)
        basic.pause(500)
        y5 = y5 + 1
        led.unplot(0, y5 - 1)
    }
})
