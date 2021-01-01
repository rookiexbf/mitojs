import { InitOptions } from '../types/options';
import { AuthInfo, TransportDataType, ReportDataType } from '../types/transportData';
export declare class TransportData {
    url: string;
    private queue;
    private beforeDataReport;
    private backTrackerId;
    private configReportXhr;
    private apikey;
    constructor(url: string);
    getRecord(): any[];
    xhrPost(data: ReportDataType): void;
    getAuthInfo(): AuthInfo;
    getTrackerId(): string | number;
    getTransportData(data: ReportDataType): TransportDataType;
    isSdkTransportUrl(targetUrl: string): boolean;
    bindOptions(options?: InitOptions): void;
    send(data: ReportDataType | Record<string, unknown>): void;
}
declare const transportData: TransportData;
export { transportData };