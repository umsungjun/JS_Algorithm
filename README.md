# Algorithm & CS 지식을 쌓자

## 진행 기간: 2023년 6월 1일 → Ing <br/>

## 무슨 일이 있어도 하루 한문제는 풀고 CS지식을 정리하자! <br/>

## 비트

- 정보를 저장하고 연산을 수행하기 위해 컴퓨터는 비트(bit)라는 측정 단위를 씀
- 비트는 이진 숫자라는 뜻을 가진 'binary digit'의 줄임말임
- 0과 1, 두 가지 값만 가질 수 있는 측정 단위
  <br/>

## 비트열

- 여러 숫자 조합을 컴퓨터에 나타내기 위해 비트열을 사용함
- 바이트(byte)는 여덟 개의 비트가 모여 만들어진 것

<img src="https://cphinf.pstatic.net/mooc/20170712_75/1499826291828lfvjK_PNG/1.1_-03.png?type=w760">

## 브라운저 렌더링 원리

웹 브라우저에서 웹 페이지를 로드할 때, 브라우저는 서버로부터 HTML 파일과 CSS 파일을 다운로드합니다. HTML 파일은 브라우저에서 파싱되어 Document Object Model (DOM)으로 변환됩니다. DOM은 웹 페이지의 구조를 표현하는 트리 구조입니다.

CSS 파일은 브라우저에서 파싱되어 CSS Object Model (CSSOM)으로 변환됩니다. CSSOM은 CSS 규칙과 스타일 정보를 나타내는 객체 모델입니다. 이 모델은 웹 페이지의 요소에 적용되는 스타일을 계산하고 적용하는 데 사용됩니다.

HTML과 CSS 파일이 파싱되고 DOM과 CSSOM으로 변환되면, 브라우저는 DOM과 CSSOM을 결합하여 렌더 트리(Render Tree)를 생성합니다. 렌더 트리는 화면에 실제로 표시되는 요소들을 포함한 최종 레이아웃을 나타냅니다.

렌더 트리가 생성되면 브라우저는 렌더 트리를 사용하여 요소들의 위치와 스타일을 계산하고 화면에 그려줍니다. 이 과정을 통해 HTML과 CSS를 기반으로 웹 페이지가 시각적으로 표현되는 것입니다.
<br/>

## 'getStaticProps'와 'getServerSideProps'의 차이

- getStaticProps: 이 메서드는 정적 생성(Static Generation)을 사용하는 페이지에 사용됩니다. 정적 생성은 빌드 시점에 페이지를 렌더링하고 미리 생성된 HTML 파일을 제공하는 방식입니다. 이렇게 생성된 페이지는 정적인 상태로 유지되며, 서버에 요청이 발생하지 않습니다. getStaticProps를 사용하여 데이터를 가져오면, 빌드 시점에 한 번 호출되며 데이터가 페이지에 미리 로드됩니다. 그러나 이미지와 같은 동적인 요소의 경우, 빌드 시점에서 로드할 데이터가 없어 문제가 발생할 수 있습니다.

- getServerSideProps: 이 메서드는 서버 측 렌더링(Server-Side Rendering, SSR)을 사용하는 페이지에 사용됩니다. SSR은 클라이언트 요청이 있을 때마다 서버에서 페이지를 렌더링하고 HTML을 동적으로 생성하여 제공하는 방식입니다. getServerSideProps를 사용하여 데이터를 가져오면, 각 요청마다 호출되며 최신 데이터를 사용하여 페이지를 렌더링합니다. 따라서 이미지와 같은 동적인 요소도 정상적으로 로드됩니다.
  <br/>

## 정적 요소(Static Elements) & 동적 요소(Dynamic Elements)

정적 요소(Static Elements):

- 텍스트: 사이트의 로고, 제목, 설명 등과 같은 고정된 텍스트 요소는 정적 요소입니다. 이러한 요소는 변경되지 않고 페이지를 로드할 때 항상 동일하게 표시됩니다.
- 이미지: 사이트 로고, 배경 이미지, 아이콘 등과 같은 이미지 요소도 정적 요소입니다. 한 번 업로드되면 변경되지 않고 고정된 이미지로 사용됩니다.
- CSS 스타일: 사이트의 스타일 시트, 디자인, 레이아웃 등과 같은 CSS는 정적 요소입니다. 이러한 요소는 페이지 로드 시 고정되어 동일한 스타일이 적용됩니다.

동적 요소(Dynamic Elements):

- 사용자 정보: 로그인 상태, 사용자 이름, 프로필 사진 등과 같은 사용자 정보는 동적 요소입니다. 사용자가 로그인한 후에만 표시되며, 로그인 상태에 따라 변경됩니다.
- 실시간 데이터: 주식 시세, 날씨 정보, 뉴스 피드 등과 같은 실시간으로 업데이트되는 데이터는 동적 요소입니다. 이러한 데이터는 서버에서 가져와서 페이지를 동적으로 업데이트합니다.
- 사용자 입력: 검색어 입력, 폼 작성 등과 같은 사용자 입력은 동적 요소입니다. 사용자가 입력한 내용에 따라 페이지가 동적으로 반응하고 업데이트됩니다.
  <br/>

## 브라우저 주소창에 '구글'을 입력했을 때

1. 브라우저는 입력된 주소를 해석하고 해당 도메인으로 요청을 보냄
2. DNS(Domain Name System)서버에 도메인 이름을 확인하도록 요청

