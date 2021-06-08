let posicio = 0
input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
    posicio = input.acceleration(Dimension.Y)
    music.playTone(posicio, music.beat(BeatFraction.Whole))
    serial.writeNumber(posicio)
})
basic.forever(function () {
    serial.writeLine("" + (posicio))
})
