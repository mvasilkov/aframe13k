const COLOR_EDGE = '#101010'
const COLOR_LADDER = '#263238'
const COLOR_BEAM_FRONT = '#90a4ae'
const COLOR_BEAM_BACK = '#b0bec5'
const COLOR_LAMP = '#fbfbfb'

const SIZE_WALL = 1024
const SIZE_EDGE = 16
const SIZE_FRAME = 12
const SIZE_LADDER = 36
const SIZE_MID_FRAME = 344
const SIZE_MID_LADDER = 256
const SIZE_DOOR = 160
const SIZE_LAMP = (SIZE_WALL - SIZE_LADDER) * 0.5 - SIZE_EDGE
const SIZE_LAMP_BEAM = 14
const SIZE_LAMP_JOINT = 72

function wall(c) {
    c.fillStyle = COLOR_LAMP
    c.fillRect(0, 0, SIZE_WALL, SIZE_WALL)

    for (let i = 3; i >= 0; --i) {
        c.save()
        c.translate(SIZE_WALL * 0.5, SIZE_WALL * 0.5)
        c.rotate(i * Math.PI * 0.5)
        c.translate(-SIZE_WALL * 0.5 + SIZE_EDGE, -SIZE_WALL * 0.5 + SIZE_EDGE)

        c.beginPath()
        c.moveTo(0, 0)
        c.lineTo(SIZE_LAMP, SIZE_LAMP)
        c.moveTo(0, SIZE_LAMP)
        c.lineTo(SIZE_LAMP, 0)
        c.moveTo(0, SIZE_LAMP * 0.5)
        c.lineTo(SIZE_LAMP, SIZE_LAMP * 0.5)
        c.moveTo(SIZE_LAMP * 0.5, 0)
        c.lineTo(SIZE_LAMP * 0.5, SIZE_LAMP)
        c.lineWidth = SIZE_LAMP_BEAM
        c.strokeStyle = COLOR_BEAM_BACK
        c.stroke()

        c.translate(SIZE_LAMP * 0.5, SIZE_LAMP * 0.5)
        c.rotate(Math.PI * 0.25)

        c.fillStyle = COLOR_BEAM_FRONT
        c.fillRect(-SIZE_LAMP_JOINT * 0.5, -SIZE_LAMP_JOINT * 0.5,
            SIZE_LAMP_JOINT, SIZE_LAMP_JOINT)

        c.restore()
    }

    c.fillStyle = COLOR_BEAM_FRONT
    c.fillRect(SIZE_WALL * 0.5 - SIZE_MID_FRAME * 0.5, SIZE_WALL * 0.5 - SIZE_MID_FRAME * 0.5,
        SIZE_MID_FRAME, SIZE_MID_FRAME)

    for (let i = 3; i >= 0; --i) {
        c.save()
        c.translate(SIZE_WALL * 0.5, SIZE_WALL * 0.5)
        c.rotate(i * Math.PI * 0.5)
        c.translate(-SIZE_WALL * 0.5, -SIZE_WALL * 0.5)

        c.fillStyle = COLOR_EDGE
        c.fillRect(0, 0, SIZE_WALL, SIZE_EDGE)

        c.fillStyle = COLOR_BEAM_BACK
        c.fillRect(SIZE_WALL * 0.5 - SIZE_LADDER * 0.5 - SIZE_FRAME,
            SIZE_EDGE, SIZE_LADDER + SIZE_FRAME * 2, SIZE_WALL * 0.5 - SIZE_DOOR * 0.5)

        c.fillStyle = COLOR_LADDER
        c.fillRect(SIZE_WALL * 0.5 - SIZE_LADDER * 0.5, SIZE_EDGE,
            SIZE_LADDER, SIZE_WALL * 0.5 - SIZE_DOOR * 0.5)

        c.fillStyle = COLOR_BEAM_FRONT
        c.fillRect(SIZE_EDGE, SIZE_EDGE, SIZE_WALL - SIZE_EDGE * 2, SIZE_FRAME)

        c.restore()
    }

    c.fillStyle = COLOR_BEAM_BACK
    c.fillRect(SIZE_WALL * 0.5 - SIZE_MID_LADDER * 0.5 - SIZE_FRAME,
        SIZE_WALL * 0.5 - SIZE_MID_LADDER * 0.5 - SIZE_FRAME,
        SIZE_MID_LADDER + SIZE_FRAME * 2, SIZE_MID_LADDER + SIZE_FRAME * 2)

    c.fillStyle = COLOR_LADDER
    c.fillRect(SIZE_WALL * 0.5 - SIZE_MID_LADDER * 0.5, SIZE_WALL * 0.5 - SIZE_MID_LADDER * 0.5,
        SIZE_MID_LADDER, SIZE_MID_LADDER)

    c.fillStyle = COLOR_BEAM_BACK
    c.fillRect(SIZE_WALL * 0.5 - SIZE_MID_LADDER * 0.5 + SIZE_LADDER,
        SIZE_WALL * 0.5 - SIZE_MID_LADDER * 0.5 + SIZE_LADDER,
        SIZE_MID_LADDER - SIZE_LADDER * 2, SIZE_MID_LADDER - SIZE_LADDER * 2)

    c.fillStyle = COLOR_EDGE
    c.fillRect(SIZE_WALL * 0.5 - SIZE_DOOR * 0.5, SIZE_WALL * 0.5 - SIZE_DOOR * 0.5,
        SIZE_DOOR, SIZE_DOOR)
}
