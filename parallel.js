function openTabs(currentUrlStr) {
    const currentUrl = new URL(currentUrlStr);
    const currentPageNum = new Number(currentUrl.searchParams.get('wr_page'));
    const totalPageNum = new Number(document.getElementById('total').innerText);
    for (let i = currentPageNum + 1; i < totalPageNum + 1; i++) {
        const nextUrl = currentUrl.protocol + '//' + currentUrl.host + currentUrl.pathname + `?wr_page=${i}`;
        window.open(nextUrl, '_blank') 
    }
}
openTabs(window.location.href);