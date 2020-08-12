input.onButtonPressed(Button.A, function () {
    selected = randint(0, OffLights.length - 1)
    selected = OffLights.removeAt(selected)
    led.plot(selected % 5, selected / 5)
    OnLights.push(selected)
    if (OffLights.length == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showString("RESET")
})
input.onButtonPressed(Button.B, function () {
    selected = OnLights.pop()
    led.unplot(selected % 5, selected / 5)
    OffLights.push(selected)
    if (OnLights.length == 0) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
let selected = 0
let OnLights: number[] = []
let OffLights: number[] = []
OffLights = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
OnLights = []
let OnOff = true