- DNS는 도메인 이름을 해당하는 IP주소로 변환해주는 역할을 함

3. DNS서버에서 '구글'에 대한 IP 주소를 찾아 브라우저에 응답 함
4. 브라우저는 응답받은 IP 주소를 사용하여 해당 서버로 요청을 보냄
5. 구글 서버에서는 요청을 받고 웹 페이지의 내용과 데이터로 응답 함
   <br/>

## GET과 POST의 차이 점

- HTTP 프로토콜에서 "GET"과 "POST"는 서버와 클라이언트 간에 데이터를 주고 받을 때 사용되는 주요한 메서드 입니다. "GET"은 데이터를 요청하는데 사용되고 포스트는 데이터를 서버로 제출하는데 사용됩니다. 두 메서드에 가장 큰 차이점은 보안 차이라고 생각합니다. "GET"은 URL에 파라미터를 노출시키고, "POST"는 URL에 데이터를 노출시키지 않습니다.

<img src="https://images.velog.io/images/welchs1423/post/1f61531d-36c3-41b7-9e25-7de77f398130/image.png"/>
이미지 출처 : https://velog.io/@welchs1423/GET-POST-%EB%B0%A9%EC%8B%9D%EC%9D%98-%EC%B0%A8%EC%9D%B4
<br/><br/>

## 객체지향 프로그래밍이란?

- 객체지향 프로그래밍(Object-Oriented Programming, OOP)은 소프트웨어 개발 방법론 중 하나로, 프로그램을 객체(Object)들의 집합으로 모델링하고, 객체들 간의 상호작용을 통해 프로그램을 구현하는 방법입니다. <br/>

- 객체지향 프로그래밍의 주요 특징

1. 캡슐화(Encapsulation): 데이터와 해당 데이터를 처리하는 메서드를 하나의 단위로 묶어 정보를 은닉하고, 외부에서 직접 접근하지 못하도록 보호합니다.

2. 상속(Inheritance): 기존의 클래스를 확장하거나 재사용하여 새로운 클래스를 만들 수 있습니다. 상속을 통해 코드의 재사용성이 증가하며, 계층적인 관계를 구성할 수 있습니다.

3. 다형성(Polymorphism): 같은 이름의 메서드를 다양한 객체에서 다르게 동작하도록 구현할 수 있습니다. 이는 코드의 유연성과 확장성을 제공하며, 코드의 가독성을 높입니다.

4. 추상화(Abstraction): 객체들의 공통적인 특성을 추출하여 모델링하고, 불필요한 세부 사항을 숨기는 과정을 말합니다. 이를 통해 복잡한 시스템을 단순화하고 이해하기 쉬운 모델로 만들 수 있습니다.

<br/>

## 프로세스(Process)와 스레드(Thread)

- 프로세스(Process)와 스레드(Thread)는 컴퓨터에서 실행되는 작업 단위를 의미하는 용어입니다

프로세스:

- 운영체제로부터 자원을 할당받은 독립적인 실행 단위입니다.
- 각각의 프로세스는 독립된 메모리 공간을 가지며, 서로 영향을 주지 않습니다.
- 각 프로세스는 개별적으로 실행되며, 별도의 주소 공간, 파일 핸들, 시스템 자원 등을 보유합니다.
- 프로세스 간에는 통신을 위해 명시적인 메커니즘이 필요합니다(예: 파이프, 소켓 등).

스레드:

- 하나의 프로세스 내에서 실행되는 작은 실행 단위입니다.
- 스레드는 프로세스의 자원을 공유하면서 실행됩니다.
- 같은 프로세스 내의 스레드는 동일한 주소 공간과 파일 핸들 등을 공유합니다.
- 스레드는 병렬적으로 실행될 수 있으며, 여러 스레드 간에는 공유 데이터에 대한 동기화가 필요합니다.

## 클로저

- 함수가 선언될 때 자동으로 생성되는 렉시컬 환경에 대한 설명입니다. 이러한 렉시컬 환경은 스코프 체인(scope chain)을 형성하게 되는데, 스코프 체인은 함수가 선언될 때의 모든 변수와 함수를 포함하는 렉시컬 스코프(lexical scope)를 형성합니다. 외부 함수가 실행 되고 반환된 후에도 외부 함수의 범위 내의 함수에 체이닝을 할 수 있는 함수 입니다. 정보를 은닉하기 위해서 주로 사용 합니다.

## 콜백 지옥

- 비동기 로직 처리 중 무분별하게 연속해서 사용할 때 발생 함
- 문제점 : 코드의 가독성이 떨어지고 예외처리의 복잡도가 증가 함
- 해결 방법 : 콜백 지옥을 해결하기 위한 방법은 promise 문법이나 async/await 문법을 이용할 수 있는데 저 같은 경우는 promise 문법과 async/await 문법을 둘 다 경험해 본 결과 promise 문법의 장점은 에러 핸들링이 편합니다. 실패했을 시 reject라는 메서드 안에서 실패로 직을 작성할 수 있기 때문입니다. 하지만 promise 문법 또한 코드가 길어지다 보면 이전에 작성했던 콜백 지옥과 다른 점이 없어 보입니다. 이러한 문제 점을 해결하기 위해 나온 것이 async/awit 문법인데 사용해 본 결과 정말 코드가 간결해집니다. 하지만 단점은 에러 핸들링을 따로 하려면 try catch 문안에서 해야 한다는 단점이 있습니다.
