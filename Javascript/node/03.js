let year = 1900;

if(year%4==0 ){
    if(year%400==0){
        console.log('yes')
    }else if (year%100==0) {
        console.log('no')
    } else {
        console.log('yes')
    }
}else{
    console.log('no')
}

if (year %4==0 && (year%100!=0 || year %400==0)){
    console.log(`${year} is leap year`) 
}
else{
    console.log(`${year} is not leap year`) 
}
