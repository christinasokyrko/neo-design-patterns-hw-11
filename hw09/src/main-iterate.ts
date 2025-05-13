import { CsvIterator } from './iterators/CsvIterator';
import { JsonIterator } from './iterators/JsonIterator';
import { XmlIterator } from './iterators/XmlIterator';

console.log('--- CSV ---');
for (const user of new CsvIterator('./dist/users.csv')) {
    console.log(user);
}

console.log('--- JSON ---');
for (const user of new JsonIterator('./dist/users.json')) {
    console.log(user);
}

console.log('--- XML ---');
for (const user of new XmlIterator('./dist/users.xml')) {
    console.log(user);
} 