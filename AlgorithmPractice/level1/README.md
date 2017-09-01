# Level1

## 1. 평균구하기 (GettingAnAverage.js)

```
function average(array){
	let result = 0
	const arraySize = array.length
	for(let i = 0; i < arraySize; i++) {
		result += array[i]
	}
	return result / arraySize;
}

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
	return num%2 === 0 ? "Even" : "Odd"
}

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

console.log("결과 : " + nextSqaure(121));
```

**Math.sqrt**를 사용하여 제곱근을 구하고, **Number.isInteger**를 사용하여 정수를 판별했다.

그리고 **Math.pow**를 통해서 거듭제곱으로 반환했다.

다른 사람들 코드를 보니 정수판별하는 방법으로 다음과 같이 사용한 사람들도 있었다.

```
parseInt(root) - root === 0
Math.sqrt(n) == parseInt(Math.sqrt(n))
```

## 4. 역삼각형 출력하기 (PrintReversedTriangle.js)

```
function printReversedTriangle(num) {
	var result = ''
	for(var i=0; i < num; i++) {
		for(var j=0; j < num; j++) {
			if(i <= j) {
					result += '*'
				}
			}
		result += '\n'
	}
	return result
}

console.log("결과 : " +'\n'+ printReversedTriangle(3));
```

나는 2중 for문을 이용했다. 다른 사람들의 코드를 보니 이번 문제는 얻을 정보들이 많았다.

다음과 같이 사용한 사람들도 있고,

```
while(num>0){result+=Array(num+1).join("*")+'\n';num--}
```

