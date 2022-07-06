class Element {
    constructor(target) {
        this.target = target
        this.rotateY = 0
    }

    setRotateY (value) {
        this.rotateY = value
    }
}

window.onload = () => {
    const $box = document.getElementById('spin-container')
    var ele = null

    $box.onmousedown = (e) => {
        e.preventDefault()
        const { currentTarget, pageX, pageY } = e
        let startX = pageX
        let startY = pageY
        const target = currentTarget.getElementsByTagName('img')[0]
        if (target) {
            if (!ele) ele = new Element(target)
            currentTarget.onmousemove = (e) => {
                e.preventDefault()
                const { pageX, pageY } = e
                const distanceX = pageX - startX
                const distanceY = pageY - startY
                const distance = Math.sqrt(Math.pow(distanceX, 2) + Math.pow(distanceY, 2))
                const rotateDistance = 300 / 180 * distance
                if (distanceX < 0) {
                    let y = ele.rotateY - Math.floor(rotateDistance)
                    if (y < 0) {
                        y = 360 + y
                    }
                    ele.setRotateY(y)
                    ele.target.style.transform = `rotateY(${y}deg)`
                } else {
                    let y = ele.rotateY + Math.floor(rotateDistance)
                    if (y > 360) {
                        y = 360 - y
                    }
                    ele.setRotateY(y)
                    ele.target.style.transform = `rotateY(${y}deg)`
                }
                startX = pageX
                startY = pageY
            }
        }
    }

    $box.onmouseup = (e) => {
        e.preventDefault()
        e.currentTarget.onmousemove = null
    }

    const $nav = document.getElementById('js-nav-model')
    const $imgBox = $nav.getElementsByClassName('img-box')
    for (let i = 0; i < $imgBox.length; i++) {
        const el = $imgBox[i]
        el.style['animation-name'] = `fadeInUp`
        el.style['animation-delay'] = `.${i}s`
    }
}
