# nodejs-cli-app

Скріншоти виконання команд:

- Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)<br>
node index.js --action="list"<br>
[Посилання на фото](https://monosnap.com/file/Vy4XRDQzyeSBtPLRsNF306moWD7mFb)

![Скріншот списку контактів](https://monosnap.com/file/Vy4XRDQzyeSBtPLRsNF306moWD7mFb)

- Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.<br>
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6<br>
[Посилання на фото](https://monosnap.com/file/gjNl2iYjc9KCeTOHoeBayORvkTQPA8)

![Скріншот отримання контакту](https://monosnap.com/file/gjNl2iYjc9KCeTOHoeBayORvkTQPA8)

- Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту<br>
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22<br>
[Посилання на фото](https://monosnap.com/file/EMbHk4SX7dgSfvJqlW94rLyemP0dI0)

![Скріншот додавання контакту](https://monosnap.com/file/EMbHk4SX7dgSfvJqlW94rLyemP0dI0)

- Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.<br>
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH<br>
[Посилання на фото](https://monosnap.com/file/K2NNeMvQOELIv7wDOx0s5KU78Q7fHD)

![Скріншот видалення контакту](https://monosnap.com/file/K2NNeMvQOELIv7wDOx0s5KU78Q7fHD)

- Редагуємо (оновлюємо) контакт та виводимо в консоль об'єкт редагованого контакту або null, якщо контакту з таким id не існує.<br>
node index.js --action="update" --id AeHIrLTr6JkxGE6SN-0Rw --name Mango --email mango@gmail.com --phone 777-777-777<br>
[Посилання на фото](https://monosnap.com/file/1WFWPwWyXKsDNZZ4pGWREEn34elh3Y)

![Скріншот редагування контакту](https://monosnap.com/file/1WFWPwWyXKsDNZZ4pGWREEn34elh3Y)

