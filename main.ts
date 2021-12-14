let led_on = 0
basic.forever(function () {
    led_on = 0
    while (led_on <= 30) {
        neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB).range(0, led_on).showRainbow(1, 360)
        led_on += 1
    }
})
