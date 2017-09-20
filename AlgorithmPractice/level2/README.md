# Level2

## 1. 최솟값 만들기 (getMinSum.js)

```
function getMinSum(A,B){
	A.sort(function(prev, cur){
		return cur - prev
	})
	B.sort(function(prev, cur){
		return prev - cur
	})
	let count = 0
	A.forEach(function(item, idx){
		count += item * B[idx]
	})
	return count
}

var tA = [1,2],
tB = [3,4];

console.log(getMinSum(tA,tB));
```

최솟값을 만들기 위해서 하나의 배열은 큰수로 정렬하고 하나의 배열은 작은수로 정렬하고 각 항목을 곱해서 더한 프로그램을 작성했다.

다른 사람들 코드를 보니 크게 특이사항은 없었다.

## 2. 행렬의 곱셈 (productMatrix.js)

'''
function productMatrix(A, B) {
	let answer = [];
	const axLen = A.length;
	for(let i=0;i<axLen;i++) {
		let row = [];
		const byLen = B[0].length
		for(let j=0;j<byLen;j++) {
			let x = 0;
			const commonLen = A[0].length
			for(let k=0;k<commonLen;k++) {
				x += A[i][k] * B[k][j]
			}
			row.push(x)
		}
		answer.push(row)
	}
	return answer;
}

var a = [
  [ 2, 10, 5, 5 ],
  [ 2, 6, 8, 2 ],
  [ 7, 5, 7, 8 ],
  [ 11, 10, 8, 5 ],
  [ 6, 7, 11, 9 ]
]
var b =  [
  [ 4, 2, 3, 8, 10, 3 ],
  [ 6, 8, 9, 9, 6, 7 ],
  [ 4, 9, 5, 3, 11, 8 ],
  [ 2, 9, 6, 5, 3, 4 ]
]
console.log("결과 : " + productMatrix(a, b));
'''

현재까지 문제중에 제일 오래 걸린 문제...

행렬... 너무 오랜만이다... ㅠ.ㅜ

다른 사람들 코드보니 ***A[0].length*** 대신 ***B.length***를 더 많이 사용했다.

그리고 간단한 코드로는 다음과 같이 map과 reduce를 사용했다.

```
const productMatrix = (A, B) => A.map(a => B.map((b, j) =>
    a.reduce((ap, ac, k) => ap + ac * B[k][j], 0
)));
```

## 3. 가장 긴 팰린드롬(longestPalindrom.js)

```
function isPalindrome(str) {
    for (var k = 0; k < str.length; k++) {
        if (str[k] !== str[str.length - 1 - k]) {
            return false;
        }
    }
    return true;
}

function longest_palindrom(str) {
    var longer = '';
    var tmpStr = '';
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length; j++) {
            tmpStr = str.slice(i, j+1);
            if (isPalindrome(tmpStr) && (tmpStr.length > longer.length)) {
                longer = tmpStr;
            }
        }
    }
    return longer.length;
}

console.log( longest_palindrom("토마토맛토마토") )
console.log( longest_palindrom("토마토맛있어") )
```

팰린드롬에 대해서 잘 몰라서 ... 결국 검색을 해서 해결함. 다양하고 비슷한 코드들이 있었으나 그 중에서 isPalindrome를 이용하여 true, false 를 체크하고 longer와 비교하여 큰 값을 담는 방식으로 진행했다.

## 4. 2016년(getDayName.js)

```
const dayName = ["SUN","MON","TUE","WED","THU","FRI","SAT"]

function getDayName(a,b){
	const getDay = new Date(`2016-${a}-${b}`).getDay()
	return dayName[getDay];
}

console.log(getDayName(5,24));
```

다른 사람들 코드를 보니 다음과 같이 작성한 사람들도 많았다. 하지만 이건 서버 locale에 따라 다른 값을 출력할 수 있다.

```
function getDayName(a,b){
    return new Date(2016, (a - 1), b).toString().slice(0, 3).toUpperCase();
}
```

