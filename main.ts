let fghj = 0
basic.forever(function () {
    fghj = input.compassHeading()
})
basic.forever(function () {
    if (fghj < 90 && fghj < 135) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
    if (fghj < 180 && fghj < 225) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    }
    if ((225 as any) < (270 as any) || (270 as any) < (315 as any)) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if ((315 as any) < (360 as any)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
    if ((0 as any) < (45 as any)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    }
})
