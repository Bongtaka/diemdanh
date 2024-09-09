// services/reportGenerator.ts
import { AttendanceSession } from '../models/attendanceSession';

export class ReportGenerator {
    generateReport(session: AttendanceSession): string {
        const records = session.getRecords();
        const className = session.getClassName();
        const date = session.getDate();
        const time = session.getTime();

        // Summarize data
        const summary = records.reduce((acc, record) => {
            acc[record.status] = (acc[record.status] || 0) + 1;
            return acc;
        }, {} as { [key: string]: number });

        return `Report for ${className} on ${date.toDateString()} at ${time}: ${JSON.stringify(summary)}`;
    }
}
