// Holiday IV - Shark Pontoon
// https://www.codewars.com/kata/57e921d8b36340f1fd000059

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    let shark = sharkDistance / sharkSpeed
    let you = pontoonDistance / youSpeed

    if (dolphin == true) {
        if ((shark * 2) >= you) {
            return 'Alive!'
        } else {
            return "Shark Bait!"
        }
    } else {
        if ((shark) >= you) {
            return 'Alive!'
        } else {
            return "Shark Bait!"
        }
    }
}