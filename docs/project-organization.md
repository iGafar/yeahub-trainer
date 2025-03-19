# Организация и структура папок

Папки в каталогах pages, widgets, features, entities должны иметь следующую структуру:

```
> lib
  - helpers.ts
  - hooks.ts
  - validations.ts
  > tests
    - helpers.test.js
    
> model
  - config.ts
  - constants.ts
  - types.ts
  > store
    - selectors.ts
    - slices.ts
    - reducer.ts
  
- ui
  > components
    > submit-button
      - SubmitButton.tsx
      - SubmitButton.module.scss
  - HomeworkFilter.tsx
  - HomeworkFilter.module.scss
  
index.ts
```
