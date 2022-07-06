var darkCloudTimer = null

window.onload = () => {
    timingDarkCloud()
}

// 每3s寻找乌云
function timingDarkCloud () {
    darkCloudTimer && clearTimeout(darkCloudTimer)
    darkCloudTimer = setTimeout(() => {
        const time = findDarkCloud()
        setTimeout(timingDarkCloud, time * 10)
    }, 3000)
}

// 计算乌云出现的概率（百分之一的几率）
function findDarkCloud () {
    const random = Math.ceil(Math.random() * 100)
    console.log('有乌云吗？', random)
    if (random === 50) {
        console.log('乌云出现')
        // 乌云持续时间（20s ~ 30s）
        const continueTime = Math.ceil(Math.random() * 10) + 20
        appearDarkCloud(continueTime)
        return continueTime
    }
    return 0
}

function appearDarkCloud (continueTime) {
    console.log('乌云持续时间', continueTime)
    const $sky = $('.sky-container')
    $sky.css('animation', `sky_background ${continueTime}s ease-out`)
}