## 5. 하샤드수(harshad.js)
```
function Harshad(n){
	const stringN = String(n)
	const len = stringN.length;
	let sum = 0
	for(var i=0;i<len;i++){
		sum += Number(stringN.charAt(i))
	}
	if(n % sum === 0){
		return true
	}
	return false
}

console.log(Harshad(18))
```

다른 사람들의 코드를 보니, split("")을 이용해서 배열을 만들기도 하고, String(n)대신 n + ""으로 처리한 사람들도 많았다.

그 중 다음과 같이 한줄로 작성 한 사람들 코드도 어느정도 있었다.

```
function Harshad(n){
	return !(n%(n+'').split('').reduce(function (i, sum) {return +sum + +i;}));
}
```

## 6. 소수 찾기(numberOfPrime.js)
```
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

console.log( numberOfPrime(10) )
```

받은 숫자를 2부터 반복문을 돌려서 isPrimeNum을 통해서 소수인지 체크 후 카운터를 올려서 작업했다.

## 7. 콜라츠 추측(collatz.js)
```
function collatz(num, count = 0) {
	if(count >= 500) {
		return -1
	}
	return num === 1 ? count : collatz( num % 2 === 0 ? num/2 : num*3 +1, count + 1)
}

console.log( collatz(6) );
```

다른 사람들 코드를 보니 재귀 호출 대신 for, while로 작성한 사람들도 많았다.

## 8. 괄호 확인하기(isPair.js)
```
function is_pair(s){
	const arr = s.split("");
	const bracketArr = arr.filter((e)=>{
		return e === ")" || e === "("
	})
	if(bracketArr[0] === ")") {
		return false
	}
	if(bracketArr.filter((e)=>{ return e === ")" }).length !== bracketArr.filter((e)=>{ return e === "(" }).length) {
		return false
	}
	return true
}

console.log( is_pair("(hello)()") )
console.log( is_pair(")(") )
```

나는 ")", "("괄호만 배열로 만들어서 첫번째가 )인 경우나 )와 (만 뽑은 배열의 숫자가 다른 경우를 false로 하고 그 외를 true로 했다.

다른사람들 코드를 보니 다양하기도 했지만, 가장 쉽게 알 수 있는게 반복문에서 ")"에는 push, "("에는 pop을 하고 pop을 하는경우 statck.length 가 이미 0이면 false를 return 하는게 가장 쉽게 다가왔다.

```
function is_pair(s){
	var result = true;
	var a = s.split(''), st=[];

	for( var i = 0; i < a.length; i++ ) {
		if( a[i] == '\(' ) {
			st.push(a[i]);
		} else if( a[i] == '\)' ) {
			if( st.length == 0 ) {
				return false;
			}
			st.pop();
		}
	}
	if( st.length != 0 ) result = false;
	return result;
}
```

## 9. 두 정수 사이의 합(adder.js)
```
function adder(a, b){
	let result = 0
	const len = Math.abs(a-b)
	const min = Math.min(a,b)
	for(let i = 0;i<=len;i++ ) {
		result += min + i
	}
	return result;
}
console.log( adder(3, 5) )
```

두수를 비교하여 작은값에서 큰값까지의 수를 모두 더하는 생각을 했다.

나랑 비슷하게 짠 사람도 많았지만... 다음 코드를 보고 아차 했다.

```
return (a+b)*(Math.abs(b-a)+1)/2;
```

## 10. 이상한 문자만들기 (toWeirdCase.js)
```
function toWeirdCase(s){
	const result = s.toLowerCase().split(" ").map((word, idx1)=>{
		return word.split("").map((letter, idx2)=>{
			if(idx2 % 2 === 0) {
				return letter.toUpperCase()
			}
			return letter
		}).join("")
	})
	return result.join(" ")
}
```

문장 전체를 소문자로 변환하고 단어별로 잘라서, 각 글자가 짝수인 경우 대문자로 치환했다.

## level2을 마치며...

전체적으로 level1보다 어렵다를 느낄 정도는 아니었지만, **2. 행렬의 곱셈 (productMatrix.js)**, **3.가장 긴 팰린드롬(longestPalindrom.js)**에서 긴 시간을 보냈다.

