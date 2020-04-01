function cal_time_to_sleep(str) {
    let replace_n = str.split(/\n/)
    let arr = []
    for (let i = 0; i < replace_n.length ; i += 1) {
        const day = replace_n[i].split(' ')[0]
        const time = replace_n[i].split(' ')[1].split('-')
        const timeS = (Number(time[0].split('.')[1]) + Number(time[0].split('.')[0])*60)
        const timeL = (Number(time[1].split('.')[1]) + Number(time[1].split('.')[0])*60)
        const timelast = 24*60 - Math.max(timeS, timeL)
        arr.push({ day: day, mins: timelast, start: Number(time[0])})
    }
    const Mon = iteration(arr, 'Mon') + maxDay(arr, 'Sun') // หาว่าเริ่มงานกี่โมง * 60 (mins) + วันก่อนหน้านอนกี่นาที (mins)
    const Tue = iteration(arr, 'Tue') + maxDay(arr, 'Mon')
    const Wed = iteration(arr, 'Wed') + maxDay(arr, 'Tue')
    const Thu = iteration(arr, 'Thu') + maxDay(arr, 'Wed')
    const Fri = iteration(arr, 'Fri') + maxDay(arr, 'Thu')
    const Sat = iteration(arr, 'Sat') + maxDay(arr, 'Fri')
    const Sun = iteration(arr, 'Sun') + maxDay(arr, 'Sat')
    const minsMax = Math.max(Mon, Tue, Wed, Thu, Fri, Sat, Sun)
    // console.log(Mon, Tue, Wed, Thu, Fri, Sat, Sun)
    return `u can sleep -> ${minsMax} mins in ${calDay([Mon, Tue, Wed, Thu, Fri, Sat, Sun].indexOf(minsMax))}`

}

function calDay(index) {
    if (index == 1) return 'Mon'
    if (index == 2) return 'Tue'
    if (index == 3) return 'Wed'
    if (index == 4) return 'Thu'
    if (index == 5) return 'Fri'
    if (index == 6) return 'Sat'
    // if (index == 6) return 'Mon'
    return 'Sun'
}

// หาว่าเริ่มงานกี่โมง * 60 (mins)
function iteration(arr, day) { 
    const filterA = arr.filter(x => x.day == day)
    const min = filterA.reduce((min, b) => Math.min(min, b.start), filterA[0].start)
    return min*60
}

// วันก่อนหน้านอนกี่นาที (mins)
function maxDay(arr, day) {
    const filterA = arr.filter(x => x.day == day)
    const max = filterA.reduce((max, b) => Math.max(max, b.mins), filterA[0].mins)
    return max

}

function quest1(input) {
    const size = Math.round(input.length / 4)
    let result = 0
    let sum = 0
    for (let i =0; i < input.length; i += size) {
        let count = 0
        for (let j =0 ; j < size; j += 1) {
            count += input[i+j]
        }
        if (sum < Math.abs(count)) {
            sum =  Math.abs(count)
            result = size - i
            console.lo
        }
    }

    if (result == size) return "SUMMER"
    if (result == 0) return "SPRIM"
    if (result == -size) return "WINTER"
    return "XAS"
}

console.log(quest1([-20,2,3,4,5,6,7,8]))
console.log(cal_time_to_sleep('Mon 18.00-19.00\nSun 17.00-20.00\nTue 18.00-24.00\nWed 20.00-23.59\nSat 10.00-13.45\nSat 16.00-21.00\nThu 21.00-22.00\nFri 20.00-21.00'))