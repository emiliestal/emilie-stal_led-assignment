function LightUp (num: number) {
    led.plot(num % 5, num / 5)
}
input.onButtonPressed(Button.A, function () {
    Position += 1
})
input.onButtonPressed(Button.B, function () {
    Position += -1
})
let Position = 7
basic.forever(function () {
    LightUp(Position)
})
