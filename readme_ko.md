# Flask-Canjs-i18n-Boilerplate

## Flask-Canjs-i18n-Boilerplate

canjs와 python flask를 이용한 다국어 어플리케이션 제작을 위한 토대입니다.
Flask 부분은 [Matt Wright](https://github.com/mattupstate)님의 [글](http://mattupstate.com/python/2013/06/26/how-i-structure-my-flask-applications.html)에서 영감을 얻었습니다.

## 개발시 주의사항

### 저장소
새 기능 개발시.

1. develop 브랜치를 pull 한다.
2. 새 브랜치 생성 : git branch <name_of_new_feature_branch>
3. 개발중에는 새 기능 브랜치에 커밋한다.
4. 기능을 완성했으면 테스트를 만들어 잘 동작하는지 시험한다.
5. 잘 동작하면, 새로운 기능으로 인해 생길수 있는 버그를 다시 한번 잘 살펴보고 develop 브랜치에 통합한다.
6. 새 기능 브랜치를 지운다.

치명적인 버그 hotfix 패치 개발시.

1. test 브랜치를 pull 한다.
2. 새 브랜치 생성 : git branch <name_of_hotfix_branch>
3. 개발중에는 hotfix 브랜치에 커밋한다.
4. 수정을 완료했으면 테스트를 만들어 잘 동작하는지 시험한다.
5. 잘 동작하면, 새로운 수정으로 인해 생길수 있는 버그를 다시 한번 잘 살펴보고 develop 브랜치에 통합한다.
6. test 브랜치에도 hotfix를 통합한다.
7. hotfix 브랜치를 지운다.

### Frontend

#### Logs
* console.log(); 는 사용하지 않는다.
* utils.log(Trace|Debug|Info|Warn|Json|Object|Error)를 사용한다.
* 자바스크립트 로그(utils.log(Trace|Debug|Info|Warn|Json|Object|Error))를 사용할 때 내부에 '()'를 사용하면 안된다.
만약 그렇지 않으면, 배포시 오류가 발생한다.
* 예)utils.logDebug('initEdit', upload_image);
* 틀린예) utils.logDebug('initEdit', something_wrong());


## 특징
* Flask/Canjs 연동.
* 다국어 지원.
* 사용자 CRUD 구현.
* 사용자 following/followers 기능 구현.
* 소셜 네트워크 연결 구현.
    1. 페이스북
    2. 기타 (TODO)
* RESTful API 구현.
* 반응형 웹 디자인.
* 구글 크롤러 친화적 url('#!').
* 간편한 개발 문서 제작.(Sphinx)
* 쉬운 테스팅. (nosetests)
* 다양한 브라우저 호환 (IE7, IE8, IE9, IE10, Firefox, Chrome, Opera..)
* 더 많은 기능을 윈하신다면, 함께 만들어 가요! :D


## 어떻게 동작하나요?

