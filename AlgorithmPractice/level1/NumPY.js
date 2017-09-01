/*
	numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 매개변수로 입력받습니다.
	s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 리턴하도록 함수를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다.
	예를들어 s가 "pPoooyY"면 True를 리턴하고 "Pyy"라면 False를 리턴합니다.
*/

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

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log( numPY("pPoooyY") )
console.log( numPY("Pyy") )

function numPY2(s){
	const pCount = s.match(/p/ig) && s.match(/p/ig).length || 0
	const yCount = s.match(/y/ig) && s.match(/y/ig).length || 0
	return (pCount === yCount) ? true : false
}
console.log( numPY2("pPoooyY") )
console.log( numPY2("Pyy") )