let fghj = 0
basic.forever(function () {
    if ((45 as any) < (90 as any) || (90 as any) < (135 as any)) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        if ((135 as any) < (180 as any) || (180 as any) < (225 as any)) {
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
    }
})
basic.forever(function () {
    fghj = input.compassHeading()
})
