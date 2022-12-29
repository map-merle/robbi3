def on_gesture_shake():
    basic.pause(1000)
    for index in range(4):
        basic.show_icon(IconNames.ASLEEP)
        basic.pause(200)
        basic.show_icon(IconNames.SAD)
        basic.pause(200)
    music.play_melody("F C D C C D E F ", 978)
    basic.pause(2000)
    music.play_melody("E D C G A C D E ", 1062)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

music.play_melody("C5 E B A C G D A ", 1043)
basic.show_icon(IconNames.HAPPY)