import * as path from "path";
import * as fs from "fs/promises";
import { buildAccessLogChain } from "./chain/chains/AccessLogChain";
import { buildTransactionChain } from "./chain/chains/TransactionChain";
import { buildSystemErrorChain } from "./chain/chains/SystemErrorChain";
import { ProcessingMediator } from "./mediator/ProcessingMediator";
import { AccessLogWriter } from "./mediator/writers/AccessLogWriter";
import { TransactionWriter } from "./mediator/writers/TransactionWriter";
import { ErrorLogWriter } from "./mediator/writers/ErrorLogWriter";
import { RejectedWriter } from "./mediator/writers/RejectedWriter";
import { DataRecord } from "./models/DataRecord";

const handlerMap = {
  access_log: buildAccessLogChain,
  transaction: buildTransactionChain,
  system_error: buildSystemErrorChain,
};

async function main() {
  try {
    const dataFilePath = path.resolve(__dirname, "data", "records.json");
    console.log("Reading file:", dataFilePath);

    const dataRaw = await fs.readFile(dataFilePath, "utf-8");
    const records: DataRecord[] = JSON.parse(dataRaw);

    const accessLogWriter = new AccessLogWriter();
    const transactionWriter = new TransactionWriter();
    const errorLogWriter = new ErrorLogWriter();
    const rejectedWriter = new RejectedWriter();

    const mediator = new ProcessingMediator(
      accessLogWriter,
      transactionWriter,
      errorLogWriter,
      rejectedWriter
    );

    console.log(`Завантажено записів: ${records.length}`);

    let successCount = 0;
    let rejectedCount = 0;

    for (const record of records) {
      const buildChain = handlerMap[record.type];
      if (!buildChain) {
        await mediator.onRejected(record, `Unknown type: ${record.type}`);
        rejectedCount++;
        continue;
      }
      const handler = buildChain();

      try {
        const processed = handler.handle(record);
        await mediator.onSuccess(processed);
        successCount++;
      } catch (err: any) {
        await mediator.onRejected(record, err.message || "Unknown error");
        rejectedCount++;
      }
    }

    await mediator.finalize();

    console.log(`Успішно оброблено: ${successCount}`);
    console.log(`Відхилено з помилками: ${rejectedCount}`);
    console.log("Звіт збережено у директорії output/");
  } catch (error) {
    console.error("Помилка при зчитуванні або парсингу файлу input.json:", error);
  }
}

main();
