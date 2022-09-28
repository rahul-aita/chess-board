
// console.log(chessIdFetch,"chess id cheak ")

    let numberOfBoxInchess=[1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,]
    console.log(numberOfBoxInchess.length)
    for(let i=1;i<numberOfBoxInchess.length;i++){
        const chessIdFetch=document.getElementById('chessLoop')
        chessIdFetch.innerHTML +=`<div class="col-1 col-lg-1 box_${i}"></div>`
        // console.log(`box_${i}`==odd,"odd even class")
        // if(`box_${i}`==odd){

        // }
    }
