/*
	피보나치 수는 F(0) = 0, F(1) = 1일 때, 2 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 점화식입니다.
	2 이상의 n이 입력되었을 때, fibonacci 함수를 제작하여 n번째 피보나치 수를 반환해 주세요.
	예를 들어 n = 3이라면 2를 반환해주면 됩니다.
*/

function fibonacci(num) {
	if(num < 2) {
		return num
	}
	return fibonacci(num-1) + fibonacci(num-2);
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3))

// 타임아웃으로 아래와 같이 변경

function fibonacci(num) {
	var result = [0, 1]
	function fib(i) {
		if(typeof result[i] === "undefined") {
			result[i] = result[i-1] + result[i-2]
		}
		return result[i]
	}
	for(let i=0;i<=num;i++) {
		fib(i)
	}
	return result[num]
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(fibonacci(3))