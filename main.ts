let strip = neopixel.create(DigitalPin.P0, 70, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
basic.forever(function () {
    strip.rotate(1)
    basic.pause(100)
    strip.show()
})
