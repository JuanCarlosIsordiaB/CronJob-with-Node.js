import { CronService } from "./cron/cron-service";





export class Server {
  public static start() {
    //metodo publico
    console.log("Server started");


    //Llamando a CronService
    CronService.createJob();
  }
}
