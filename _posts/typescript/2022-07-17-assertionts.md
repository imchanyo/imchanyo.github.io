---
layout: single
title: "assertion.ts"
categories: "Typescript"
tag: [assertion.ts]
toc: true
toc_sticky: true
toc_label: "๋ชฉ์ฐจ"
author_profile: false
sidebar:
  nav: "docs"
date: 2022-07-16
last_modified_at: 2022-07-16
---

###

### assertion

```jsx
{
  /**
   * Type Assertions ๐ฉ
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);


```

Assertions์ ๊ถ์ฅํ์ง์๋๋ค. ๋ด๊ฐ ์ฝ๋ฉ์ ํ๋๋ฐ Assertions๋ฅผ ๋ง์ด ์ด์ฉํ๋ค๋ฉด ํผํ๋๋ฐฉ๋ฒ์ ์๊ฐํด๋ด์ผํ๋ค.
ํ์์คํฌ๋ฆฝ๋ result์ any ํ์์ด๊ธฐ๋๋ฌธ์ ๋ฌธ์์ดํ์์์ ์ฌ์ฉํ ์์๋ length๋ฅผ ์ฌ์ฉํ  ์์๋ค. ํ์ง๋ง result์ ํ์คํ๊ฒ ๋ฌธ์์ดํ์์ด๋ผ๊ณ  ์๊ฐ์ด๋ ๋ค๋ฉด ๊ทธ๋ result as string์ ์บ์คํํ์ฌ ๋ฌธ์์ด์ ๋ฉ์๋๋ฅผ ์ฌ์ฉ ํ  ์ ์๋ค.
ํ์ง๋ง ๋ฌธ์์ด์ด์๋๋ผ ์ซ์๋ฅผ ๋ฐํํ ๊ฒฝ์ฐ์๋ ํ์์คํฌ๋ฆฝํธ์์๋ ์๋ฌ๊ฐ ๋ฐ์ํ์ง์๋๋ค. ๊ฒฐ๊ณผ๋ undefined๊ฐ ๋์ ๋คํํ ์ดํ๋ฆฌ์ผ์ด์์ด ์ฃฝ์ง์๋๋ค.
Assertions์ ์ ๋ง ํ์์ ์ฅ๋ดํ ๋ ์ฌ์ฉํ๋ค. as๊ฐ์๋๋ผ ๋ณ์์์์ < string >์ฒ๋ผ ๊ธฐํธ๋ฅผ ์ฌ์ฉํด๋ ๋์ผํ๊ฒ ์๋ํ๋ค.

```jsx
const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐ฑ

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!;
  numbers.push(2); // ๐ฑ
}
```

wrong์ ์ซ์๋ฅผ ๊ฐ์ง๊ณ ์๋ ๋ฐฐ์ด์ด๋ผ๊ณ  ํ์ ํ๋ค๊ณ  ๊ฐ์ ํ์.
๊ทธ๋ผ ๋ฐฐ์ด์ด๊ธฐ๋๋ฌธ์ push๋ฅผ ์ฌ์ฉํ์ง๋ง wrong์ ์ซ์ํ์์ด๊ธฐ๋๋ฌธ์ TypeError๊ฐ ๋ฌ๋ค. ์ด์ฒ๋ผ ๋ด๊ฐ ์ฝ๋ฉ์ํ ๋ ์ค์๊ฐ์ผ๋ก ์ฃฝ์์์๊ธฐ๋๋ฌธ์ ๊ถ์ฅํ์ง์๋๋ค.
findNumbersํจ์์์ number๊ฑฐ์๋๋ผ undefined์ผ์๋ ์์ผ๋ push๋ฅผ ์ฌ์ฉํ๊ฒ ๋๋ฉด error๊ฐ๋์จ๋ค. ๊ทธ๋ด๋ numbers!.push()๋ฅผ ์ฌ์ฉํ๋๋ฐ !๋ ๊ฐ์ ์ ๋งํ์ ํ ๋ ์ฌ์ฉํ  ์ ์๋ค, ๋ฌด์กฐ๊ฑด null์ด์๋์ ์๋ฏธํ๋ค.

```jsx
const button = document.querySelector('class')!;

if(button) {
button.nodeValue
}
```

์ปฌ๋ฆฌ์๋ญํฐ๋ ์์๊ฐ ์กด์ฌํ์ง์๋๋ค๋ฉด null๋ก ์ถ๋ ฅ๋๋ค.
button์ nodeValue์ ์ ๊ทผํ๋ฉด ๋ฒํผ์ null์ผ์๋ ์๋ค๊ณ  ๋ฌ๋ค.
๋ง์ฝ button์ด ์๋ค๋ฉด button.nodeValue์ ์ ๊ทผํ์๊ณ  ๊ฐ์ ํ ์์์ง๋ง
button์ด ๋ฌด์กฐ๊ฑด ์๋ค๊ณ  ํ์ ํ  ์์๋ค๋ฉด !๋ฅผ ์ฌ์ฉํ  ์ ์๋ค.
