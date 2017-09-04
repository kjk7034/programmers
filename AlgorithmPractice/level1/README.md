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

## 14. 최대공약수와 최소공배수 (GcdLcm.js)

```
function gcdlcm(a, b) {
	let gcd, lcm
	for(let i = 1; i <= Math.min(a, b); i++)    {
		if(a % i == 0 && b % i == 0){
			gcd = i;
		}
	}
	lcm = a * b / gcd
	return [gcd, lcm];
}

console.log(gcdlcm(3,12));
```

 최대공약수와 최소공배수... 이 단어를 몇년만에 들어보는지 가물가물...

 구하는 공식은 기억도 안나고 결국 1부터 작은 수까지 반복문을 돌려서 최대 공약수를 구하고, 이를 이용하여 최소공배수를 구했다.

 이제 다른 사람들 코드도 봐야 겠지만 최대공약수를 구하는 다른 방법을 찾다보니 **[유클리드 호제법 (Euclidean algorithm)](https://ko.wikipedia.org/wiki/%EC%9C%A0%ED%81%B4%EB%A6%AC%EB%93%9C_%ED%98%B8%EC%A0%9C%EB%B2%95)**이라는 것이 있었다.

 음... 분명 공부했었겠지만... 기억이 안난다...

 2개의 자연수 또는 정식(整式)의 최대공약수를 구하는 알고리즘의 하나. 이를 이용해보기로 하고 다시 다음과 같이 함수 작성.

```
function gcdFunc(a, b) {
	return b ? gcdFunc(b, a % b) : a;
}

function gcdlcm(a, b) {
	let gcd, lcm
	gcd = gcdFunc(Math.max(a,b), Math.min(a,b))
	lcm = a * b / gcd
	return [gcd, lcm];
}

console.log(gcdlcm(3,12));
```

다른 사람들 코드를 보니 반복문 보다는 유클리드 호제법으로 작성한 사람이 많았다. 그리고 나는 gcdFunc에서 Math.max, Math.min으로 큰수, 작은수를 받아 사용했지만, 상관없이 값을 받아서 Math.abs로 절대값을 반환한 사람들도 있었다.

```
function greatestCommonDivisor(a, b) {return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);}
function leastCommonMultipleOfTwo(a, b) {return (a * b) / greatestCommonDivisor(a, b);}
function gcdlcm(a, b) {
    return [greatestCommonDivisor(a, b),leastCommonMultipleOfTwo(a, b)];
}

console.log(gcdlcm(3,12));
```

## 15. 피보나치 수 (Fibonacci.js)

음... 피보나치 수열이란 이름으로 기억은 하는데 ... 알고리즘은 기억이 안난다 ㅠ.ㅜ

간단하게 문제를 보고 다음과 같이 작성했다.

```
function fibonacci(num) {
	if(num < 2) {
		return num
	}
	return fibonacci(num-1) + fibonacci(num-2);
}

console.log(fibonacci(3))
```

위와 같이 작성했더니 타임아웃...

결국 다음과 같이 값을 저장해서 해결했다.

```
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

console.log(fibonacci(3))
```

다른사람들 코드를 보니 타임아웃한 내 코드와 비슷한데.. 어떻게 통과한건지 모르겠다 ^^;;

내가 작성한 두 함수 중 두번째 함수가 성능이 좋다는 것을 쉽게 알 수 있다.


## level1을 마치며...

가장 easy한 level1이 ... 오래 전 공부했던 함수, 행렬 등 수학적인 문제들에서 당황을 여러번했다.

ES6를 간혹 사용하기도 하고 기본적으로 접근해보기도 하고, 재미있었다.

회사에서 업무중 시간이 남을때 조금씩 하고는 있는데, level1단계가 이정도면 과연... 뒤에는 어떤 내용들이 있으려나...

게임스테이지로 치면 라운드 1인데... ㅎㅎ

이제 level2로 ~~ :)