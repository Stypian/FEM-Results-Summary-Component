function dynamicSummary() {
    const ratioNum = document.querySelectorAll(".resultSum__count-num");
    const resultNum = document.querySelector(".resultSum__circle-number");
    const countArr = [];
        ratioNum.forEach((e, i) => {
            let countNum = 0;
            const targetNum = dynamicData[i].score;
            countArr.push(targetNum);
            let countInt = setInterval(() => {
                e.innerHTML = countNum;
                if (countNum < targetNum) {
                    countNum++;
                } else {
                    clearInterval(countInt);
                }
            }, 10);
        });
}

dynamicSummary();

function dynamicResult() {
    const resultNum = document.querySelector(".resultSum__circle-number");
    const countArr = [];
    dynamicData.forEach(e => countArr.push(e.score));
    let average = countArr.reduce((a, v) => a + v);
    average = Math.round(average / countArr.length);
    let countNum = 0;

    setTimeout(() => {
        let countInt = setInterval(aniCount, 10);
        function aniCount() {
            if (countNum < average) {
                resultNum.innerHTML = ++countNum;
            } else {
                clearInterval(countInt);
            }
        }
    }, 1200);
}

dynamicResult();

