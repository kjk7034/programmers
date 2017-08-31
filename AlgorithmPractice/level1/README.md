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

