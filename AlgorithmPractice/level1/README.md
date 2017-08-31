# Level1

## 1. 평균구하기 (GettingAnAverage.js)

```
function average(array){
	//함수를 완성하세요
	let result = 0
	const arraySize = array.length
	for(let i = 0; i < arraySize; i++) {
		result += array[i]
	}
	return result / arraySize;
}


// 아래는 테스트로 출력해 보기 위한 코드입니다.
var testArray = [5,3,4]
console.log("평균값 : " + average(testArray));
```

for문 비교시 array.length 대신 외부에서 arraySize을 선언하여 성능을 조금이라도 높이고 싶었다.

다른 사람들의 코드들을 보니까 다음과 같이 ES6의 reducer를 많이 사용했다.

```
function average(array){
	return array.reduce((a, b) => a + b) / array.length;
}
```

[reduce의 간단한 설명](https://msdn.microsoft.com/ko-kr/library/ff679975(v=vs.94).aspx)은 링크로 대체.

[Arrow Function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)도 링크로 대체

## 2. 짝수와 홀수 (EvenAndOdd.js)

```
function evenOrOdd(num) {
	// 함수를 완성하세요
	return num%2 === 0 ? "Even" : "Odd"
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + evenOrOdd(2));
console.log("결과 : " + evenOrOdd(3));
```

다른 사람들 코드를 보니 0은 조건문에서 false이므로 다음과 같이 작성한 사람들도 많았다.

```
return num % 2 ? "Odd" : "Even"
```

## 3. 정수제곱근판별하기 (NextSqaure.js)

```
function nextSqaure(n){
	const squareRoot = Math.sqrt(n)
	return Number.isInteger(squareRoot) ? Math.pow((squareRoot+1), 2) : "no"
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log("결과 : " + nextSqaure(121));
```

**Math.sqrt**를 사용하여 제곱근을 구하고, **Number.isInteger**를 사용하여 정수를 판별했다.

그리고 **Math.pow**를 통해서 거듭제곱으로 반환했다.

다른 사람들 코드를 보니 정수판별하는 방법으로 다음과 같이 사용한 사람들도 있었다.

```
parseInt(root) - root === 0  // 정수 값과 차이
Math.sqrt(n) == parseInt(Math.sqrt(n)) // 제곱근을 구하고 정수 값과 일치여부
```