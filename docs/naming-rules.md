# Правила нейминга:

Для справки:
- camelCase
- kebab-case
- PascalCase
- snake_case
- SCREAMING_SNAKE_CASE
- Train-Case


### Названия папок:
>Способ: kebab-case
>
>Пример: homework-filters

### Названия файлов react компонентов:
>Способ: PascalCase
>
>Пример: HomeworkFilters.tsx
>
### Названия файла стилей react компонентов:
>Способ: PascalCase, название повторяет название компонента
>
>Пример: HomeworkFilters.module.scss

### Названия картинок и иконок в public:
>Способ: kebab-case
>
>Пример: chevron-sidebar.svg

### Названия файлов не react компонентов:
>Способ: kebab-case
>
>Пример: helpers.ts

### Названия констант за пределами react компонентов:
>Способ: SCREAMING_SNAKE_CASE
>
>Пример: URLS_WITHOUT_TOKEN

### Названия констант внутри react компонентов:
>Способ: camelCase
>
>Пример: const teacherName

### Константы, декларируемые при билде (vite define):
>Способ: SCREAMING_SNAKE_CASE обрамленный "__"
>
>Пример: \_\_ORIGIN_ID\_\_

### Названия интерфейсов:
>Способ: PascalCase, начинается с I
>
>Пример: ILesson

### Названия типов:
>Способ: PascalCase, начинается с T
>
>Пример: TLesson

### Названия enums:
>Способ: PascalCase, в конце добавляется enum
>
>Пример: PathEnum

### Названия модульных css(scss) классов:
>Способ: snake_case
>
>Пример: terminal_header
