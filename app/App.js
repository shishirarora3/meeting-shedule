import meetings from '../data/meetings.js'
let resultFinal = meetings.reduce((result, currentMeeting) => {
    var isAdded = false;
    for (let meetingsOverlapGroup of result){
        let meetings = meetingsOverlapGroup.meetings;
        meetings.forEach((meeting)=>{
            if(meeting.e<currentMeeting.s ||
                meeting.s>currentMeeting.e){
                //no collision

            }else{
                meetingsOverlapGroup.clashes++;
                meetings.push(currentMeeting);
                isAdded = true;
            }
        });

    }
    if(!isAdded){
        result.push({
            clashes:0,
            meetings:[ currentMeeting ]
        });
    }

    return result;
}, []);
const convertObjectToString = function(obj) {
    return Object.keys(obj)
        .reduce((result,key)=>result+=`${key} : ${obj[key]} `,'');
};
const meetingHTML = resultFinal
    .map(( {meetings: meetings,clashes: clashes}) => {
        let width = 100/(clashes+1);
        return meetings.reverse().map((meeting,i)=>{
            return `<div style="top:${meeting.s}px;
    height:${(meeting.e-meeting.s)*2}px;
    left:${(100-(width*(i+1)))}%;
    width:${width}%">${convertObjectToString( meeting )}</div>`;}).join('');
});



document.querySelectorAll('.map')[0].innerHTML = meetingHTML;