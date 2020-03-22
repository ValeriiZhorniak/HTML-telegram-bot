var TelegramBot = require('node-telegram-bot-api');
var TOKEN = '';
var botOptions = {polling:true};
var bot = new TelegramBot(TOKEN, botOptions);
bot.on('text', function (msg){
    var messageChatId = msg.chat.id;
    var messageText = msg.text;
    if (messageText === 'a'){
        bot.sendMessage(messageChatId, `Создаёт гипертекстовые ссылки.
Синтаксис: <a href="URL">...</a>.
Атрибуты: accesskey, coords, download, href, hreflang, name, rel, rev, shape, tabindex, target, title, type.
Также для этого тега доступны универсальные атрибуты и события.    `)
    } else if (messageText === 'abbr'){
            bot.sendMessage(messageChatId, `Определяет текст как аббревиатуру или акроним. 
Поясняющий текст задаётся с помощью атрибута title.
Синтаксис: <abbr>Текст</abbr>.
Атрибуты: title.
Также для этого тега доступны глобальные атрибуты и события.`)
        } else if (messageText === 'address'){
            bot.sendMessage(messageChatId, `Задает контактные данные автора/владельца документа или статьи. 
Отображается в браузере курсивом.
Синтаксис: <address>Текст</address>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'area'){
            bot.sendMessage(messageChatId, `Представляет собой гиперссылку с текстом, соответствующей определенной области на карте-изображении или активную область внутри карты-изображения. 
Всегда вложен внутрь тега <map>. 
Синтаксис: <map> <area href="URL"> </map>
Атрибуты: accesskey, alt, coords, href, hreflang, nohref, shape, tabindex, target, type.
Также для этого тега доступны универсальные атрибуты и события.         `)
        } else if (messageText === 'article'){
            bot.sendMessage(messageChatId, `Раздел контента, который образует независимую часть документа или сайта, например, статья в журнале, запись в блоге, комментарий.   
Синтаксис: <article>Тест</article>
Атрибуты: Нет.`)
        } else if (messageText === 'aside'){
            bot.sendMessage(messageChatId, `Представляет контент страницы, который имеет косвенное отношение к основному контенту страницы/сайта.
Синтаксис: <aside>Текст</aside>.
Для этого тега доступны универсальные атрибуты.`)
        } else if (messageText === 'audio'){
            bot.sendMessage(messageChatId, `Загружает звуковой контент на веб-страницу.
Синтаксис: <audio src="URL"></audio>.
Атрибуты: autoplay, controls, loop, preload, src.`)
        } else if (messageText === 'b'){
            bot.sendMessage(messageChatId, `Задает полужирное начертание отрывка текста, не придавая акцент или важность выделенному.
Синтаксис: <b>Текст</b>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'base'){
            bot.sendMessage(messageChatId, `Задает базовый адрес (URL), относительно которого вычисляются все относительные адреса. 
Это поможет избежать проблем при переносе страницы в другое место, так как все ссылки будут работать, как и прежде.
Синтаксис: <head> <base ...> </head>.
Атрибуты: href, terget.`)
        } else if (messageText === 'bdi'){
            bot.sendMessage(messageChatId, `Изолирует отрывок текста, написанный на языке, в котором чтение текста происходит справа налево, от остального текста.
Синтаксис: <bdi>Текст</bdi>.
Для этого тега доступны универсальные атрибуты и события.
Атрибут dir по умолчанию имеет значение auto.`)
        } else if (messageText === 'bdo'){
            bot.sendMessage(messageChatId, `Отображает текст в направлении, указанном в атрибуте dir, переопределяя текущее направление написания текста.
Синтаксис: <bdo>Текст</bdo>.
Атрбуты: dir.`)
        } else if (messageText === 'blockquote'){
            bot.sendMessage(messageChatId, `Выделяет текст как цитату, применяется для описания больших цитат.
Синтаксис: <blockquote>Текст</blockquote>.
Атрибуты: cite.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'body'){
            bot.sendMessage(messageChatId, `Представляет тело документа (содержимое, не относящееся к метаданным документа).
Синтаксис: <body>...</body>.
Атрибуты: alink, background, bgcolor, bdproperties, bottommargin, leftmargin, link, rightmargin, scroll, text, topmargin, vlink.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'br'){
            bot.sendMessage(messageChatId, `Перенос текста на новую строку.
Синтаксис: Текст<br> текст.
Атрибуты: clear.`)
        } else if (messageText === 'button'){
            bot.sendMessage(messageChatId, `Создает интерактивную кнопку. 
Внутрь тега можно поместить содержимое - текст или изображение.
Синтаксис: <form> <button>...</button> </form>
Атрибуты: accesskey, autofocus, disabled, form, formaction, formmethod, formnovalidate, formtarget, name, type, value.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'canvas'){
            bot.sendMessage(messageChatId, `Холст-контейнер для динамического отображения изображений, таких как простые изображения, диаграммы, графики и т.п. 
Для рисования используется скриптовый язык JavaScript.
Cинтаксис: <canvas id="идентификатор"></canvas>.
Атрибуты: height, width.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'caption'){
            bot.sendMessage(messageChatId, `Добавляет подпись к таблице. 
Вставляется сразу после тега <table>.
Синтаксис: <table> <caption>Текст</caption> </table>.
Атрибуты: align, valign.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'cite'){
            bot.sendMessage(messageChatId, `Используется для указания источника цитирования. 
Отображается курсивом.
Синтаксис: <cite>Текст</cite>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'code'){
            bot.sendMessage(messageChatId, `Представляет фрагмент программного кода, отображается шрифтом семейства monospace.
Синтаксис: <code>Текст</code>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'col'){
            bot.sendMessage(messageChatId, `Выбирает для форматирования один или несколько столбцов таблицы, не содержащих информацию одного типа.
Синтаксис: <table><col атрибуты></table>.
Атрибуты: align, char, charoff, span, valign, width.`)
        } else if (messageText === 'colgroup'){
            bot.sendMessage(messageChatId, `Создает структурную группу столбцов, выделяющую множество логически однородных ячеек.
Синтаксис: <table><colgroup атрибуты></table>.
Атрибуты: align, char, charoff, span, valign, width`)
        } else if (messageText === 'datalist'){
            bot.sendMessage(messageChatId, `Элемент-контейнер для выпадающего списка элемента <input>. 
Варианты значений помещаются в элементы <option>.
Синтаксис: <input list="<идентификатор>"><datalist id="<идентификатор>"><option value="Текст"></datalist>.
Список, создаваемый тегом <datalist>, связывается с текстовым полем посредством атрибута id. 
Его значение должно совпадать со значением атрибута list тега <input>. `)
        } else if (messageText === 'dd'){
            bot.sendMessage(messageChatId, `Используется для описания термина из тега <dt>.
Синтаксис: <dl><dt>Термин</dt><dd>Определение термина</dd></dl>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'del'){
            bot.sendMessage(messageChatId, `Помечает текст как удаленный, перечёркивая его.
Синтаксис: <del>Текст</del>.
Атрибуты: cite, datetime.
Для этого тега также доступны универсальные атрибуты и события.`)
        } else if (messageText === 'details'){
            bot.sendMessage(messageChatId, `Тег <details> используется для хранения информации, которую можно скрыть или показать по требованию пользователя. 
По умолчанию содержимое тега не отображается, для изменения статуса применяется атрибут open.
Синтаксис: <details open="open">Текст</details>.
Атрибуты: open.`)
        } else if (messageText === 'dfn'){
            bot.sendMessage(messageChatId, `Определяет слово как термин, выделяя его курсивом. 
Текст, идущий следом, должен содержать расшифровку этого термина.
Синтаксис: <dfn>Текст</dfn>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'dialog'){
            bot.sendMessage(messageChatId, `Интерактивный элемент, с которым взаимодействует пользователь для выполнения задачи, например, диалоговое окно, инспектор или окно. 
Без атрибута open не виден для пользователя.
Синтаксис: <dialog open>...</dialog>.
Атрибуты: open.
Для этого элемента также доступны универсальные атрибуты и события.`)
        } else if (messageText === 'div'){
            bot.sendMessage(messageChatId, `Тег-контейнер для разделов HTML-документа. 
Используется для группировки блочных элементов с целью форматирования стилями.
Синтаксис: <div>...</div>.
Атрибуты: align, title.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'dl'){
            bot.sendMessage(messageChatId, `Тег-контейнер, внутри которого находятся термин и его описание.
Синтаксис: <dl><dt>Термин</dt><dd>Определение термина</dd></dl>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'dt'){
            bot.sendMessage(messageChatId, `Используется для задания термина.
Синтаксис: <dl><dt>Термин</dt><dd>Определение термина</dd></dl>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'em'){
            bot.sendMessage(messageChatId, `Выделяет важные фрагменты текста, отображая их курсивом.
Синтаксис: <em>Текст</em>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'embed'){
            bot.sendMessage(messageChatId, `Тег-контейнер для встраивания внешнего интерактивного контента или плагина.
Синтаксис: <embed width="..." height="..."></embed>.
Атрибуты: align, height, hidden, hspace, pluginspage, src, type, vspace, width.`)
        } else if (messageText === 'fieldset'){
            bot.sendMessage(messageChatId, `Группирует связанные элементы в форме, рисуя рамку вокруг них.
Синтаксис: <form><fieldset>...</fieldset></form>.
Атрибуты: disabled, form, title.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'figcaption'){
            bot.sendMessage(messageChatId, `Заголовок/подпись для элемента <figure>.
Синтаксис: <figure><figcaption>Описание</figcaption></figure>.`)
        } else if (messageText === 'figure'){
            bot.sendMessage(messageChatId, `Самодостаточный тег-контейнер для такого контента как иллюстрации, диаграммы, фотографии, примеры кода, обычно с подписью.
Синтаксис: <figure>...</figure>.`)
        } else if (messageText === 'footer'){
            bot.sendMessage(messageChatId, `Определяет завершающую область (нижний колонтитул) документа или раздела.
Синтаксис: <footer></footer>.`)
        } else if (messageText === 'form'){
            bot.sendMessage(messageChatId, `Форма для сбора и отправки на сервер информации от пользователей. 
Не работает без атрибута action.
Синтаксис: <form action="URL">...</form>.
Атрибуты: accept-charset, action, autocomplete, enctype, method, name, novalidate, target.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'h1'){
            bot.sendMessage(messageChatId, `Создает заголовок первого уровня.
Синтаксис: <h1>Заголовок первого уровня</h1>.
Атрибуты: align.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'h2'){
            bot.sendMessage(messageChatId, `Создает заголовок второго уровня.
Синтаксис: <h2>Заголовок второго уровня</h2>.
Атрибуты: align.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'h3'){
            bot.sendMessage(messageChatId, `Создает заголовок третьего уровня.
Синтаксис: <h3>Заголовок третьего уровня</h3>.
Атрибуты: align.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'h4'){
            bot.sendMessage(messageChatId, `Создает заголовок четвертого уровня.
Синтаксис: <h4>Заголовок четвертого уровня</h4>.
Атрибуты: align.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'h5'){
            bot.sendMessage(messageChatId, `Создает заголовок пятого уровня.
Синтаксис: <h5>Заголовок пятого уровня</h5>.
Атрибуты: align.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'h6'){
            bot.sendMessage(messageChatId, `Создает заголовок шестого уровня.
Синтаксис: <h6>Заголовок шестого уровня</h6>.
Атрибуты: align.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'head'){
            bot.sendMessage(messageChatId, `Элемент-контейнер для метаданных HTML-документа, таких как<title>, <meta>, <script>, <link>, <style>.
Ситаксис: <head>...</head>.
Атрибуты: profile.
Также для этого тега доступны глобальные атрибуты.`)
        } else if (messageText === 'header'){
            bot.sendMessage(messageChatId, `Секция для вводной информации сайта или группы навигационных ссылок. 
Может содержать один или несколько заголовков, логотип, информацию об авторе.
Синтаксис: <header></header>.`)
        } else if (messageText === 'hr'){
            bot.sendMessage(messageChatId, `Горизонтальная линия для тематического разделения параграфов.
Синтаксис: <hr>.
Атрибуты: align, color, noshade, size, width.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'html'){
            bot.sendMessage(messageChatId, `Корневой элемент HTML-документа. 
Сообщает браузеру, что это HTML-документ. 
Является контейнером для всех остальных html-элементов.
Синтаксис: <html>...</html>.
Атрибуты: title, manifest, xmlns.
Также для этого тега доступны универсальные атрибуты.`)
        } else if (messageText === 'i'){
            bot.sendMessage(messageChatId, `Выделяет отрывок текста курсивом, не придавая ему дополнительный акцент.
Синтаксис: <i>Текст</i>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'iframe'){
            bot.sendMessage(messageChatId, `Создает встроенный фрейм, загружая в текущий HTML-документ другой документ.
Синтаксис: <iframe>...</iframe>.
Атрибуты: align, allowtransparency, frameborder, height, hspace, marginheight, marginwidth, name, sandbox, scrolling, seamless, src, srcdoc, vspace, width.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'img'){
            bot.sendMessage(messageChatId, `Встраивает изображения в HTML-документ с помощью атрибута src, значением которого является адрес встраиваемого изображения.
Синтаксис: <img src="URL" alt="альтернативный текст">.
Атрибуты: align, alt, border, height, hspace, ismap, longdesc, lowsrc, src, vspace, width, usemap.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'input'){
            bot.sendMessage(messageChatId, `Создает многофункциональные поля формы, в которые пользователь может вводить данные.
Сиинтаксис: <input атрибуты>.
Атрибуты: accept, accesskey, align, alt, autocomplete, autofocus, border, checked, disabled, form, formaction, formenctype, formmethod, formnovalidate, formtarget, list, max, maxlength, min, multiple, name, pattern, placeholder, readonly, required, size, src, step, tabindex, type, value.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'ins'){
            bot.sendMessage(messageChatId, `Выделяет текст подчеркиванием. 
Применяется для выделения изменений, вносимых в документ.
Синтаксис: <ins>Текст</ins>.
Атрибуты: cite, datetime.
Для этого тега также доступны универсальные атрибуты и события.`)
        } else if (messageText === 'kbd'){
            bot.sendMessage(messageChatId, `Выделяет текст, который должен быть введён пользователем с клавиатуры, шрифтом семейства monospace.
Синтаксис: <kbd>Текст</kbd>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'label'){
            bot.sendMessage(messageChatId, `Добавляет текстовую метку для элемента <input>.
Синтаксис: <label><input type="..."> Текст</label>.
Атрибуты: accesskey, for.
`)
        } else if (messageText === 'legend'){
            bot.sendMessage(messageChatId, `Заголовок элементов формы, сгруппированных с помощью элемента <fieldset>.
Синтаксис: <fieldset><legend>Текст</legend></fieldset>.
Атрибуты: accesskey, align, title.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'li'){
            bot.sendMessage(messageChatId, `Элемент маркированного или нумерованного списка.
Синтаксис: <ul или ol><li>элемент маркированного списка</li></ul или ol>.
Атрибуты: type, value.
Также для этого тега доступны универсальные атрибуты и события. `)
        } else if (messageText === 'link'){
            bot.sendMessage(messageChatId, `Определяет отношения между документом и внешним ресурсом. 
Также используется для подключения внешних таблиц стилей.
Синтаксис: <head><link атрибуты></head>.
Атрибуты: charset, href, media, rel, sizes, type.
Также для этого тега доступны универсальные атрибуты.`)
        } else if (messageText === 'main'){
            bot.sendMessage(messageChatId, `Контейнер для основного уникального содержимого документа. 
На одной странице должно быть не более одного элемента <main>.
Синтаксис: <main></main>.
Для этого тега доступны только универсальные атрибуты.`)
        } else if (messageText === 'map'){
            bot.sendMessage(messageChatId, `Создаёт активные области на карте-изображении. 
Является контейнером для элементов <area>.
Синтаксис: <map name="имя"><area атрибуты></map>.
Атрибуты: name.`)
        } else if (messageText === 'mark'){
            bot.sendMessage(messageChatId, `Выделяет фрагменты текста, помечая их желтым фоном.
Синтаксис: <mark>текст</mark>.`)
        } else if (messageText === 'meta'){
            bot.sendMessage(messageChatId, `Используется для хранения дополнительной информации о странице. 
Эту информацию используют браузеры для обработки страницы, а поисковые системы — для ее индексации. 
В блоке <head> может быть несколько тегов <meta>, так как в зависимости от используемых атрибутов они несут разную информацию.
Синтаксис: <head><meta content="..."></head>.
Атрибуты: charset, content, http-equiv, name.`)
        } else if (messageText === 'meter'){
            bot.sendMessage(messageChatId, `Индикатор измерения в заданном диапазоне.
Синтаксис: <meter value="значение">текст</meter>.
Атрибуты: value, min, max, low, high, optimum.
`)
        } else if (messageText === 'nav'){
            bot.sendMessage(messageChatId, `Раздел документа, содержащий навигационные ссылки по сайту.
Синтаксис: <nav>ссылки</nav>.`)
        } else if (messageText === 'noscript'){
            bot.sendMessage(messageChatId, `Определяет секцию, не поддерживающую сценарий (скрипт).
Синтаксис: <noscript>Текст</noscript>.`)
        } else if (messageText === 'object'){
            bot.sendMessage(messageChatId, `Контейнер для встраивания мультимедиа (например, аудио, видео, Java-апплеты, ActiveX, PDF и Flash). 
Также можно вставить другую веб-страницу в текущий HTML-документ. 
Для передачи параметров встраиваемого плагина используется тег <param>.
Синтаксис: <object width="ширина" height="высота"></object>
Атрибуты: align, archive, classid, code, codebase, codetype, data, height, hspace, tabindex, type, vspace, width.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'ol'){
            bot.sendMessage(messageChatId, `Упорядоченный нумерованный список. 
Нумерация может быть числовая или алфавитная.
Синтаксис: <ol><li>элемент нумерованного списка</li></ol>.
Атрибуты: type, reversed, start.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'optgroup'){
            bot.sendMessage(messageChatId, `Контейнер с заголовком для группы элементов <option>.
Синтаксис: <optgroup label="..."><option>...</option></optgroup>.
Атрибуты: disabled, label.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'option'){
            bot.sendMessage(messageChatId, `Определяет вариант/опцию для выбора в раскрывающемся списке <select>, <optgroup> или <datalist>.
Синтаксис: <select><option>Пункт</option></select>.
Атрибуты: disabled, label, selected, value.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'output'){
            bot.sendMessage(messageChatId, `Поле для вывода результата вычисления, рассчитанного с помощью скрипта.
Синтаксис: <output></output>.
Атрибуты: for, form, name.`)
        } else if (messageText === 'p'){
            bot.sendMessage(messageChatId, `Параграфы в тексте.
Синтаксис: <p>Текст</p>.
Атрибуты: align.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'param'){
            bot.sendMessage(messageChatId, `Определяет параметры для плагинов, встраиваемых с помощью элемента <object>.
Синтаксис: <param name="имя" value="значение">.
Атрибуты: name, type, value, valuetype.`)
        } else if (messageText === 'picture'){
            bot.sendMessage(messageChatId, `Элемент-контейнер, содержащий один элемент <img> и ноль или несколько элементов <source>. 
Сам по себе ничего не отображает. 
Дает возможность браузеру выбирать наиболее подходящее изображение.
Синтаксис:<picture><source><img></picture>.
Атрибуты: media, type.`)
        } else if (messageText === 'pre'){
            bot.sendMessage(messageChatId, `Выводит текст без форматирования, с сохранением пробелов и переносов текста. 
Может быть использован для отображения компьютерного кода, сообщения электронной почты и т.д.
Синтаксис: <pre>Текст</pre>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'progress'){
            bot.sendMessage(messageChatId, `Индикатор выполнения задачи любого рода.
Синтаксис: <progress value="<число>" max="<число>">Текст</progress>.
Атрибуты: value, max.`)
        } else if (messageText === 'q'){
            bot.sendMessage(messageChatId, `Определяет краткую цитату.
Синтаксис: <q>Текст</q>.
Атрибуты: cite.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'ruby'){
            bot.sendMessage(messageChatId, `Контейнер для Восточно-Азиатских символов и их расшифровки.
Синтаксис: <ruby>текст<rt>аннотация</rt></ruby>.`)
        } else if (messageText === 'rb'){
            bot.sendMessage(messageChatId, `Определяет вложенный в него текст как базовый компонент аннотации.
Синтаксис: <rb>Базовый текст</rb>.
Для элемента доступны универсальные атрибуты и соответствующие атрибуты-события.
Устаревший тег - этот тег полностью исключён.`)
        } else if (messageText === 'rt'){
            bot.sendMessage(messageChatId, `Добавляет краткую характеристику сверху или снизу от символов, заключенных в элементе <ruby>, выводится уменьшенным шрифтом.
Синтаксис: <rt>аннотация</rt>.`)
        } else if (messageText === 'rtc'){
            bot.sendMessage(messageChatId, `Отмечает вложенный в него текст как дополнительную аннотацию.
Синтаксис: <rtc>аннотация</rtc>.
Для этого элемента доступны универсальные атрибуты.`)
        } else if (messageText === 'rp'){
            bot.sendMessage(messageChatId, `Выводит альтернативный текст в случае если браузер не поддерживает элемент <ruby>.
Синтаксис: <rp>текст</rp>.`)
        } else if (messageText === 's'){
            bot.sendMessage(messageChatId, `Отображает текст, не являющийся актуальным, перечеркнутым.
Синтаксис: <s>Текст</s>.
Валидация: Использование этого тега осуждается спецификацией HTML4, валидный код получается только при использовании переходного <!DOCTYPE>.`)
        } else if (messageText === 'samp'){
            bot.sendMessage(messageChatId, `Используется для вывода текста, представляющего результат выполнения программного кода или скрипта, а также системные сообщения. 
Отображается моноширинным шрифтом.
Синтаксис: <samp>Текст</samp>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'script'){
            bot.sendMessage(messageChatId, `Используется для определения сценария на стороне клиента (обычно JavaScript). 
Содержит либо текст скрипта, либо указывает на внешний файл сценария с помощью атрибута src.
Синтаксис: <script type="тип" src="URL"></script>.
Атрибуты: async, defer, language, src, type.`)
        } else if (messageText === 'section'){
            bot.sendMessage(messageChatId, `Определяет логическую область (раздел) страницы, обычно с заголовком.
Сиинтаксис: <section></section>.
Для этого тега доступны глобальные атрибуты и события.`)
        } else if (messageText === 'select'){
            bot.sendMessage(messageChatId, `Элемент управления, позволяющий выбирать значения из предложенного множества. 
Варианты значений помещаются в <option>.
Синтаксис: <select><option>Пункт</option></select>.
Атрибуты: accesskey, autofocus, disabled, form, multiple, name, required, size, tabindex.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'small'){
            bot.sendMessage(messageChatId, `Отображает текст шрифтом меньшего размера.
Синтаксис: <small>Текст</small>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'source'){
            bot.sendMessage(messageChatId, `Указывает местоположение и тип альтернативных медиаресурсов для элементов <picture>, <video>, <audio>.
Синтаксис: <video><source src="URL"></video>.
Атрибуты: media, src, type.`)
        } else if (messageText === 'span'){
            bot.sendMessage(messageChatId, `Контейнер для строчных элементов. 
Можно использовать для форматирования отрывков текста, например, выделения цветом отдельных слов.
Синтаксис: <span>...</span>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'strong'){
            bot.sendMessage(messageChatId, `Расставляет акценты в тексте, выделяя полужирным.
Синтаксис: <strong>Текст</strong>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'style'){
            bot.sendMessage(messageChatId, `Подключает встраиваемые таблицы стилей.
Синтаксис: <head><style type="text/css">...</style></head>.
Атрибуты: media, type.`)
        } else if (messageText === 'sub'){
            bot.sendMessage(messageChatId, `Задает подстрочное написание символов, например, индекса элемента в химических формулах.
Синтаксис: <sub>Текст</sub>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'summary'){
            bot.sendMessage(messageChatId, `Создаёт видимый заголовок для тега <details>. 
Отображается с закрашенным треугольником, кликнув по которому можно просмотреть подробности заголовка.
Синтаксис: <details><summary>Текст</summary></details>.
`)
        } else if (messageText === 'sup'){
            bot.sendMessage(messageChatId, `Задает надстрочное написание символов.
Синтаксис: <sup>Текст</sup>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'table'){
            bot.sendMessage(messageChatId, `Тег для создания таблицы.
Синтаксис: <table><tr><td>...</td></tr></table>.
Атрибуты: align, background, bdcool, border, bordercolor, cellpadding, cellspacing, cols, frame, height, rules, summary, width.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'tbody'){
            bot.sendMessage(messageChatId, `Определяет тело таблицы.
Синтаксис: <table><tbody>...</tbody></table>.
Атрибуты: align, char, charoff, bdcolor, valign.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'td'){
            bot.sendMessage(messageChatId, `Создает ячейку таблицы.
Синтаксис: <td>контент ячейки</td>.
Атрибуты: abbr, align, axis, bgcolor, char, charoff, colspan, headers, height, nowrap, rowspan, score, valign, width.
Тег <td> поддерживает общие атрибуты и атрибуты-события.`)
        } else if (messageText === 'template'){
            bot.sendMessage(messageChatId, `Используется для объявления фрагментов HTML-кода, которые могут быть клонированы и вставлены в документ скриптом. 
Содержимое тега не является его дочерним элементом.
Синтаксис: <template id="productrow"></template>.
Атрибуты: content.
Элемент может иметь общие атрибуты.`)
        } else if (messageText === 'textarea'){
            bot.sendMessage(messageChatId, `Создает большие поля для ввода текста.
Синтаксис: <textarea атрибуты>текст</textarea>.
Атрибуты: accesskey, autofocus, cols, disabled, form, maxlength, name, placeholder, readonly, required, rows, tabindex, wrap.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'tfoot'){
            bot.sendMessage(messageChatId, `Определяет нижний колонтитул таблицы.
Синтаксис: <table><tfoot>...</tfoot></table>.
Атрибуты: align, bgcolor, char, charoff, valign.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'th'){
            bot.sendMessage(messageChatId, `Создает заголовок ячейки таблицы.
Синтаксис: <table><tr><th>...</th></tr></table>.
Атрибуты: abbr, align, axis, background, bgcolor, bordercolor, char, charoff, colspan, headers, height, nowrap, rowspan, score, valign, width.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'thead'){
            bot.sendMessage(messageChatId, `Определяет заголовок таблицы.
Синтаксис: <table><thead>...</thead></table>.
Атрибуты: align, char, charoff, bgcolor, valign.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'time'){
            bot.sendMessage(messageChatId, `Определяет дату/время.
Синтаксис: <time datetime="<дата и время>">текст</time>.
Атрибуты: datetime, pubdate.`)
        } else if (messageText === 'title'){
            bot.sendMessage(messageChatId, `Заголовок HTML-документа, отображаемый в верхней части строки заголовка браузера. 
Также может отображаться в результатах поиска, поэтому это следует принимать во внимание предоставление названия.
Синтаксис: <head><title>Заголовок</title></head>.`)
        } else if (messageText === 'tr'){
            bot.sendMessage(messageChatId, `Создает строку таблицы.
Синтаксис: <table><tr><td>...</td></tr></table>.
Атрибуты: align, bgcolor, bordercolor, char, charoff, valign.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'track'){
            bot.sendMessage(messageChatId, `Добавляет субтитры для элементов <audio> и <video>.
Синтаксис: <video><track></video>.
Атрибуты: kind, src, srclang, label, default.`)
        } else if (messageText === 'u'){
            bot.sendMessage(messageChatId, `Выделяет отрывок текста подчёркиванием, без дополнительного акцента.
Синтаксис: <u>Текст</u>.
Валидация: Использование этого тега осуждается спецификацией HTML, валидный код получается только при использовании переходного <!DOCTYPE>.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили.`)
        } else if (messageText === 'ul'){
            bot.sendMessage(messageChatId, `Создает маркированный список.
Синтаксис: <ul><li>элемент маркированного списка</li></ul>.
Атрибуты: type.
Также для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'var'){
            bot.sendMessage(messageChatId, `Выделяет переменные из программ, отображая их курсивом.
Синтаксис: <var>Текст</var>.
Для этого тега доступны универсальные атрибуты и события.`)
        } else if (messageText === 'video'){
            bot.sendMessage(messageChatId, `Добавляет на страницу видео-файлы. 
Поддерживает 3 видео формата: MP4, WebM, Ogg.
Синтаксис: <video><source src="URL"></video>.
Атрибуты: autoplay, controls, height, loop, poster, preload, src, width.`)
        } else if (messageText === 'wbr'){
            bot.sendMessage(messageChatId, `Указывает браузеру возможное место разрыва длинной строки.
Синтаксис: Текст<wbr>текст.`)
        } else if (messageText === 'acronym'){
            bot.sendMessage(messageChatId, `Тег <acronym> указывает на то, что текст является акронимом.
В отличие от аббревиатуры, акроним — это устоявшееся сокращение, которое применяется как самостоятельное слово.
Синтаксис: <acronym>Текст</acronym>.
Для этого тега доступны универсальные атрибуты и события.
Устаревший тег - для упрощения остался единственный тег <abbr>.`)
        } else if (messageText === 'applet'){
            bot.sendMessage(messageChatId, `Тег <applet> предназначен для вставки на страницу апплетов — небольших программ, написанных на языке Java. 
Синтаксис: <applet code="URL">Текст</applet>.
Атрибуты: align, alt, archive, code, codebase, height, hspace, vspace, width.
Также для этого тега доступны универсальные атрибуты и события.
Валидация: Использование этого тега осуждается спецификацией HTML и его наличие приведет к невалидному коду.
Устаревший тег - вместо него следует использовать <embed> или <object>.`)
        } else if (messageText === 'blink'){
            bot.sendMessage(messageChatId, `Устанавливает мигание текста.
Синтаксис: Устанавливает мигание текста.
Валидация: Этот тег не входит в спецификацию HTML и его наличие приведет к невалидному коду.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили.`)
        } else if (messageText === 'big'){
            bot.sendMessage(messageChatId, `Тег <big> увеличивает размер шрифта на единицу по сравнению с обычным текстом.
Синтаксис: <big>Текст</big>.
Для этого тега доступны универсальные атрибуты и события.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили.`)
        } else if (messageText === 'basefont'){
            bot.sendMessage(messageChatId, `Тег <basefont> предназначен для задания шрифта, размера и цвета текста по умолчанию.
Синтаксис: <basefont>.
Атрибуты: color, face, size.
Валидация: Использование этого тега осуждается спецификацией HTML, валидный код получается только при использовании переходного <!DOCTYPE>.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили. `)
        } else if (messageText === 'bgsound'){
            bot.sendMessage(messageChatId, `Тег <bgsound> определяет музыкальный файл, который будет проигрываться на веб-странице при ее открытии.
Синтаксис: <head><bgsound атрибуты></head>.
Атрибуты: balance, loop, src, volume.
Валидация: Этот тег не входит в спецификацию HTML и его наличие приведет к невалидному коду.
Устаревший тег - для воспроизведения музыки используйте новый элемент <audio>.`)
        } else if (messageText === 'command'){
            bot.sendMessage(messageChatId, `Создает команду в виде переключателя, флажка или обычной кнопки. 
Тег <command> должен располагаться внутри <menu>, в противном случае он не будет показан.
Синтаксис: <menu><command параметры></menu>.
Атрибуты: checked, disabled, icon, label, radiogroup, type.`)
        } else if (messageText === 'comment'){
            bot.sendMessage(messageChatId, `Добавляет комментарий в код документа. Тег <comment> допустимо использовать только в <body>.
Синтаксис: <comment> текст </comment>.
Валидация: Этот тег является нестандартным, для добавления комментариев применяйте конструкцию <!-- -->.`)
        } else if (messageText === 'dir'){
            bot.sendMessage(messageChatId, `Тег <dir> создает список, содержащий названия директорий (системные папки).
Синтаксис: <dir><li>имя директории</li></dir>.
Валидация: Использование этого тега осуждается спецификацией HTML, валидный код получается только при использовании переходного <!DOCTYPE>.
Устаревший тег - вместо него используйте <ul>.`)
        } else if (messageText === 'font'){
            bot.sendMessage(messageChatId, `Тег <font> представляет собой контейнер для изменения характеристик шрифта, таких как размер, цвет и гарнитура.
Синтаксис: <font>Текст</font>.
Атрибуты: color, face, size.
Валидация: Использование этого тега осуждается спецификацией HTML, валидный код получается только при использовании переходного <!DOCTYPE>.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили.`)
        } else if (messageText === 'center'){
            bot.sendMessage(messageChatId, `Тег <center> выравнивает содержимое контейнера по центру относительно родительского элемента.
Синтаксис: <center>Текст</center>.
Валидация: Использование этого тега осуждается спецификацией HTML, валидный код получается только при использовании переходного <!DOCTYPE>.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили.`)
        } else if (messageText === 'frame'){
            bot.sendMessage(messageChatId, `Тег <frame> определяет свойства отдельного фрейма, на которые делится окно браузера. 
Этот элемент должен располагаться в контейнере <frameset>, который к тому же задает способ разметки страницы на отдельные области.
Синтаксис: <frameset><frame></frameset>.
Атрибуты: bordercolor, frameborder, name, noresize, scrolling, src.
Устаревший тег - если они вам требуются, используйте другую версию HTML или <iframe> совместно со стилями.`)
        } else if (messageText === 'frameset'){
            bot.sendMessage(messageChatId, `Определяет структуру фреймов на веб-странице. 
Фреймы разделяют окно браузера на отдельные области, расположенные вплотную друг к другу.
Синтаксис: <frameset><frame></frameset>.
Атрибуты: border, bordercolor, cols, frameborder, framespacing, rows.
Устаревший тег - если они вам требуются, используйте другую версию HTML или <iframe> совместно со стилями.`)
        } else if (messageText === 'hgroup'){
            bot.sendMessage(messageChatId, `Используется для группирования заголовков веб-страницы или раздела. 
Внутри располагаются теги заголовков от <h1> до <h6>.
Синтаксис: <hgroup></hgroup>.`)
        } else if (messageText === 'isindex'){
            bot.sendMessage(messageChatId, `Тег <isindex> предназначен для поискового индекса в текущем документе.
Синтаксис: <head><isindex атрибуты></head>.
Атрибуты: action, prompt.
Валидация: Использование этого тега осуждается спецификацией HTML, валидный код получается только при использовании переходного <!DOCTYPE>.
Устаревший тег - комбинация <form> и <input> лучше справляется с этой задачей.`)
        } else if (messageText === 'keygen'){
            bot.sendMessage(messageChatId, `Используется для генерации пары ключей — закрытого и открытого. 
Когда форма отправляется на сервер, закрытый ключ сохраняется на локальном компьютере, а открытый ключ передается вместе с формой. 
Сами ключи необходимы для шифрования и расшифровки данных, создания и проверки цифровой подписи.
Синтаксис: <form><keygen></keygen></form>.
Атрибуты: autofocus, challenge, disabled, form, keytype, name.`)
        } else if (messageText === 'marquee'){
            bot.sendMessage(messageChatId, `Тег <marquee> создает бегущую строку на странице. 
На самом деле содержимое контейнера <marquee> не ограничивается строками и позволяет перемещать (скролировать) любые элементы веб-страницы — изображения, текст, таблицы, элементы форм и т.д. 
Синтаксис: <marquee>...</marquee>.
Атрибуты: behavior, bgcolor, direction, height, hspace, loop, scrolldelay, truespeed, vspace, width.
Валидация: Этот тег не входит в спецификацию HTML и его наличие приведет к невалидному коду.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили.`)
        } else if (messageText === 'menu'){
            bot.sendMessage(messageChatId, `Тег <menu> предназначен для отображения списка пунктов меню.
Синтаксис: <menu><li>пункт меню</li></menu>.
Атрибуты: label, type.
Валидация: Использование этого тега осуждается спецификацией HTML4, валидный код получается только при использовании переходного <!DOCTYPE>. 
В HTML5 применение тега <menu> корректно.`)
        } else if (messageText === 'noembed'){
            bot.sendMessage(messageChatId, `Тег <noembed> предназначен для отображения информации на веб-странице, если браузер не поддерживает работу с плагинами.
Синтаксис: <noembed>Текст</noembed>.
Валидация: Этот тег не входит в спецификацию HTML и его наличие приведет к невалидному коду.
Устаревший тег - в качестве альтернативы используйте <object>.`)
        } else if (messageText === 'nobr'){
            bot.sendMessage(messageChatId, `Тег <nobr> уведомляет браузер отображать текст без переносов.
Синтаксис: <nobr>Текст</nobr>.
Валидация: Этот тег не входит в спецификацию HTML и его наличие приведет к невалидному коду.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили.`)
        } else if (messageText === 'noframes'){
            bot.sendMessage(messageChatId, `Содержимое тега <noframes> отображается в браузере, когда он не поддерживает фреймы и не умеет их интерпретировать.
Синтаксис: <frameset><noframes>Текст</noframes></frameset>.
Валидация: Использование этого тега осуждается спецификацией HTML, валидный код получается только при использовании переходного <!DOCTYPE> или <!DOCTYPE> для фреймов.
Устаревший тег - если они вам требуются, используйте другую версию HTML или <iframe> совместно со стилями.`)
        } else if (messageText === 'plaintext'){
            bot.sendMessage(messageChatId, `Тег <plaintext> отображает содержимое контейнера «как есть».
Синтаксис: <plaintext>Текст</plaintext>.
Валидация: Этот тег не входит в спецификацию HTML и его наличие приведет к невалидному коду.
Устаревший тег - вместо тега используйте MIME-тип text/plain.`)
        } else if (messageText === 'strike'){
            bot.sendMessage(messageChatId, `Тег <strike> отображает текст как перечеркнутый.
Синтаксис: <strike>Текст</strike>.
Валидация: Использование этого тега осуждается спецификацией HTML4, валидный код получается только при использовании переходного <!DOCTYPE>. 
В HTML5 использование <strike> запрещено.
Устаревший тег - для зачёркнутого текста применяется <s>, а для указания редакторской правки <del>.`)
        } else if (messageText === 'tt'){
            bot.sendMessage(messageChatId, `Контейнер <tt> отображает текст моноширинным текстом. 
Этот тег относится к группе тегов физического форматирования.
Синтаксис: <tt>Текст</tt>.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили.`)
        } else if (messageText === 'xmp'){
            bot.sendMessage(messageChatId, `Тег <xmp> отображает содержимое контейнера «как есть» и шрифтом фиксированной ширины.
Синтаксис: <xmp>Текст</xmp>.
Устаревший тег - для вывода листинга программы предназначены <pre> и <code>.`)
        } else if (messageText === '!DOCKTYPE'){
            bot.sendMessage(messageChatId, `Элемент <!DOCTYPE> предназначен для указания типа текущего документа — DTD (document type definition, описание типа документа). 
Это необходимо, чтобы браузер понимал, как следует интерпретировать текущую веб-страницу, поскольку HTML существует в нескольких версиях.
Синтаксис: <!DOCTYPE [Элемент верхнего уровня] [Публичность] "[Регистрация]//[Организация]//[Тип] [Имя]//[Язык]" "[URL]">.
Параметры: Элемент верхнего уровня, публичность, регистрация, организация, тип, имя, язык, URL.`)
        } else if (messageText === '!-- --'){
            bot.sendMessage(messageChatId, `Тег добавляет комментарий в код документа. 
Текст комментария не отображается на странице.
Синтаксис:<!-- текст -->. `)
        } else if (messageText === 'multicol'){
            bot.sendMessage(messageChatId, `Задает количество колонок, ширину и расстояние между колонками в многоколоночном тексте.
Синтаксис: <multicol cols="<число>">Текст</multicol>.
Атрибуты: cols, gutter, width.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили.`)
        } else if (messageText === 'spacer'){
            bot.sendMessage(messageChatId, `Создает пустое пространство по вертикали или горизонтали.
Синтаксис: <spacer height="<число>" width="<число>"></spacer>.
Атрибуты: align, height, size, type, width.
Устаревший тег - вместо этих тегов управляющих видом текста применяются стили.`)
        } else if (messageText === 'listing'){
            bot.sendMessage(messageChatId, `Предназначен для вывода листинга программ или кода. Отображает содержимое моноширинным шрифтом уменьшенного размера.
Синтаксис: <listing>Текст</listing>.
Валидация: Использование этого тега осуждается спецификацией HTML.
Устаревший тег - для вывода листинга программы предназначены <pre> и <code>.`)
        } else if (messageText === 'nextid'){
            bot.sendMessage(messageChatId, `этот тег не предназначен для людей и указывает идентификатор следующего документа для автоматических редакторов HTML. 
Полностью исключён.`)
        } else {
            bot.sendMessage(messageChatId, 'Такого тега нет или он написан не правильно')
        }
    }
)
  