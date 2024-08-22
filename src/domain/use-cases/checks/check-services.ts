interface CheckServicesUseCase {
    execute(url: string): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallback = (error: string ) => void;

export class CheckServices implements CheckServicesUseCase{

    constructor(
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
            this.successCallback();
            
            return true;
        } catch (error) {
            console.log('Service is not working, error: ', error);
            this.errorCallback(`${error}`);
            return false;
        }


        
    }
}