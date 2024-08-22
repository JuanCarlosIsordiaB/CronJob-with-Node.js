interface CheckServicesUseCase {
    execute(url: string): Promise<boolean>;
}

export class CheckServices implements CheckServicesUseCase{



    public async execute(url: string): Promise<boolean>{

        try {
            const req = await fetch(url);
            
            if(!req.ok){
                throw new Error('Error on checking service');
            }
            console.log('Service is working');
            return true;
        } catch (error) {
            console.log('Service is not working, error: ', error);

            return false;
        }


        
    }
}