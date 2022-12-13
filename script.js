let lists = document.querySelectorAll('li')
let leftSpan = document.querySelector('.left span')
let rightSpan = document.querySelector('.right span')
let inputFirst = document.querySelector('.first')
let inputSecond = document.querySelector('.second')
inputFirst.value = '1'

lists.forEach(lists => {
    lists.addEventListener('click', function (e) {

        const selectedList = e.target
        const side = selectedList.parentElement.parentElement
        // console.log(side)
        const blueviolet = side.querySelector('.blueviolet')
        blueviolet.classList.remove('blueviolet')
        selectedList.classList.add('blueviolet')
        let leftUnit = document.querySelector('.left .blueviolet')
        let rightUnit = document.querySelector('.right .blueviolet')



        fetch(`https://api.exchangerate.host/latest?base=${leftUnit.innerText}&symbols=${rightUnit.innerText}`)
            .then(response => response.json())
            .then(res => {

                let exg = res.rates[rightUnit.innerText]
                leftSpan.innerText = `1 ${leftUnit.innerText} = ${exg} ${rightUnit.innerText}`
                // inputFirst.addEventListener('keydown', function (e) {
                // inputFirst.value = '1'
                inputSecond.value = inputFirst.value * exg
                // Math.floor(inputSecond.value) = inputFirst.value * exg

                // }, false);
            })

        fetch(`https://api.exchangerate.host/latest?base=${rightUnit.innerText}&symbols=${leftUnit.innerText}`)
            .then(response => response.json())
            .then(res => {
                let exg = res.rates[leftUnit.innerText]
                rightSpan.innerText = `1 ${rightUnit.innerText} = ${exg} ${leftUnit.innerText}`

                inputFirst.value = inputSecond.value * exg
            })





    })

})

window(onload)