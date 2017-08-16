AFRAME.registerComponent('cursor-defuse', {
    schema: { default: '' },

    init() {
        const defuse = () => {
            this.el.setAttribute('geometry', 'thetaLength', 0)
        }
        this.el.addEventListener('click', defuse)
        this.el.addEventListener('mouseleave', defuse)
    },
})
