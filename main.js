//part 1
debug(lessonBridge.pause)
lessonBridge.pause()

// part 2
window.mainHook = _0x6c976a;
window.p1 = function(score) {
    window.csid = html5Iframe.src.split('csid=')[1].split('&type')[0]
    objScore = { score: score }
    mainHook.completeLessonComponent(csid, objScore);
    window.csid2 = csid.replaceAll('_phx', '')
    window.csid3 = csid2.replaceAll('.phx', '')
    window.csid5 = html5Iframe.src
    if (csid5.includes('type=QUIZ#')) {
        isQuiz= 'true';
    } else if (csid5.includes('type=TUTORIAL#')) {
        isQuiz= 'false';
        wefwef()
    }

}
window.wefwef = function() {
    setTimeout(() => {
        document.getElementById('continue-button-button').click()
    }, 1000)
    setTimeout(() => {
        p1(100)
    }, 12000)
}
