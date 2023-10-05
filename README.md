<h1 align='center'> Placeholder Infinite</h1>

![react](https://img.shields.io/badge/React-black?style=for-the-badge&logo=React&logoColor=#61DAFB)
![redux](https://img.shields.io/badge/redux-black?style=for-the-badge&logo=redux&logoColor=#06b6d4)

Deploy [Vercel](https://placeholder-infinite.vercel.app/)


## Запуск проекта 
1) Установить зависимости

```bash
npm install
```
2) Запустить проект в режиме разработки на [http://localhost:3000](http://localhost:3000)
```bash
npm run start
# or
yarn start
```

## Технические требования:
- Используя React, RTK Query, React Router DOM 6, JSON Placeholder и FSD-архитектуру сделайте простое приложение:
1. главная страница - список постов (бесконечный скролл + виртуализация)
2. каждый пост в списке - это строка: номер + заголовок + описание обрезанное "...", если не влезает + кнопка "просмотр"
3. кнопка "просмотр" ведет на отдельный роут, где отображается полная информация о посте в произвольной форме + кнопка "назад"