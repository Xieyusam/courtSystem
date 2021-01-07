export function orderTimeType(value){
    value = parseInt(value)
    const type = [
        "9:00 - 10:00",
        "10:00 - 11:00",
        "11:00 - 12:00",
        "3:00 - 4:00",
        "4:00 - 5:00",
        "5:00 - 6:00",
        "7:00 - 8:00",
        "8:00 - 9:00",
        "9:00 - 10:00"
    ]
    return type[value]
}

export function courtType(value){
    value = parseInt(value)
    const type = [
        "",
        "羽毛球",
        "篮球",
        "乒乓球",
        "桌球",
        "网球",
        "排球"
    ]
    return type[value]
}

export function returnThreeDay(){
    let ThreeDay = [] 
    let dayValue = new Date()
    // 今天
    dayValue.setTime(dayValue.getTime());
    const today = {
        str:dayValue.getFullYear()+"-" + (dayValue.getMonth()+1) + "-" + dayValue.getDate(),
        gettime:dayValue.getTime()
    }
    ThreeDay.push(today)
    // 明天
    dayValue.setTime(dayValue.getTime()+24*60*60*1000);
    const tomorrow = {
        str:dayValue.getFullYear()+"-" + (dayValue.getMonth()+1) + "-" + dayValue.getDate(),
        gettime:dayValue.getTime()
    }
    ThreeDay.push(tomorrow)
    // 后天
    dayValue.setTime(dayValue.getTime()+24*60*60*1000);
    const lastday = {
        str:dayValue.getFullYear()+"-" + (dayValue.getMonth()+1) + "-" + dayValue.getDate(),
        gettime:dayValue.getTime()
    }
    ThreeDay.push(lastday)
    
    return ThreeDay
}