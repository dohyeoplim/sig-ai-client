/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class BatchTestControllerService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns string OK
     * @throws ApiError
     */
    public runStoreDataSyncJob(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/batch/store-data-sync',
        });
    }
    /**
     * @returns string OK
     * @throws ApiError
     */
    public runSeoulDataSyncJob(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/batch/seoul-data-sync',
        });
    }
    /**
     * @returns string OK
     * @throws ApiError
     */
    public runProfitDataSyncJob(): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/batch/profit-data-sync',
        });
    }
}
