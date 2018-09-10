/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.10.1(ebbf400719be21761361804bf63fb3916e64a845)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.ru", { "vs/base/browser/ui/actionbar/actionbar": ["{0} ({1})"], "vs/base/browser/ui/aria/aria": ["{0} (произошло снова)"], "vs/base/browser/ui/findinput/findInput": ["ввод"], "vs/base/browser/ui/findinput/findInputCheckboxes": ["С учетом регистра", "Слово целиком", "Использовать регулярное выражение"], "vs/base/browser/ui/inputbox/inputBox": ["Ошибка: {0}", "Предупреждение: {0}", "Сведения: {0}"], "vs/base/common/keybindingLabels": ["CTRL", "SHIFT", "ALT", "Клавиша Windows", "CTRL", "SHIFT", "ALT", "Команда", "CTRL", "SHIFT", "ALT", "Клавиша Windows"], "vs/base/common/severity": ["Ошибка", "Предупреждение", "Сведения"], "vs/base/parts/quickopen/browser/quickOpenModel": ["{0}, средство выбора", "средство выбора"], "vs/base/parts/quickopen/browser/quickOpenWidget": ["Средство быстрого выбора. Введите, чтобы сузить результаты.", "Средство быстрого выбора"], "vs/base/parts/tree/browser/treeDefaults": ["Свернуть"], "vs/editor/browser/widget/diffEditorWidget": ["Нельзя сравнить файлы, потому что один из файлов слишком большой."], "vs/editor/browser/widget/diffReview": ["Закрыть", "Различие {0} из {1}; исходная версия: {2}, строки: {3}, измененная версия: {4}, строки: {5}", "пустой", "Исходная версия: {0}, измененная версия: {1}: {2}", "+ измененная версия: {0}: {1}", "- исходная версия: {0}: {1}", "Перейти к следующему различию", "Перейти к предыдущему различию"], "vs/editor/common/config/commonEditorConfig": ["Редактор", "Определяет семейство шрифтов.", "Управляет насыщенностью шрифта.", "Управляет размером шрифта в пикселях.", "Управляет высотой строк. Укажите 0 для вычисления высоты строки по размеру шрифта.", "Управляет интервалом между буквами в пикселях.", 'Управляет видимостью номеров строк. Возможные значения: "on", "off" и "relative". Значение "relative" показывает количество строк, начиная с текущего положения курсора.', "Столбцы, в которых должны отображаться вертикальные линейки", "Символы, которые будут использоваться как разделители слов при выполнении навигации или других операций, связанных со словами.", 'Число пробелов в табуляции. Эта настройка переопределяется на основании содержимого файла, когда включен параметр "editor.detectIndentation".', "Ожидается число. Обратите внимание, что значение auto заменено параметром editor.detectIndentation.", 'Вставлять пробелы при нажатии клавиши TAB. Эта настройка переопределяется на основании содержимого файла, когда включен параметр "editor.detectIndentation".', "Ожидается логическое значение. Обратите внимание, что значение auto заменено параметром editor.detectIndentation.", "При открытии файла editor.tabSize и editor.insertSpaces будут определяться на основе содержимого файла.", "Определяет, будут ли выделения иметь скругленные углы.", "Определяет, будет ли содержимое редактора прокручиваться за последнюю строку.", "Определяет, отображается ли мини-карта", "Определяет, будет ли автоматически скрываться ползунок мини-карты", "Отображает фактические символы в строке вместо цветных блоков.", "Ограничивает ширину мини-карты для отображения числа столбцов не больше определенного.", "Определяет, можно ли передать строку поиска в мини-приложение поиска из текста, выделенного в редакторе", 'Определяет, будет ли снят флажок "Поиск в выделенном", когда в редакторе выбрано несколько символов или строк текста', "Строки не будут переноситься никогда.", "Строки будут переноситься по ширине окна просмотра.", 'Строки будут переноситься по "editor.wordWrapColumn".', 'Строки будут перенесены по минимальному значению из двух: ширина окна просмотра и "editor.wordWrapColumn".', 'Определяет, как должны переноситься строки. Допустимые значения:\n - "off" (отключить перенос);\n - "on" (перенос окна просмотра);\n - "wordWrapColumn" (перенос в "editor.wordWrapColumn");\n - "bounded" (перенос при минимальной ширине окна просмотра и "editor.wordWrapColumn").', 'Определяет столбец переноса редактора, если значение "editor.wordWrap" — "wordWrapColumn" или "bounded".', 'Управляет отступом строк с переносом по словам. Допустимые значения: "none", "same" или "indent".', "Множитель, используемый для параметров deltaX и deltaY событий прокрутки колесика мыши.", "Соответствует клавише CTRL в Windows и Linux и клавише COMMAND в OS X.", "Соответствует клавише ALT в Windows и Linux и клавише OPTION в OS X.", 'Модификатор, который будет использоваться для добавления нескольких курсоров с помощью мыши. "ctrlCmd" соответствует клавише CTRL в Windows и Linux и клавише COMMAND в OS X. Жесты мыши "Перейти к определению" и "Открыть ссылку" будут изменены так, чтобы они не конфликтовали с несколькими курсорами.', "Разрешение кратких предложений в строках.", "Разрешение кратких предложений в комментариях.", "Разрешение кратких предложений вне строк и комментариев.", "Определяет, должны ли при вводе текста автоматически отображаться предложения", "Управляет длительностью задержки (в мс), перед отображением кратких предложений.", "Включает всплывающее окно с документацией по параметру и сведениями о типе, которое отображается во время набора", "Определяет, должен ли редактор автоматически закрывать скобки после открытия.", "Управляет параметром, определяющим, должен ли редактор автоматически форматировать строку после ввода.", "Определяет, будет ли редактор автоматически форматировать вставленное содержимое. Модуль форматирования должен быть доступен и иметь возможность форматировать диапазон в документе.", "Определяет, должен ли редактор автоматически изменять отступ при вводе текста, вставке текста или перемещении строк. Для использования этого параметра должны быть доступны правила отступа.", "Определяет, должны ли при вводе триггерных символов автоматически отображаться предложения.", 'Определяет, будут ли предложения приниматься клавишей ВВОД в дополнение к клавише TAB. Это помогает избежать неоднозначности между вставкой новых строк и принятием предложений. Значение "smart" означает, что при изменении текста предложения будут приниматься только при нажатии клавиши ВВОД.', 'Определяет, будут ли предложения приниматься символами фиксации. Например, в JavaScript точка с запятой (";") может быть символом фиксации, принимающим предложение и вводящим данный символ.', "Отображать предложения фрагментов поверх других предложений.", "Отображать предложения фрагментов под другими предложениями.", "Отображать предложения фрагментов рядом с другими предложениями.", "Не отображать предложения фрагментов.", "Управляет отображением фрагментов вместе с другими предложениями и их сортировкой.", "Управляет тем, копируется ли текущая строка при копировании без выделения.", "Определяет, следует ли оценивать завершения на основе слов в документе.", "Размер шрифта мини-приложения предложений", "Высота строки мини-приложения с предложениями", "Определяет, будет ли редактор выделять фрагменты, совпадающие с выделенным текстом.", "Определяет, должен ли редактор выделять экземпляры семантических символов.", "Определяет, сколько украшений могут отображаться на одном месте в обзорной линейке.", "Определяет, следует ли рисовать границу на обзорной линейке.", 'Управляет стилем анимации курсора. Допустимые значения: "blink", "smooth", "phase", "expand" и "solid"', "Изменение размера шрифта в редакторе при нажатой клавише CTRL и движении колесика мыши", 'Определяет стиль курсора. Допустимые значения: "block", "block-outline", "line", "line-thin", "underline" и "underline-thin"', "Включает лигатуры шрифта.", "Управляет скрытием курсора в обзорной линейке.", 'Определяет, должен ли редактор обрабатывать символы пробела; возможные значения: "none", "boundary" и "all". Параметр "boundary" не обрабатывает единичные пробелы между словами.', "Определяет, должны ли в редакторе отображаться управляющие символы.", "Определяет, должны ли в редакторе отображаться направляющие отступа.", "Определяет, должен ли редактор выделять текущую строку. Возможные значения: none, gutter, line и all.", "Управляет показом групп связанных элементов кода в редакторе", "Определяет, включено ли сворачивание кода в редакторе.", "Определяет, будут ли автоматически скрываться элементы управления свертыванием на полях.", "Выделяет соответствующие скобки при выборе одной из них.", "Управляет отображением вертикальных полей глифа в редакторе. Поля глифа в основном используются для отладки.", "Вставка и удаление пробелов после позиции табуляции", "Удалить автоматически вставляемый конечный пробел", "Оставлять быстрые редакторы открытыми, даже если дважды щелкнуто их содержимое или нажата клавиша ESC.", "Определяет, следует ли редактору разрешить перемещение выделенных элементов с помощью перетаскивания.", "Редактор будет определять, подключено ли средство чтения с экрана, с помощью API-интерфейсов платформы.", "Редактор будет оптимизирован для использования со средством чтения с экрана в постоянном режиме.", "Редактор никогда не будет оптимизироваться для использования со средством чтения с экрана.", "Определяет, следует ли запустить редактор в режиме оптимизации для средства чтения с экрана.", "Определяет, должен ли редактор определять ссылки и делать их доступными для щелчка", "Определяет, как редактор несовпадений отображает отличия: рядом или в тексте.", "Определяет, должен ли редактор несовпадений трактовать несовпадения символов-разделителей как различия.", "Определяет отображение редактором несовпадений индикаторов +/- для добавленных или удаленных изменений", "Контролирует, следует ли поддерживать первичный буфер обмена Linux."], "vs/editor/common/config/editorOptions": ["Редактор сейчас недоступен. Чтобы открыть список действий, нажмите ALT+F1.", "Содержимое редактора"], "vs/editor/common/controller/cursor": ["Неожиданное исключение при выполнении команды."], "vs/editor/common/model/textModelWithTokens": ["Не удалось разметить входные данные."], "vs/editor/common/modes/modesRegistry": ["Обычный текст"], "vs/editor/common/services/bulkEdit": ["Следующие файлы были изменены: {0}", "Нет изменений", "Сделано изменений {0} в {1} файлах", "Сделано изменений {0} в одном файле"], "vs/editor/common/services/modelServiceImpl": ["[{0}]\n{1}", "[{0}] {1}"], "vs/editor/common/view/editorColorRegistry": ["Цвет фона для выделения строки в позиции курсора.", "Цвет фона границ вокруг строки в позиции курсора.", "Цвет фона выделенных диапазонов, например в функциях быстрого открытия и поиска.", "Цвет курсора редактора.", "Цвет фона курсора редактора. Позволяет настраивать цвет символа, перекрываемого прямоугольным курсором.", "Цвет пробелов в редакторе.", "Цвет направляющих для отступов редактора.", "Цвет номеров строк редактора.", "Цвет линейки редактора.", "Цвет переднего плана элемента CodeLens в редакторе", "Цвет фона парных скобок", "Цвет прямоугольников парных скобок", "Цвет границы для линейки в окне просмотра.", "Цвет фона поля в редакторе. В поле размещаются отступы глифов и номера строк.", "Цвет волнистой линии для выделения ошибок в редакторе.", "Цвет границ волнистой линии для выделения ошибок в редакторе.", "Цвет волнистой линии для выделения предупреждений в редакторе.", "Цвет границ волнистой линии для выделения предупреждений в редакторе."], "vs/editor/contrib/bracketMatching/common/bracketMatching": ["Перейти к скобке"], "vs/editor/contrib/caretOperations/common/caretOperations": ["Переместить курсор влево", "Переместить курсор вправо"], "vs/editor/contrib/caretOperations/common/transpose": ["Транспортировать буквы"], "vs/editor/contrib/clipboard/browser/clipboard": ["Вырезать", "Копировать", "Вставить", "Копировать с выделением синтаксиса"], "vs/editor/contrib/comment/common/comment": ["Закомментировать или раскомментировать строку", "Закомментировать строку", "Раскомментировать строку", "Закомментировать или раскомментировать блок"], "vs/editor/contrib/contextmenu/browser/contextmenu": ["Показать контекстное меню редактора"], "vs/editor/contrib/find/browser/findWidget": ["Найти", "Найти", "Предыдущее соответствие", "Следующее соответствие", "Найти в выделении", "Закрыть", "Заменить", "Заменить", "Заменить", "Заменить все", 'Режим "Переключение замены"', "Отображаются только первые 999 результатов, но все операции поиска выполняются со всем текстом.", "{0} из {1}", "Нет результатов"], "vs/editor/contrib/find/common/findController": ["Найти", "Найти далее", "Найти ранее", "Найти следующее выделение", "Найти предыдущее выделение", "Заменить", "Добавить выделение в следующее найденное совпадение", "Добавить выделенный фрагмент в предыдущее найденное совпадение", "Переместить последнее выделение в следующее найденное совпадение", "Переместить последний выделенный фрагмент в предыдущее найденное совпадение", "Выбрать все вхождения найденных совпадений", "Изменить все вхождения", "Показать следующий найденный термин", "Показать предыдущий найденный термин"], "vs/editor/contrib/folding/browser/folding": ["Развернуть", "Развернуть рекурсивно", "Свернуть", "Свернуть рекурсивно", "Свернуть все", "Развернуть все", "Уровень папки {0}"], "vs/editor/contrib/format/browser/formatActions": ["Внесена одна правка форматирования в строке {0}.", "Внесены правки форматирования ({0}) в строке {1}.", "Внесена одна правка форматирования между строками {0} и {1}.", "Внесены правки форматирования ({0}) между строками {1} и {2}.", "Форматировать документ", "Форматировать выбранный фрагмент"], "vs/editor/contrib/goToDeclaration/browser/goToDeclarationCommands": ['Определение для "{0}" не найдено.', "Определения не найдены.", " — определения {0}", "Перейти к определению", "Открыть определение сбоку", "Показать определение", 'Не найдена реализация для "{0}".', "Не найдена реализация.", "— {0} реализаций", "Перейти к реализации", "Показать реализацию", 'Не найдено определение типа для "{0}".', "Не найдено определение типа.", "— {0} определений типов", "Перейти к определению типа", "Показать определение типа"], "vs/editor/contrib/goToDeclaration/browser/goToDeclarationMouse": ["Щелкните, чтобы отобразить определения ({0})."], "vs/editor/contrib/gotoError/browser/gotoError": ["({0}/{1})", "Перейти к следующей ошибке или предупреждению", "Перейти к предыдущей ошибке или предупреждению", "Цвет ошибки в мини-приложении навигации по меткам редактора.", "Цвет предупреждения в мини-приложении навигации по меткам редактора.", "Фон мини-приложения навигации по меткам редактора."], "vs/editor/contrib/hover/browser/hover": ["Показать при наведении"], "vs/editor/contrib/hover/browser/modesContentHover": ["Идет загрузка..."], "vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": ["Заменить предыдущим значением", "Заменить следующим значением"], "vs/editor/contrib/linesOperations/common/linesOperations": ["Копировать строку сверху", "Копировать строку снизу", "Переместить строку вверх", "Переместить строку вниз", "Сортировка строк по возрастанию", "Сортировка строк по убыванию", "Удалить конечные символы-разделители", "Удалить строку", "Увеличить отступ", "Уменьшить отступ", "Вставить строку выше", "Вставить строку ниже", "Удалить все слева", "Удалить все справа", "_Объединить строки", "Транспонировать символы вокруг курсора", "Преобразовать в верхний регистр", "Преобразовать в нижний регистр"], "vs/editor/contrib/links/browser/links": ["Щелкните с нажатой клавишей Cmd, чтобы перейти по ссылке", "Щелкните с нажатой клавишей Ctrl, чтобы перейти по ссылке", "Для выполнения команды щелкните ее, удерживая нажатой клавишу CMD", "Для выполнения команды щелкните ее, удерживая нажатой клавишу CTRL", "Щелкните с нажатой клавишей ALT, чтобы перейти по ссылке.", "Для выполнения команды щелкните ее, удерживая нажатой клавишу ALT", "Не удалось открыть ссылку, так как она имеет неправильный формат: {0}", "Не удалось открыть ссылку, у нее отсутствует целевой объект.", "Открыть ссылку"], "vs/editor/contrib/multicursor/common/multicursor": ["Добавить курсор выше", "Добавить курсор ниже", "Добавить курсоры к окончаниям строк"], "vs/editor/contrib/parameterHints/browser/parameterHints": ["Переключить подсказки к параметрам"], "vs/editor/contrib/parameterHints/browser/parameterHintsWidget": ["{0}, подсказка"], "vs/editor/contrib/quickFix/browser/quickFixCommands": ["Показать исправления ({0})", "Показать исправления", "Быстрое исправление"], "vs/editor/contrib/referenceSearch/browser/referenceSearch": [" — ссылки {0}", "Найти все ссылки"], "vs/editor/contrib/referenceSearch/browser/referencesController": ["Идет загрузка..."], "vs/editor/contrib/referenceSearch/browser/referencesModel": ["ссылка в {0} в строке {1} и символе {2}", "1 символ в {0}, полный путь: {1}", "{0} символов в {1}, полный путь: {2} ", "Результаты не найдены", "Обнаружен 1 символ в {0}", "Обнаружено {0} символов в {1}", "Обнаружено {0} символов в {1} файлах"], "vs/editor/contrib/referenceSearch/browser/referencesWidget": ["Не удалось разрешить файл.", "Ссылок: {0}", "{0} ссылка", "предварительный просмотр недоступен", "Ссылки", "Результаты отсутствуют", "Ссылки", "Цвет фона области заголовка быстрого редактора.", "Цвет заголовка быстрого редактора.", "Цвет сведений о заголовке быстрого редактора.", "Цвет границ быстрого редактора и массива.", "Цвет фона в списке результатов представления быстрого редактора.", "Цвет переднего плана узлов строки в списке результатов быстрого редактора.", "Цвет переднего плана узлов файла в списке результатов быстрого редактора.", "Цвет фона выбранной записи в списке результатов быстрого редактора.", "Цвет переднего плана выбранной записи в списке результатов быстрого редактора.", "Цвет фона быстрого редактора.", "Цвет фона поля в окне быстрого редактора.", "Цвет выделения совпадений в списке результатов быстрого редактора.", "Цвет выделения совпадений в быстром редакторе."], "vs/editor/contrib/rename/browser/rename": ["Результаты отсутствуют.", "«{0}» успешно переименован в «{1}». Сводка: {2}", "Не удалось переименовать.", "Переименовать символ"], "vs/editor/contrib/rename/browser/renameInputField": ["Введите новое имя для входных данных и нажмите клавишу ВВОД для подтверждения."], "vs/editor/contrib/smartSelect/common/smartSelect": ["Развернуть выделение", "Сжать выделение"], "vs/editor/contrib/suggest/browser/suggestController": ['При принятии "{0}" был добавлен следующий текст: "{1}"', "Переключить предложение"], "vs/editor/contrib/suggest/browser/suggestWidget": ["Цвет фона виджета подсказок.", "Цвет границ виджета подсказок.", "Цвет переднего плана мини-приложения предложений.", "Фоновый цвет выбранной записи в мини-приложении предложений.", "Цвет выделения соответствия в мини-приложении предложений.", "Подробнее...{0}", "{0}, предложение, содержит данные", "{0}, предложение", "Кратко...{0}", "Идет загрузка...", "Предложения отсутствуют.", "{0}, принято", "{0}, предложение, содержит данные", "{0}, предложение"], "vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": ["Переключение клавиши TAB перемещает фокус."], "vs/editor/contrib/wordHighlighter/common/wordHighlighter": ["Цвет фона символа при доступе на чтение, например считывании переменной.", "Цвет фона символа при доступе на запись, например записи переменной."], "vs/editor/contrib/zoneWidget/browser/peekViewWidget": ["Закрыть"], "vs/editor/standalone/browser/inspectTokens/inspectTokens": ["Developer: Inspect Tokens"], "vs/editor/standalone/browser/quickOpen/gotoLine": ["Go to line {0} and character {1}", "Go to line {0}", "Type a line number between 1 and {0} to navigate to", "Type a character between 1 and {0} to navigate to", "Go to line {0}", "Type a line number, followed by an optional colon and a character number to navigate to", "Go to Line..."], "vs/editor/standalone/browser/quickOpen/quickCommand": ["{0}, commands", "Type the name of an action you want to execute", "Command Palette"], "vs/editor/standalone/browser/quickOpen/quickOutline": ["{0}, symbols", "Type the name of an identifier you wish to navigate to", "Go to Symbol...", "symbols ({0})", "modules ({0})", "classes ({0})", "interfaces ({0})", "methods ({0})", "functions ({0})", "properties ({0})", "variables ({0})", "variables ({0})", "constructors ({0})", "calls ({0})"], "vs/editor/standalone/browser/standaloneCodeEditor": ["Editor content", "Press Ctrl+F1 for Accessibility Options.", "Press Alt+F1 for Accessibility Options."], "vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast": ["Toggle High Contrast Theme"], "vs/platform/configuration/common/configurationRegistry": ["Переопределения конфигурации по умолчанию", "Настройка переопределяемых параметров редактора для языка {0}.", "Настройка параметров редактора, переопределяемых для языка.", "Невозможно зарегистрировать \"{0}\". Оно соответствует шаблону свойства '\\\\[.*\\\\]$' для описания параметров редактора, определяемых языком. Используйте участие configurationDefaults.", 'Невозможно зарегистрировать "{0}". Это свойство уже зарегистрировано.'], "vs/platform/keybinding/common/abstractKeybindingService": ["Была нажата клавиша ({0}). Ожидание нажатия второй клавиши сочетания...", "Сочетание клавиш ({0} и {1}) не является командой."], "vs/platform/message/common/message": ["Закрыть", "Позже", "Отмена"], "vs/platform/theme/common/colorRegistry": ["Недопустимый формат цвета. Используйте #RGB, #RGBA, #RRGGBB или #RRGGBBAA", "Цвета, используемые на рабочем месте.", "Общий цвет переднего плана. Этот цвет используется, только если его не переопределит компонент.", "Общий цвет переднего плана для сообщений об ошибках. Этот цвет используется только если его не переопределяет компонент.", "Цвет текста элемента, содержащего пояснения, например, для метки.", "Общий цвет границ для элементов с фокусом. Этот цвет используется только в том случае, если не переопределен в компоненте.", "Дополнительная граница вокруг элементов, которая отделяет их от других элементов для улучшения контраста.", "Дополнительная граница вокруг активных элементов, которая отделяет их от других элементов для улучшения контраста.", "Цвет фона выделенного текста в рабочей области (например, в полях ввода или в текстовых полях). Не применяется к выделенному тексту в редакторе.", "Цвет для разделителей текста.", "Цвет переднего плана для ссылок в тексте.", "Цвет переднего фона для активных ссылок в тексте.", "Цвет текста фиксированного формата.", "Цвет фона для блоков с цитатами в тексте.", "Цвет границ для блоков с цитатами в тексте.", "Цвет фона для программного кода в тексте.", 'Цвет тени мини-приложений редактора, таких как "Найти/заменить".', "Фон поля ввода.", "Передний план поля ввода.", "Граница поля ввода.", "Цвет границ активированных параметров в полях ввода.", "Цвет фона поясняющего текста в элементе ввода.", 'Фоновый цвет проверки ввода для уровня серьезности "Сведения".', 'Цвет границы проверки ввода для уровня серьезности "Сведения".', 'Фоновый цвет проверки ввода для уровня серьезности "Предупреждение".', 'Цвет границы проверки ввода для уровня серьезности "Предупреждение".', 'Фоновый цвет проверки ввода для уровня серьезности "Ошибка".', 'Цвет границы проверки ввода для уровня серьезности "Ошибка".', "Фон раскрывающегося списка.", "Передний план раскрывающегося списка.", "Граница раскрывающегося списка.", "Фоновый цвет находящегося в фокусе элемента List/Tree, когда элемент List/Tree активен. На активном элементе List/Tree есть фокус клавиатуры, на неактивном — нет.", "Цвет переднего плана находящегося в фокусе элемента List/Tree, когда элемент List/Tree активен. На активном элементе List/Tree есть фокус клавиатуры, на неактивном — нет.", "Фоновый цвет выбранного элемента List/Tree, когда элемент List/Tree активен. На активном элементе List/Tree есть фокус клавиатуры, на неактивном — нет.", "Цвет переднего плана выбранного элемента List/Tree, когда элемент List/Tree активен. На активном элементе List/Tree есть фокус клавиатуры, на неактивном — нет.", "Фоновый цвет выбранного элемента List/Tree, когда элемент List/Tree неактивен. На активном элементе List/Tree есть фокус клавиатуры, на неактивном — нет.", "Цвет текста выбранного элемента List/Tree, когда элемент List/Tree неактивен. На активном элементе List/Tree есть фокус клавиатуры, на неактивном — нет.", "Фоновый цвет выбранного элемента List/Tree, когда элемент List/Tree неактивен. На активном элементе List/Tree есть фокус клавиатуры, на неактивном — нет.", "Цвет текста выбранного элемента List/Tree, когда элемент List/Tree неактивен. На активном элементе List/Tree есть фокус клавиатуры, на неактивном — нет.", "Фоновый цвет элементов List/Tree при наведении курсора мыши.", "Цвет переднего плана элементов List/Tree при наведении курсора мыши.", "Фоновый цвет элементов List/Tree при перемещении с помощью мыши.", "Цвет переднего плана для выделения соответствия при поиске по элементу List/Tree.", "Цвет средства быстрого выбора для группировки меток.", "Цвет средства быстрого выбора для группировки границ.", "Цвет переднего плана кнопки.", "Цвет фона кнопки.", "Цвет фона кнопки при наведении.", "Цвет фона бэджа. Бэджи - небольшие информационные элементы,  отображающие количество, например, результатов поиска.", "Цвет текста бэджа. Бэджи - небольшие информационные элементы, отображающие количество, например, результатов поиска.", "Цвет тени полосы прокрутки, которая свидетельствует о том, что содержимое прокручивается.", "Цвет фона ползунка полосы прокрутки.", "Цвет фона ползунка полосы прокрутки при наведении курсора.", "Цвет фона активного ползунка полосы прокрутки.", "Цвет фона индикатора выполнения, который может отображаться для длительных операций.", "Цвет фона редактора.", "Цвет переднего плана редактора по умолчанию.", "Цвет фона виджетов редактора, таких как найти/заменить.", "Цвет границы мини-приложений редактора. Этот цвет используется только в том случае, если у мини-приложения есть граница и если этот цвет не переопределен мини-приложением.", "Цвет выделения редактора.", "Цвет выделенного текста в режиме высокого контраста.", "Цвет выделения в неактивном редакторе.", "Цвет регионов с тем же содержимым, что и в выделении.", "Цвет текущего поиска совпадений.", "Цвет других совпадений поиска.", "Цвет диапазона, ограничивающего поиск.", "Выделение под словом, для которого показано наведение.", "Цвет фона при наведении указателя на редактор.", "Цвет границ при наведении указателя на редактор.", "Цвет активных ссылок.", "Цвет фона для добавленных строк.", "Цвет фона для удаленных строк.", "Цвет контура для добавленных строк.", "Цвет контура для удаленных строк.", "Цвет фона текущего заголовка во внутренних конфликтах слияния.", "Цвет фона текущего содержимого во внутренних конфликтах слияния.", "Цвет фона входящего заголовка во внутренних конфликтах слияния.", "Цвет фона входящего содержимого во внутренних конфликтах слияния.", "Цвет фона заголовка для общего предка во внутренних конфликтах слияния.", "Цвет фона содержимого для общего предка во внутренних конфликтах слияния.", "Цвет границы заголовков и разделителя во внутренних конфликтах слияния.", "Цвет переднего плана линейки текущего окна во внутренних конфликтах слияния.", "Цвет переднего плана линейки входящего окна во внутренних конфликтах слияния.", "Цвет переднего плана для обзорной линейки для общего предка во внутренних конфликтах слияния. "] });
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.ru.js.map
//# sourceMappingURL=editor.main.nls.ru.js.map