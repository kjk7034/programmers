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
```

팰린드롬에 대해서 잘 몰라서 ... 결국 검색을 해서 해결함. 다양하고 비슷한 코드들이 있었으나 그 중에서 isPalindrome를 이용하여 true, false 를 체크하고 longer와 비교하여 큰 값을 담는 방식으로 진행했다.

