const startButton = document.getElementById('start');
const changeButton = document.getElementById('change');
const parallelButton = document.getElementById('parallel');

startButton.addEventListener('click', () => {
    const queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        const currentTab = tabs[0];

        setInterval(() => {
            chrome.scripting.executeScript({
                target: {tabId: currentTab.id, allFrames: true},
                files: ['auto.js'],
            });
        }, 2000);

    });

});

changeButton.addEventListener('click', () => {
    const queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        const currentTab = tabs[0];

        chrome.scripting.executeScript({
            target: {tabId: currentTab.id, allFrames: true},
            files: ['change.js'],
        });

    });

});

parallelButton.addEventListener('click', () => {
    const queryOptions = { active: true, currentWindow: true };
    chrome.tabs.query(queryOptions, (tabs) => {
        const currentTab = tabs[0];
        
        function openTabs(currentUrlStr) {
            const currentUrl = new URL(currentUrlStr);
            const currentPageNum = new Number(currentUrl.searchParams.get('wr_page'));
            const totalPageNum = new Number(document.getElementById('total').innerText);
            for (let i = currentPageNum + 1; i < totalPageNum + 1; i++) {
                const nextUrl = currentUrl.protocol + '//' + currentUrl.host + currentUrl.pathname + `?wr_page=${i}`;
                window.open(nextUrl);
            }
        }

        chrome.scripting.executeScript({
            target: {tabId: currentTab.id, allFrames: true},
            func : openTabs,
            args: [currentTab.url]
        });

    });
});
