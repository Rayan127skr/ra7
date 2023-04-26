basic.forever(function () {
    music.playMelody("C5 B A G F E D C ", 120)
    music.playMelody("C D E F G A B C5 ", 120)
    basic.showLeds(`
        . # # # .
        . # . # .
        . # # . .
        . # . # .
        . # . . #
        `)
})
