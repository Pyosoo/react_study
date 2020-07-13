# 2020 컴투스 3x3 농구대회
- - -

컴투스 프리미어 리그를 재밌게 본 후 결과를 볼 수 있는 페이지를 만들어 보았습니다.

https://pyosoo.github.io/react_study/



### 개발환경
초기 : Google cloud platform + ubunto + VSC   
마무리 : Windows + VSC + github page

### 파일구조
-src        

    -Components    
        -About3x3.js   
        -Homepage.js    
        -Navibar.js     
        -PlayerRanking.js    
        -Result.js    
        -Team.js     
        -VideoClip.js    
    -CSS
      -About3x3.css   
      -Homepage.css    
      -Navibar.css     
      -PlayerRanking.css    
      -Result.css    
      -Team.css     
      -VideoClip.css    
    -Images   
      ...   
  ...   

### 사용 기술
1. Html, Css, Javascript 사용
2. SPA를 위한 router를 이용한 Navibar
3. JSON파일의 정보를 가져와 state를 통한 데이터 가공을 통한 result page
4. antd의 pagination 을 통한 state변경을 통해 iframe동영상들의 주소를 바꿔보여주는 videocilp page
