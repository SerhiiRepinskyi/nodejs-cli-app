# nodejs-cli-app

Скріншоти виконання команд:

- Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)<br>
node index.js --action="list"<br>
[Посилання на фото](https://monosnap.com/file/sWebLJxZnAjA3aTB87jz8K1mE6yyIe)

![Скріншот списку контактів](https://monosnap.com/image/sWebLJxZnAjA3aTB87jz8K1mE6yyIe)

- Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.<br>
node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6<br>
[Посилання на фото](https://monosnap.com/image/1SrINDXACm4UlpqU2Qm9JGCwrhTFti)

![Скріншот отримання контакту](https://monosnap.com/image/1SrINDXACm4UlpqU2Qm9JGCwrhTFti)

- Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту<br>
node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22<br>
[Посилання на фото](https://monosnap.com/image/fPINOn1qL6BPaGBSXA3TciSWNSLQzr)

![Скріншот додавання контакту](https://monosnap.com/image/fPINOn1qL6BPaGBSXA3TciSWNSLQzr)

- Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.<br>
node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH<br>
[Посилання на фото](https://monosnap.com/image/iKg40Pu4BtxlVBxLdcUwxY5pqfd2kV)

![Скріншот видалення контакту](https://monosnap.com/image/iKg40Pu4BtxlVBxLdcUwxY5pqfd2kV)

- Редагуємо (оновлюємо) контакт та виводимо в консоль об'єкт редагованого контакту або null, якщо контакту з таким id не існує.<br>
node index.js --action="update" --id AeHIrLTr6JkxGE6SN-0Rw --name Mango --email mango@gmail.com --phone 777-777-777<br>
[Посилання на фото](https://monosnap.com/file/S2KNcQ52AQt1FtFhUTIdu9Y1E0hfvf)

![Скріншот редагування контакту](https://monosnap.com/image/S2KNcQ52AQt1FtFhUTIdu9Y1E0hfvf)

