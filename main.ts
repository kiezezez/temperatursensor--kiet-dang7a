input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (input.temperature() > 25) {
        basic.setLedColor(0xff0000)
        basic.showNumber(input.temperature())
    } else if (input.temperature() < 15) {
        basic.setLedColor(0x0000ff)
        basic.showNumber(input.temperature())
    } else {
        basic.setLedColor(0x00ff00)
        basic.showNumber(input.temperature())
    }
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showIcon(IconNames.Heart)
    music.playMelody("C5 B A G F E D C ", 120)
})
