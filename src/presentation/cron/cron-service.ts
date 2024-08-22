import { CronJob } from "cron";






export class CronService {
    static createJob(): CronJob {
        const job = new CronJob(
            '*/2 * * * * *', // cronTime
            function () {
                const date = new Date();
                console.log('2 seconds');
            }
        );
        job.start();

        return job;
    }
}