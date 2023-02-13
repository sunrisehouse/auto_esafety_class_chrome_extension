const startButton = document.getElementById('start');

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

})
