import { CheckServices } from "../domain/use-cases/checks/check-services";
import { CronService } from "./cron/cron-service";

export class Server {
  public static start() {
    //metodo publico
    console.log("Server started");

    //Llamando a CronService
    CronService.createJob("*/5 * * * * *", () => {
      //const date = new Date(); console.log('cada 5 segundos ', date);
      const url = "http://google.com";
      new CheckServices(

        () => console.log(`${url} is working`), //successCallback
        (error) => console.log(error)
      ).execute(url);
    });
  }
}
