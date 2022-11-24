function exposeHook() {
    debug(lessonBridge.close)
    lessonBridge.close()
}

function hookObj() {
    window.hook = _0xcc7fd3
}

function p1(score) {
    let csid = html5Iframe.src.split('csid=')[1].split('&type')[0]
    objScore = {
        score: score
    }
    hook.completeLessonComponent(csid, objScore);
}
