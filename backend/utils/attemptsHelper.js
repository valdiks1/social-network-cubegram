export const average = (list, count=list.length) => {
    if(count > list.length) return null;
    if(list.length == count){
        let sum = 0;
        for(let i = 0; i < count; i++){
            sum += +list[i].time;
        }
        return sum / count;
    }else{
        let myList = list.slice(list.length-count);
        let sum = 0;
        for(let i = 0; i < myList.length; i++){
            sum += +myList[i].time;
        }
        return sum / count;
    }
}