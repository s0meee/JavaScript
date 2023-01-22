let age = 21

if(age >= 18){
  console.log("오토바이 운전이 가능합니다.")
} else if(age > 20) {
  console.log("운전이 가능합니다.")
}else{
  console.log("운전이 불가능합니다.")
}
//오토바이 운전이 가능합니다. 라고 나오는 이유 
// if문도 참
// else if문 도 참
//if문 참 > 그 해당 문 실행 한다음 if문을 종료해버림
//조건 범위가 있다면 범위를 작은것부터 큰것으로 두어야 함 