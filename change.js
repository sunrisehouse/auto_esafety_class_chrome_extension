// const g4_lms_plug = '../../../lms/plugin'

// function open_lecview(p_id, s_id, wr_order, wr_page,bid){
//     window.open(g4_lms_plug+'/player/index.php?p_id='+p_id+'&s_id='+s_id+'&wr_order='+wr_order+'&wr_page='+wr_page+'&bid='+bid,'_blank');
// }

// const buttonDivEles = document.getElementsByClassName('css_button');

// for (let i = 0; i < buttonDivEles.length; i++) {
    // const code = buttonDivEles[i].getElementsByTagName("a")[0].href;
    // const leftIndex = code.indexOf('(');
    // const rightIndex = code.indexOf(')');
    // const sliced = code.slice(leftIndex + 2, rightIndex - 1);
    // const splited = sliced.split(/'\s*,\s*'/);
    // console.log(splited)
    // open_lecview(...splited)
// }

const g4_lms_plug = '../../../lms/plugin';

function open_lecview(p_id, s_id, wr_order, wr_page,bid){
    window.open(g4_lms_plug+'/player/index.php?p_id='+p_id+'&s_id='+s_id+'&wr_order='+wr_order+'&wr_page='+wr_page+'&bid='+bid,'_blank');
}

const buttonDivEles = document.getElementsByClassName('css_button');

for (let i = 0; i < buttonDivEles.length; i++) {
    const code = buttonDivEles[i].getElementsByTagName("a")[0].href;
    const leftIndex = code.indexOf('(');
    const rightIndex = code.indexOf(')');
    const sliced = code.slice(leftIndex + 2, rightIndex - 1);
    const splited = sliced.split(/'\s*,\s*'/);

    buttonDivEles[i].getElementsByTagName("a")[0].href = "";
    buttonDivEles[i].getElementsByTagName("a")[0].addEventListener('click', (e) => {
        e.preventDefault();
        open_lecview(...splited)
    });
}
