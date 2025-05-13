import { CsvExporter } from './exporters/CsvExporter';
import { JsonExporter } from './exporters/JsonExporter';
import { XmlExporter } from './exporters/XmlExporter';

const exporters = [
    new CsvExporter(),
    new JsonExporter(),
    new XmlExporter()
];

(async () => {
    await Promise.all(exporters.map(exporter => exporter.export()));
})(); 