input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Happy)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(200)
    }
})
input.onGesture(Gesture.Shake, function () {
    schuetteln = 1
    if (schuetteln == 1) {
        schuetteln = 0
        basic.pause(1000)
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Asleep)
            basic.pause(200)
            basic.showIcon(IconNames.Sad)
            basic.pause(200)
        }
        music.playMelody("F C D C C D E F ", 978)
        basic.pause(2000)
        music.playMelody("E D C G A C D E ", 1062)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.EigthNote)
    music.playMelody("C5 B C5 A B A B G ", 700)
    basic.pause(2000)
    basic.showString("Hi hier ")
    basic.showString("ist ROBBO.")
    basic.showString("Habe einen ")
    basic.showString("schoenen Tag! ")
    basic.showString("Pass auf ")
    basic.showString("dich auf!")
    basic.showIcon(IconNames.EigthNote)
    music.playMelody("C D C B D C D C5 ", 700)
})
let schuetteln = 0
schuetteln = 0
let zeigeemoty = 1
music.playMelody("C5 E B A C G D A ", 1043)
if (zeigeemoty == 1) {
    basic.showIcon(IconNames.Happy)
}
zeigeemoty = 0
