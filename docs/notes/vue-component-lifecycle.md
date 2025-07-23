---
title: Vue 컴포넌트 생명주기
description: Vue 3 컴포넌트의 생명주기 훅 정리
---

# Vue 컴포넌트 생명주기 (Lifecycle Hooks)

Vue 컴포넌트에는 생성부터 소멸까지 특정 시점에 호출되는 함수들이 있습니다. 이를 생명주기 훅이라고 부릅니다.

## 1. 생성 단계 (Creation)

* `beforeCreate()`
    * 컴포넌트 인스턴스가 생성되고 초기화되기 전.
    * 데이터나 이벤트가 아직 설정되지 않은 상태.
* `created()`
    * 컴포넌트 인스턴스가 생성된 후.
    * 데이터 (data)와 이벤트 (events)는 초기화되었지만, 템플릿은 아직 마운트되지 않은 상태.
    * API 호출 등을 하기에 적합한 시점.

## 2. 마운트 단계 (Mounting)

* `beforeMount()`
    * 템플릿이 DOM에 마운트되기 직전.
    * `render` 함수가 호출되기 전.
* `mounted()`
    * 컴포넌트가 DOM에 마운트된 후.
    * `this.$el`을 통해 DOM에 접근할 수 있습니다.
    * 외부 라이브러리 연동, 차트 그리기 등에 적합.

... (나머지 생명주기 훅 설명)

## 참고 자료
* [Vue.js 공식 문서 - 생명주기 훅](https://vuejs.org/guide/essentials/lifecycle.html)