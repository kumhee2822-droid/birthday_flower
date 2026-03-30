const userMonth = document.querySelector('#user_month');
const birthdayBtn = document.querySelector('#birthday_btn');
const errorMsg = document.querySelectorAll('.error_msg');
const userYear = document.querySelector('#user_year');
const userDay = document.querySelector('#user_day');
console.log(userMonth, birthdayBtn, errorMsg, userYear, userDay);

//태어난 달을 입력 안하고 버튼을 클릭하면
//error_msg2 출력하기
birthdayBtn.addEventListener('click', function(){
    //태어난 달의 값이 빈문자열과 같으면 콘솔실행
    if(userMonth.value == '') msg_func(1, 'block');
    else msg_func(1);
    if(userYear.value == '') msg_func(0, 'block');
    else msg_func(0);
    if(userDay.value == '') msg_func(2, 'block')
    else msg_func(2);
})
//태어난 년도, 일 입력안하고 버튼 클릭 시 해당 error_msg 출력하기

//반복 목적 함수(이벤트 밖)
function msg_func(index, value='none'){
    return errorMsg[index].style.display = value;
}