![flask-canjs-i18n-boilerplate](https://f.cloud.github.com/assets/1202809/914493/b584032c-fe3b-11e2-83c0-05b83e8959ba.png)

## 환경

### 클라이언트 사이드
* [Canjs](http://canjs.com/), 클라이언트 사이드 자바스크립트 프레임워크.
* [RequireJS](http://requirejs.org/), 자바스크립트 파일•모듈 로더.
* [RequireJS Optimizer](http://requirejs.org/docs/optimization.html), RequireJS 최적화 도구.
* [Initializr](http://www.initializr.com/),  HTML5 템플릿.
* [Bootstrap](http://twitter.github.io/bootstrap/),  프론트엔드 프레임워크.
* [Bootstrap-ie7](https://github.com/coliff/bootstrap-ie7), 부트스트랩 3에서 IE7을 지원을 도움.
* [mustache](http://mustache.github.io/), 템플릿 엔진.
* [i18next](http://i18next.com/), 자바스크립트 다국어 도구.
* [Font Awesome](http://fortawesome.github.io/Font-Awesome/), 크기 변환등 개별화 가능한 백터 아이콘 모음을 제공.
* [typeahead.js](https://github.com/twitter/typeahead.js), 텍스트 자동 완성 라이브러리.
* [spin.js](http://fgnass.github.io/spin.js/), 작업중 활동 표시기.
* [Placeholders.js](http://jamesallardice.github.io/Placeholders.js/), 자바스크립트를 통해 HTML5의 placeholder 속성을 사용 할 수 있게 함.
* [Jade(pyjade)](https://github.com/SyrusAkbary/pyjade), 파이썬용 Jade 템플릿 엔진 확장.
* [jQuery](http://jquery.com/), 작고 빠르고 유용한 자바스크립트 라이브러리.
* [jQuery BBQ](http://benalman.com/projects/jquery-bbq-plugin/), HTML5 hashchange 이벤트 사용을 도와줌.
* [Grunt](http://gruntjs.com/), 자바스크립트 작업 실행기.
* [Can-Compile](http://daffl.github.io/can-compile/), CanJS 뷰를 하나의 자바스크립트 파일로 컴파일 함.
* [grunt-shell](https://github.com/sindresorhus/grunt-shell), 외부 CLI 도구를 Grunt에서 쓰도록 도와줌.
* [grunt-contrib-watch](https://github.com/gruntjs/grunt-contrib-watch), 파일이 추가되거나, 변경되거나 삭제되면 그것을 감시하여 작업을 실행.
* [grunt-uncss](https://github.com/addyosmani/grunt-uncss), 사용하지 않는 CSS를 제거해줌.
* [time-grunt](https://github.com/sindresorhus/time-grunt), Grunt 작업의 소요시간을 보여줌.

### 서버 사이드
* [Flask](http://flask.pocoo.org/), 가벼운 파이썬 프레임워크.
* [Flask-Babel](http://pythonhosted.org/Flask-Babel/), 플라스크용 다국어 확장.
* [Flask-Gravatar](https://pypi.python.org/pypi/Flask-Gravatar), 플라스크용 그라바타 확장.
* [Flask-Security](http://pythonhosted.org/Flask-Security/), 플라스크용 로그인 보안 확장.
* [Flask-Social](http://pythonhosted.org/Flask-Social/), Flask-Security에서 Oauth를 지원하는 확장.
* [Flask-Assets](http://elsdoerfer.name/docs/flask-assets/), 자바스크립트와 스타일시트를 관리하는 플라스크용 확장.
* [Flask-SQLAlchemy](http://pythonhosted.org/Flask-SQLAlchemy/), SQLAlchemy사용을 위한 플라스크용 확장.
* [Flask-WTF](https://flask-wtf.readthedocs.org/en/latest/), WTForms 통합 확장.
* [Flask-Cache](http://pythonhosted.org/Flask-Cache/), 캐쉬 사용을 도와주는 플라스크용 확장.
* [Alembic](http://alembic.readthedocs.org/en/latest/), SQLAlchemy 데이터베이스 마이그레이션 관리 도구.
* [Celery](http://www.celeryproject.org/), 분산 메시지 전달 기반의 비동기 작업 queue/job 큐.

### 디버깅과 테스팅
* [nose](https://nose.readthedocs.org/en/latest/index.html), 멋진 파이썬용 테스팅 도구.
* [BusterJS](http://docs.busterjs.org/en/latest/#), 자바스크립트 테스팅 도구.

### 문서 생성
* [Sphinx](http://sphinx-doc.org/), 지적이고 아름다운 문서를 만들어주는 도구.
* [JSDoc](https://github.com/jsdoc3/jsdoc), 자바스크립트 문서화 도구.


## 설치

### 도구 설치
* [virtualenv](https://python-guide.readthedocs.org/en/latest/dev/virtualenvs/#virtualenv), 분리된 파이썬 환경을 만들어줍니다.
* [virtualenvwrapper](https://python-guide.readthedocs.org/en/latest/dev/virtualenvs/#virtualenvwrapper), virtualenv를 보다 편리하게 사용하도록 돕습니다.

### 프로젝트 복제
    $ git clone https://github.com/dorajistyle/flask-canjs-i18n-boilerplate.git
    $ cd flask-canjs-i18n-boilerplate.git

### 프로젝트를 위한 virtualenv 생성
    $ mkvirtualenv flask-canjs-i18n-boilerplate

### 필요 라이브러리 설치
    $ pip install -r requirements.txt

### 데이터베이스 마이그레이션
    $ alembic revision --autogenerate -m "Alembic initilized boilerplate tables."
    $ alembic upgrade head

### 관리자 추가
'admin@github.com'와 'password'로 로그인 하시면 됩니다.

    $ python manage.py init_user

### 설정

    설정 값을 올바르게 설정해야 합니다.(데이터베이스, 메일, 소셜 네트워크 정보...)

* application/settings.py엔 서버 사이드 설정이 들어 있습니다.
* application/frontend/static/js/settings.js엔 클라이언트 사이드 설정이 들어 있습니다.
* ./alembic.ini엔 alembic설정이 들어있습니다.

### 번역
* 서버 사이드 번역(Babel)은 applications/frontend/translations 폴더에 있습니다.
* 클라이언트 사이드 번역(i18next)은 applications/frontend/static/locales 폴더에 있습니다.

#### 바벨 번역 컴파일
    $ python tr_compile.py


## 사용

### 어플리케이션 실행
    $ python wsgi.py

### 문서 생성
    $ python generate_documents.py

### 정적 폴더 최적화
Nodejs 와 RequireJS가 설치되어 있어야 합니다.
더 자세한 문서를 원하신다면 다음을 클릭하세요. [RequireJS Optimizer](http://requirejs.org/docs/optimization.html).

    $ optimize_static.sh

### 플랫폼 업데이트
    $ python update_platform.py

### 테스트
    $ python run_nosetests.py

### 데이터베이스 새로 갱신 (데이터베이스 drop/create 후 테스트 데이터 넣기)
    $ python refresh_database.py

### Mustache 템플릿 변경사항 적용
nodeJS npm 과 grunt를 먼저 설치한다.

    $ npm install -g grunt-cli

그리고 ./application/frontend/views 디렉토리에 필요한 npm 모듈을 설치한다.

    $ npm install can-compile --save-dev
    $ npm install grunt-shell --save-dev
    $ npm install grunt-contrib-watch --save-dev
    $ npm install time-grunt --save-dev

혹은 아래 스크립트를 실행하여 설치한다.

    $ python install_node_modules.py

마지막으로 아래 명령어를 실행한다.

    $ python refresh_static.py

mustache의 변경사항을 감시하다가 자동으로 변경사항을 적용하려면 아래 명령어를 실행한다.

    $ python watch_static.py

________________________

## 사용권

Flask-canjs-i18n-boilerplate는 [MIT license](http://opensource.org/licenses/MIT)를 따릅니다.