다음과 같이 [repeat](https://msdn.microsoft.com/ko-kr/library/dn858244(v=vs.94).aspx)를 이용한 사람들도 있었다.

```
function printReversedTriangle(n) {
  	return n > 0 ? '*'.repeat(n) + '\n' + printReversedTriangle(n-1) : '';
}

function printReversedTriangle(num) {
	return '*'.repeat(num) + (num && '\n' + printReversedTriangle(num - 1) || '');
}
```

개인적으로는 repeat와 재귀함수를 이용하는게 코드가 더 눈에 들어왔다.

## 5. 수박수박수박수박수박수? (WaterMelon.js)

```
function waterMelon(n){
	var result = ""
	for(let i=0;i<n;i++){
		result += i%2 ? "박" : "수"
	}
	return result;
}

console.log("n이 3인 경우: "+ waterMelon(3))
console.log("n이 4인 경우: "+ waterMelon(4))
```

다른 사람들 코드를 보니 repeat를 사용한 사람이 많았다. 이전 문제의 영향도가 있는것 같기도하고, 내 코드보다는 repeat가 더 잘 들어오는 것 같다.

```
function waterMelon(n){
	// n을 2로나눈 몫 만큼 곱하고 나머지가 있으면 '수' 더해라.
	return ("수박").repeat(n/2) + ((n%2) ? '수' : '');
}

function waterMelon(n){
	var result = "수박";
	return result = result.repeat(n-1).substring(0,n);
}
```

## 6. 삼각형출력하기 (PrintTriangle.js)

```
function printTriangle(num) {
	var result = ''
	for(var i=1; i <= num; i++) {
		result += ("*").repeat(i) + "\n"
	}
	return result
}

console.log( printTriangle(3) );
```

4번 역삼각형 출력하기에서 조건문을 바꿔서 출력할 수도 있겠지만, repeat를 한번 사용해 봤다.

## 7. 핸드폰번호 가리기 (HideNumbers.js)

```
function hide_numbers(s){
	let result = ""
	const numSize = s.length
	for(var i = 0 ; i<numSize ;i++) {
		result += (numSize-i > 4) ? "*" : s[i]
	}
	return result
}

console.log("결과 : " + hide_numbers('01033334444'));
```

다른 사람들 코드를 보니 정규식을 사용한 사람, repeat를 사용한 사람, 다양한 코드들을 볼 수 있었다.

```
// 정규식
function hide_numbers(s) {
	return s.replace(/\d(?=\d{4})/g, "*");
}

// repeat
function hide_numbers(s){
	return "*".repeat(s.length - 4) + s.slice(-4);
}
```

여기서 반복문 안에서 현재 값을 가져올 때 s[i]를 사용했고 charAt을 사용한 사람들이 있어서 [charAt vs index vs slice vs substring](https://jsperf.com/charat-vs-index/5)을 보고 성능을 보니 charAt을 써야겠다 생각을 했다.

## 8. 스트링을 숫자로 바꾸기 (StrToInt.js)

```
function strToInt(str){
	return Number(str);
}

console.log(strToInt("-1234"));
```

## 9. 서울에서김서방찾기 (FindKim.js)

```
function findKim(seoul){
	return `김서방은 ${seoul.indexOf("Kim")}에 있다`
}

console.log( findKim(["Queen", "Tod", "Kim"]));
```

다른 사람들 코드를 보니 대부분 반복문이나 indexOf를 사용하고 있다.

## 10. 문자열 다루기 기본 (AlphaString46.js)

```
function alpha_string46(s){
	const stringSize = s.length
	return (stringSize === 4 || stringSize === 6) && !isNaN(s) ? true : false
}

console.log( alpha_string46("3v29"));
```

숫자체크를 나는 **isNaN**을 이용했다. 다른 사람들 코드를 보니 정규식으로 한사람들도 있었고, 반복문을 사용한 사람도 있고 다양한 코드들이 있었다.

```
function alpha_string46(s){
	var regex = /^\d{6}$|^\d{4}$/;
	return regex.test(s);
}
```

## 11. 문자열 내 p와 y의 개수 (NumPY.js)

```
function numPY(s){
	var pCount = 0
	var yCount = 0
	for(let i = s.length; i > 0 ; i--) {
		switch(s.charAt(i-1)) {
			case "p" :
			case "P" :
				pCount += 1
			break;
			case "y" :
			case "Y" :
				yCount += 1
			break;
		}
	}
	return (pCount === yCount && pCount !== 0) ? true : false
}

console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )
```

처음에 대소문자 구분없다는 조건을 파악하지 못해서 case 추가.

이런 문제들은 대부분 정규식을 통해서 사용할 것 같았고, 역시나 다른 사람들 코드를 봤을때도 정규식 match를 많은 사람들이 사용했다.

그래서 다음과 같이 작성을 해봤다.

```
function numPY(s){
	const pCount = s.match(/p/ig) && s.match(/p/ig).length || 0
	const yCount = s.match(/y/ig) && s.match(/y/ig).length || 0
	return (pCount === yCount) ? true : false
}
```

## 12. 행렬의 덧셈 (SumMatrix.js)

```
function sumMatrix(A,B){
	const answer = [];
	const ASize = A.length
	for (let i=0; i < ASize;i++) {
		const row = []
		const rowSize = A[i].length
		for (let j=0; j < rowSize;j++) {
			row.push(A[i][j] + B[i][j])
		}
		answer.push(row)
	}
	return answer;
}

console.log(sumMatrix([[1,2], [2,3]], [[3,4],[5,6]]))
```

위와 같이 2중 for문으로 작성을 했다. 다른 사람들 코드를 보니, 나와 비슷하게 작업한 사람들도 있지만 Array.map을 사용한 사람들이 꽤 많았다.

보통 map은 데이터 배열을 새로 만들때 자주 사용했는데, 이 케이스에서는 왜 안떠올랐지 ...

ㅠ.ㅜ 아직 많이 부족하다...

다음과 같이 map을 통해서 간단하게 작업할 수 있었다.

```
function sumMatrix(A,B){
	return A.map((a,i) => a.map((b,j) => b + B[i][j]));
}
```

map이 익숙하지 않은 사람은 여기에서 [자바스크립트에서 당장 사용해야 할 5가지의 배열 메소드들 (Array)](http://blog.kazikai.net/?p=16)를 한번 쯤 보고 가면 좋을 것 같다.

## 13. 약수의 합 (SumDivisor.js)

```
function sumDivisor(num) {
	const arr = []
	for(let i = 1;i <= num;i++){
		if(num % i === 0) {
			arr.push(i)
		}
	}
	return arr.reduce((a, b) => a+b)
}

console.log(sumDivisor(12));
```

나는 문제에서 "12의 약수는 [1, 2, 3, 4, 6, 12]가 되고"를 통해서 배열을 만들어서 해당 배열을 더해줬는데,

다른 사람들 코드를 보니 나와 같이 배열을 만들어 사용한 사람도 있었고, 다음과 같이 for문에서 그냥 sum을 해서 return 해주는 사람들도 있었다.

```
function sumDivisor(num) {
	var answer = 0;
	for(var i = 1; i <= num; i++) {
		if(num % i == 0) answer += i;
	}
	return answer;
}
```

