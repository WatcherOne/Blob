window.onload = () => {
    var timer = null
    let i = 0
    const $changeIcon = $('.change-menu')
    const $targetMenu = $('.menu-container')
    $changeIcon.click((e) => {
        e.preventDefault()
        const hasOpen = $changeIcon.hasClass('opened')
        $changeIcon.toggleClass('opened')
        // 50为限, 加速滚动的速度
        if (hasOpen) {
            timer && clearInterval(timer)
            timer = setInterval(() => {
                i === 1 && clearInterval(timer)
                i--
                $targetMenu.css('opacity', `${i / 50}`)
                $targetMenu.css('transform', `translate3d(0,${i * 2 - 100}%,0)`)
            }, 0)
        } else {
            timer && clearInterval(timer)
            timer = setInterval(() => {
                i === 49 && clearInterval(timer)
                i++
                $targetMenu.css('opacity', `${i / 50}`)
                $targetMenu.css('transform', `translate3d(0,${i * 2 - 100}%,0)`)
            }, 0)
        }
    })
}
