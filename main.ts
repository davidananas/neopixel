input.onButtonPressed(Button.A, function () {
    opak = 0
    while (opak == 0) {
        kitronik_servo_lite.driveForwards(50)
        basic.pause(500)
        kitronik_servo_lite.turnRight(90)
        basic.pause(500)
        kitronik_servo_lite.turnLeft(180)
        basic.pause(500)
        kitronik_servo_lite.turnRight(90)
        basic.pause(500)
        kitronik_servo_lite.driveBackwards(50)
    }
})
input.onButtonPressed(Button.B, function () {
    opak = 1
})
let opak = 0
let strip = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
let range = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Purple))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Yellow))
strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
strip.setPixelColor(4, neopixel.colors(NeoPixelColors.Blue))
range.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
range.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
range.setPixelColor(2, neopixel.colors(NeoPixelColors.Indigo))
range.setPixelColor(3, neopixel.colors(NeoPixelColors.Purple))
range.setPixelColor(4, neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    strip.show()
    basic.pause(500)
    range.show()
    basic.pause(500)
})
