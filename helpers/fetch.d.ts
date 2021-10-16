import { AxiosRequestConfig, Method } from 'axios';
declare const _default: {
    serialize(object: any): string;
    prepareRequest(uri: string, method: Method | undefined, query: string): {
        url: string;
        method: Method;
    };
    sendRequest(request: AxiosRequestConfig): Promise<unknown>;
};
export default _default;
