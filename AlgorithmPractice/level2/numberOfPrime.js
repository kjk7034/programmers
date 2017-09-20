/*
	numberOfPrime 메소드는 정수 n을 매개변수로 입력받습니다.

	1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하도록 numberOfPrime 메소드를 만들어 보세요.

	소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
	(1은 소수가 아닙니다.)

	10을 입력받았다면, 1부터 10 사이의 소수는 [2,3,5,7] 4개가 존재하므로 4를 반환
	5를 입력받았다면, 1부터 5 사이의 소수는 [2,3,5] 3개가 존재하므로 3를 반환
*/

function isPrimeNum(n){
	var result = true
	for(let i=2;i<=n-1;i++){
		if(n % i  === 0) {
			result =  false
			break;
		}
	}
	return result
}

function numberOfPrime(n) {
	var result = 0;
	for(let i=2;i<=n;i++){
		if(isPrimeNum(i)) {
			result += 1
		}
	}
	return result;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numberOfPrime(10) )