//part 1
function exposeObj(fun) {
    debug(fun) // enter fun scope when fun called.
    fun() //calls fun.
}

function hookObj(extractLocation, obj) {
    window[extractLocation] = obj // creates global hook.
}

exposeObj(lessonBridge.close) //exposes the 'lessonBridge.close' fun.

// part 2
hookObj('hook', _0xcc7fd3) // extracts the '_0xcc7fd3' variable

// part 3
function p1(score) {
    let csid = html5Iframe.src.split('csid=')[1].split('&type')[0] // gets the current lesson csid
    objScore = { // makes the score an obj
        score: score
    }
    hook.completeLessonComponent(csid, objScore); // sends the request to complete the lesson
    let csid2 = csid.replaceAll('_phx', '')
    let csid3 = csid2.replaceAll('.phx', '')
    if (csid3.includes('.20.v2_')) {
        isQuiz= 'true';
    } else if (csid3.includes('.10.v2_')) {
        isQuiz= 'false';
        wefwef()
    }

}
function wefwef() {
    setTimeout(() => {
        document.getElementById('continue-button-button').click()
    }, 1000)
    setTimeout(() => {
        p1(100)
    }, 12000)
}
