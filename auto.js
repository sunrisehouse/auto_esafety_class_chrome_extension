setInterval(() => {
    const nextButtonEle = document.getElementById("btn_next");
    if (nextButtonEle.classList.contains('on')) {
        console.log('now!')
        nextButtonEle.click();
    } else {
        console.log("not yet")
    }
    
}, 2000);
