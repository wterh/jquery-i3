# jQuery i3-UI
**License [GPLv3](https://choosealicense.com/licenses/gpl-3.0/)**
> **Disclaimer!**
> 
> Автор проекта ([WTERH](https://github.com/wterh)), заранее сообщаю, что большая часть кода была сгенерирована с помощью нейронной сети - [Mistral](https://mistral.ai).
> 
> Автор оставляет за собой право вносить изменения так же прибегая к помощи других неронных сетей.
> 
> Проект не претендует на какие-либо привелегии, признание, участие сообщества jQuery разработчиков в развитии проекта.
> 
> Автор реализовал требуемую логику исключительно для собственных нужд и прототипирования интерфейсов "на коленке".
> 
> Используемый механизм реактивности может быть не полным\не полноценным, а конечная реализация проседать по перфомансам и прочим бенчмаркам, в т.ч.
> в случае, если Вы захотите использовать проект в собственных прототипах или коленочных решениях.
## Navigation
- [Badge](#badge)
- [Breadcrumbs](#breadcrumbs)
- [Chips](#chips)
- [Contact List](#contact-list)
- [Content Block](#content-block)
- [Data Tables](#data-tables)
- [Dialog](#dialog)
- [FAB (Floating Action Button)](#fab-floating-action-button)
- [Form Inputs](#form-inputs)
- [List](#list)
- [List Button](#list-button)
- [Menu List](#menu-list)
- [Messages](#messages)
- [Navbar](#navbar)
- [Notification](#notification)
- [Side Panel](#side-panel)
- [Popover](#popover)
- [Popup](#popup)
- [Preloader](#preloader)
- [Progressbar](#progressbar)
- [Radio](#radio)
- [Range Slider](#range-slider)
- [Reactive](#reactive)
- [Searchbar](#searchbar)
- [Segmented Control](#segmented-control)
- [Sheet Modal](#sheet-modal)
- [Stepper](#stepper)
- [Subnavbar](#subnavbar)
- [Tabber](#tabber)
- [Toast](#toast)
- [Toggle](#toggle)
- [Toolbar](#toolbar)
## Badge
Бейдж - предназначен для добавления меток на кнопки\ссылки.
Например, чтобы показать наличие новых уведомлений, на соответствующей кнопке
### Params
- content - содержимое бейджа
- type - цветовой тип бейджа
### Example
```javascript
$(function () {
    const badge = $('#badge').i3Badge({
        content: 'New',
        type: 'primary',
    })
})
```
## Breadrcrumbs
Хлебные крошки - используется для генерации хлебных крошек, отображающих
глубину просмотра, с возможностью быстро подняться выше
### Params
- items - массив крошек
- text - лейбл крошки
- href - ссылка крошки
- active - активный элемент
### Example
```javascript
$(function () {
    const breadrcrumbs = $('#breadcrumbs').i3Breadcrumbs({
        items: [
            { text: 'Home', url: '/' },
            { text: 'Category', url: '/category' },
            { text: 'Subcategory', url: '/subcategory', active: true },
        ],
    })
})
```
## Chips
Кусочки - дополнительные метки\теги для блоков, кнопок, список и т.д.
### Params
- chips - массив кусочков
- content - текст кусочка
- deletable - дать ли возможность удалить
- type - тип кусочка
- color - цвет кусочка
- onDelete - событие удаления
### Example
```javascript
$(function () {
    const chips = $('#chips').i3Chips({
        chips: [
            { content: 'Chip 1', deletable: true },
            { content: 'Chip 2', type: 'contact', deletable: true },
            { content: 'Chip 3', color: '#ffcc00', deletable: true },
        ],
        onDelete: function () {
            console.log('Chip deleted')
        },
    })
})
```
## Contact List
Список контактов - список, содержащий упорядоченные по алфавиту контакты
### Params
- contacts - массив контактов
### Example
```javascript
$(function () {
    const contactList = $('#contactList').i3ContactList({
        contacts: [
            { name: 'John Doe', email: 'john@example.com' },
            { name: 'Jane Doe', email: 'jane@example.com' },
            { name: 'Jim Smith', email: 'jim@example.com' },
        ],
    })
})
```
## Content Block
Блок контента - простой блок контента содержащий текст или медиа
### Params
- type - тип блока, на всю ширину родителя, с рамкой, с отступом и рамкой, с заголовком, с подвалом, с заголовком и подвалом
- header - содержимое заголовка
- content - содержимое тела
- footer - содержимое подвала
### Example
```javascript
$(function () {
    const contentBlock = $('#contentBlock').i3ContentBlock({
        type: 'inset-outline', // Change the type as needed
        header: 'Header',
        content: 'Main content goes here.',
        footer: 'Footer',
    })
})
```
## Data Tables
Таблицы - простые таблицы, с возможностью использования dataTables.js
(не включен в поставку, не является зависимостью)
### Params
- columns - массив колонок
- title - заголовое колонки
- data тип колонки
- data - строки таблицы
- name - первое поле
- email - второе поле
- age - третье поле
### Example
```javascript
$(function () {
    const dataTables = $('#dataTable').i3DataTables({
        columns: [
            { title: 'Name', data: 'name' },
            { title: 'Email', data: 'email' },
            { title: 'Age', data: 'age' },
      ],
      data: [
          { name: 'John Doe', email: 'john@example.com', age: 30 },
          { name: 'Jane Doe', email: 'jane@example.com', age: 28 },
          { name: 'Jim Smith', email: 'jim@example.com', age: 35 },
      ],
    })
})
```
## Dialog
Диалоговое окно - аналогичто модальным окнам
### Params
- content - содержимое окна
- buttons - массив кнопок
- text - лейбл кнопки
- type - тип кнопки
- onClick - событие клика кнопки
### Example
```javascript
$(function () {
    const dialogContainer = $('#dialogContainer').i3Dialog({
        content: 'Do you want to continue?',
        buttons: [
            { text: 'Yes', type: 'primary' },
            { text: 'No', type: 'secondary' },
        ],
        onClick: function (index) {
            console.log(`Button ${index} clicked!`)
        },
    })
    $('#openDialog').on('click', function () {
        dialogContainer.dialog('open')
    })
})
```
## FAB (Floating Action Button)
Плавающая кнопка - предназначена для размещения кнопки, например для загрузки файлов или создания постов
### Params
- ariaLabel - описание кнопки для экранного диктора
- icon - иконка
- position - позиция кнопки
- onClick - событие нажатия
### Example
```javascript
$(function () {
    const fab = $('#fabButton').i3Fab({
        ariaLabel: 'Add',
        icon: 'fas fa-plus',
        onClick: function () {
            console.log('FAB button clicked!')
        },
        position: 'bottom-right', // Change the position as needed
    })
})
```
## Form Inputs
Генератор полей - генерирует поля для форм
### Params
- type - тип поля, outline, floating, outline-floating и т.д.
- label - лейбл поля
- inputType - тип поля
- id - идентификатор
- name - имя поля
- placeholder - подсказка
- value - значение
- required - обязательность
- clearButton - показать кнопку очистки
- validation - валидировать поле
- validationMessage - сообщение валидации
- additionalInfo - дополнительная информация
### Example
```javascript
$(function () {
    $('#inputField1').i3FormInputs({
        type: 'outline',
        label: 'Outline Input',
        name: 'outlineInput',
        placeholder: 'Enter outline input',
    })
    $('#inputField2').formInputs({
        type: 'floating',
        label: 'Floating Input',
        name: 'floatingInput',
        placeholder: 'Enter floating input',
    })
    $('#inputField3').formInputs({
        type: 'outline-floating',
        label: 'Outline Floating Input',
        name: 'outlineFloatingInput',
        placeholder: 'Enter outline floating input',
        clearButton: true,
        validation: true,
        validationMessage: 'Custom validation message',
        additionalInfo: 'Additional information for this input field',
    })
})
```
## List
Список - простой список ссылок
### Params
- items - массив элементов
- text - текст элемента
- href - ссылка элемента
### Example
```javascript
$(function () {
    const list = $('#myList').i3List({
        items: [
            {text: 'Item 1', href: '#'},
            {text: 'Item 2', href: '#'},
            {text: 'Item 3', href: '#'},
        ],
    })
})
```
## List Button
Список кнопок - простой список кнопок
### Params
- toggleText - подпись для раскрываемого меню
- items - массив элементов списка кнопок
- text - лейбл кнокпи
- href - ссылка кнопки
### Example
```javascript
$(function () {
    const listButton = $('#myListButton').i3ListButton({
        toggleText: 'Open Menu',
        items: [
            {text: 'Item 1', href: '#'},
            {text: 'Item 2', href: '#'},
            {text: 'Item 3', href: '#'},
        ],
    })
})
```
## Menu List
Список элементов меню - простое меню с возможностью добавить иконки и подпись
### Params
- items - массив элементов меню
- icon - иконка элемента
- label - лейбл элемента
- link - ссылка элемента
- subtitle - подзаголовок элемента
- onClick - событие клика
### Example
```javascript
$(function () {
    const menu = $('#menu').i3MenuList({
        items: [
            {
                icon: 'fa fa-home',
                label: 'Home',
                link: '/home',
            },
            {
                icon: 'fa fa-cog',
                label: 'Settings',
                subtitle: 'Manage your account',
                onClick: function (index) {
                    console.log(`Settings clicked: ${index}`)
                },
            },
            {
                icon: 'fa fa-user',
                label: 'Profile',
                subtitle: 'View and edit your profile',
            },
        ],
    })
})
```
## Messages
Мессенджер - компонент отображения чата или сообщений по шаблону
### Params
- onSend - событие отображения сообщений
### Example
```javascript
$(function () {
    const messages = $('#messages').i3Messages({
        onSend: function (message) {
            // Simulate a response from another person after 1 second.
            setTimeout(() => {
                messages.addMessage('Other person: ' + message, 'other')
            }, 1000)
        },
    })
})
```
## Navbar
Панель навигации - Простая панель навигации
### Params
- size - размер Navbar'а small,medium,large
- sticky - Прилипать ли при прокрутке
### Example
```javascript
$(function () {
    const navbar = $('#navbar').i3Navbar({
        size: 'large',
        sticky: true,
    })
})
```
## Notification
Уведомления - простые уведомления, аналогичные пуш-уведомлениям, на мобильных устройствах
### Params
- message - текст уведомления
- showCloseButton - показывать кнопку закрытия
- onClick - событие клика
- onClose - событе закрытия
### Example
```javascript
$(function () {
    const notification = $('body').i3Notification({
        message: 'This is a notification!',
        showCloseButton: true,
        onClick: function (event) {
            console.log('Notification clicked')
        },
        onClose: function (event) {
            console.log('Notification closed')
        },
    })
    $('#show-notification').on('click', function () {
        notification.show()
    })
})
```
## Side Panel
Боковая панель - простая боковая панель, с возможностью указать сторону появления
### Params
- alignment - положение слева\справа
- onClose - событие закрытия
### Example
```javascript
$(function () {
    const sidePanel = $('#side-panel').i3SidePanel({
        alignment: 'right',
        onClose: function () {
            console.log('Side panel closed')
        },
    })
    $('#open-side-panel').on('click', function () {
        sidePanel.open()
    })
})
```
## Popover
Подсказка - всплывающая подсказка на элементах в тексте
### Params
- content - список содержимого
- placement - положение
- onClick - событие клика
### Example
```javascript
$(function () {
    const popover = $('#popover-trigger').i3Popover({
        content: ['Item 1', 'Item 2', 'Item 3'],
        placement: 'bottom',
        onClick: function (index) {
            console.log(`List item clicked: ${index}`)
        },
    })
})
```
## Popup
Попап - простое попап окно
### Params
- content - Содержимое попапа
- onClose - событие обратного вызова
### Example
```javascript
$(function () {
    const popup = $('#open-popup').i3Popup({
        content: '<p>This is a popup!</p>',
        onClose: function () {
            console.log('Popup closed')
        },
    })
    $('#open-popup').on('click', function () {
        popup.open()
    })
})
```
## Preloader
Прелоадер - простой прелоадер с таймером
### Params
- timeout - таймер скрытия
- onHide - событие обратного вызова
### Example
```javascript
$(function () {
    const preloader = $('body').i3Preloader({
        timeout: 1000,
        onHide: function () {
            console.log('Preloader hidden')
        },
    })
})
```
## Progressbar
Панель прогресса - простая панель, для отображения прогресса
### Params
### Example
```javascript
$(function () {
    const progressbar = $('#progress').i3Progressbar({
        onUpdate: function (value) {
            console.log(`Progress updated: ${value}%`)
        },
    })
    $('#increase').on('click', function () {
        const currentValue = progressbar.options.value
        progressbar.setValue(currentValue + 10)
    })
})
```
## Radio
Радио - простой список связанных элементов
### Params
- name - Имя списка radio элементов
- layout - Тип inline\list
- value - отмеченный элемент по значени.
- items - элементы списка
- onChange - событие обратного вызова
### Example
```javascript
$(function () {
    const radio = $('#radio-container').i3Radio({
        name: 'my-radio',
        layout: 'inline',
        value: 'option-2',
        items: [
            { label: 'Option 1', value: 'option-1' },
            { label: 'Option 2', value: 'option-2' },
            { label: 'Option 3', value: 'option-3' },
        ],
        onChange: function (value) {
            console.log(`Radio value changed: ${value}`)
        },
    })
})
```
## Range Slider
Слайдер диапазона - простой слайдер диапазона велечин
### Params
- min - минимальное значение
- max - максимальное значение
- value - текущее значение
- onChange - собитие изменения
### Example
```javascript
$(function () {
    const rangeSlider = $('#range-slider').i3RangeSlider({
        min: 0,
        max: 100,
        value: 50,
        onChange: function (value) {
            $('#value').text(`Value: ${value}`)
        },
    })
})
```
## Reactive
Реактивность - простая реализация реактивности
### Params
- data - объект данных, за которыми необходимо следить
- template - анонимная функция-шаблон
- callback - событие обратного вызова при изменении элемента
### Example
```javascript
$(function () {
    // Define the data
    let data = {
        message: 'Hello, world!'
    };
    // Define the template function
    let template = function(data) {
        return '<p>' + data.message + '</p>';
    };
    // Use the plugin to bind the data and the template to an element
    $('#myElement').i3Reactivity(data, template, function(newData) {
        console.log('The data has changed:', newData);
    });
    // Change the data
    data.message = 'Hello, jQuery!';
});
```
## Searchbar
Панель поиска - простая поисковая строка
### Params
- placeholder - Подсказка поисковой строки
- onSearch - обработчик поиска
- results - массив элементов, по которым будет производиться поиск
### Example
```javascript
$(function () {
    const searchbar = $('#searchbar').i3Searchbar({
        placeholder: 'Search for items...',
        onSearch: function (query) {
            // Perform search with the query and update the results.
            const results = ['Item 1', 'Item 2', 'Item 3'] // Replace this with actual search results.
            $('#results').empty()
            if (query) {
                results.forEach((result) => {
                    $('#results').append(`<li>${result}</li>`)
                })
            }
        },
    })
})
```
## Segmented Control
Панель сегментов - простая панель сегментов, может служить табами или переходами панелей
### Params
- items - элементы
### Example
```javascript
$(function () {
    const segmentedControl = $('#segmented-control').i3SegmentedControl({
        items: ['Option 1', 'Option 2', 'Option 3'],
        selectedIndex: 1,
        onChange: function (index) {
            console.log(`Selected index: ${index}`)
        },
    })
})
```
## Sheet Modal
Модальный лист - простое модальное окно, открываемое снизу
### Params
- content - содержимое модального окна
- onClose - событие закрытия модального окна
### Example
```javascript
$(function () {
    const sheetModal = $('#open-sheet-modal').i3SheetModal({
        content: '<p>This is a sheet modal!</p>',
        onClose: function () {
            console.log('Sheet modal closed')
        },
    })
    $('#open-sheet-modal').on('click', function () {
        sheetModal.open()
    })
})
```
## Stepper
Поле шага - простое поле счетчик, например для кол-ва товаров в корзине
### Params
- min - минимальное значение
- max - максимальное значение
- value - текущее значение
- step - шаг значения
- onChange - обработчик изменения
### Example
```javascript
$(function () {
    const stepper = $('#stepper').i3Stepper({
        min: 0,
        max: 10,
        value: 5,
        step: 2,
        onChange: function (value) {
            console.log(`Stepper value changed: ${value}`)
        },
    })
})
```
## Subnavbar
Панель поднавигации - простая дополнительная панель навигации
### Params
- items - список элементов
- selectedIndex - индекст активного элемента
- onChange - событие изменения
### Example
```javascript
$(function () {
    const subnavbar = $('#subnavbar').i3Subnavbar({
        items: ['Option 1', 'Option 2', 'Option 3'],
        selectedIndex: 1,
        onChange: function (index) {
            console.log(`Selected index: ${index}`)
        },
  })
})
```
## Tabber
Панель табов - простая панель табов
### Params
- items - массив элементов
- icon - класс иконки
- text - лейбл кнопки
- content - содержимое таба
- selectedIndex - активный элемент
- showText - показывать ли лебл
- showIcons - показывать ли иконки
- onChange - событие переключения табов
### Example
```javascript
$(function () {
    const tabber = $('#tabber').i3Tabber({
        items: [
            { icon: 'fa fa-home', text: 'Tab 1', content: '<p>Content for Tab 1.</p>' },
            { icon: 'fa fa-cog', text: 'Tab 2', content: '<p>Content for Tab 2.</p>' },
            { icon: 'fa fa-user', text: 'Tab 3', content: '<p>Content for Tab 3.</p>' },
        ],
        selectedIndex: 1,
        showText: true,
        showIcons: true,
        onChange: function (index) {
            console.log(`Selected index: ${index}`)
        },
    })
})
```
## Toast
Тост - простые уведомления, в нижней части экрана
### Params
- message - текст сообщения
- type - тип сообщения
- alignment - положение слева\справа\поцентру
- timeout - время отображения
- onHide - событие скрытия
### Example
```javascript
$(function () {
    $('#show-toast').on('click', function () {
        const toast = $('body').i3Toast({
            message: 'This is a toast message!',
            type: 'success',
            alignment: 'right',
            timeout: 2000,
            onHide: function () {
                console.log('Toast hidden')
            },
        })
    })
})
```
## Toggle
Переключатель - простой переключатель вкл\выкл
### Params
### Example
```javascript
$(function () {
    const toggle = $('#toggle').i3Toggle({
        state: true,
        onChange: function (state) {
            console.log(`Toggle state changed: ${state}`)
        },
    })
})
```
## Toolbar
Панель инструментов - простая дополнительная панель
### Params
- alignment - положение сверху\снизу
- buttons - кноки внутри
- text - лейбл кнопки
- icon - иконка кнопки
- onClick - событие клика
### Example
```javascript
$(function () {
    const toolbar = $('#toolbar').toolbar({
        alignment: 'bottom',
        buttons: [
            { text: 'Button 1', icon: 'fa fa-home' },
            { text: 'Button 2', icon: 'fa fa-cog' },
            { text: 'Button 3', icon: 'fa fa-user' },
        ],
        onClick: function (index) {
            console.log(`Button clicked: ${index}`)
        },
    })
})
```
