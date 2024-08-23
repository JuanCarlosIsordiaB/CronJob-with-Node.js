import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";
import { LogRepository } from "../../repository/log.repository";

interface CheckServicesUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string ) => void;

export class CheckServices implements CheckServicesUseCase{

    constructor(
        private readonly logRepository: LogRepository,
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallback
    ) {

    }

    public async execute(url: string): Promise<boolean>{

        try {
            const req = await fetch(url);
            
            if(!req.ok){
                throw new Error('Error on checking service');
            }

            const log = new LogEntity(`Service ${url} is working`, LogSeverityLevel.low);
            this.logRepository.saveLog(log )
            this.successCallback();


            
            return true;
        } catch (error) {
            const errorString = `${error}`;
            const log = new LogEntity(errorString, LogSeverityLevel.high);
            this.logRepository.saveLog(log);
            this.errorCallback(errorString);
            return false;
        }


        
    }
}