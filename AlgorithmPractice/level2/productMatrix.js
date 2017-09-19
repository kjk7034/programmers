/*
	행렬의 곱셈은, 곱하려는 두 행렬의 어떤 행과 열을 기준으로,
	좌측의 행렬은 해당되는 행, 우측의 행렬은 해당되는 열을 순서대로 곱한 값을 더한 값이 들어갑니다.
	행렬을 곱하기 위해선 좌측 행렬의 열의 개수와 우측 행렬의 행의 개수가 같아야 합니다.
	곱할 수 있는 두 행렬 A,B가 주어질 때,
	행렬을 곱한 값을 출력하는 productMatrix 함수를 완성해 보세요.
*/

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

// 아래는 테스트로 출력해 보기 위한 코드입니다.
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

// 결과 값 :  [ [ 98, 174, 151, 146, 150, 136 ],
//   [ 80, 142, 112, 104, 150, 120 ],
//   [ 102, 189, 149, 162, 201, 144 ],
//   [ 146, 219, 193, 227, 273, 187 ],
//   [ 128, 248, 190, 189, 250, 191 ]
// ]