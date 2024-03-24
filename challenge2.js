//Speed Detector
function speedDetector(speed){
    const speedLimit = 70;
    if (speed <= speedLimit){
        return 'OK'
    }
    else {
        const demeritPoints = (speed - speedLimit)/5;
        if (demeritPoints > 12){
            return 'License Suspended.'
        } else {
            return `Points: ${demeritPoints}`
        }
    }
}
console.log(speedDetector())