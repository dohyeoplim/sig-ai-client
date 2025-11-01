/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ApiResponse } from '../models/ApiResponse';
import type { MarketAnalysisReq } from '../models/MarketAnalysisReq';
import type { MemberReq } from '../models/MemberReq';
import type { PredictReq } from '../models/PredictReq';
import type { StoreReq } from '../models/StoreReq';
import type { StoreRevenueReq } from '../models/StoreRevenueReq';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class ApiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * 가게 정보 조회
     * 특정 가게의 기본 정보를 조회합니다.
     * @param storeId
     * @returns ApiResponse 조회 성공
     * @throws ApiError
     */
    public get(
        storeId: number,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/store/{storeId}',
            path: {
                'storeId': storeId,
            },
            errors: {
                404: `가게를 찾을 수 없음`,
            },
        });
    }
    /**
     * 가게 정보 수정
     * 가게 기본 정보를 수정합니다.
     * @param phoneNumber
     * @param storeId
     * @param requestBody
     * @returns ApiResponse 수정 성공
     * @throws ApiError
     */
    public update(
        phoneNumber: string,
        storeId: number,
        requestBody: StoreReq,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/store/{storeId}',
            path: {
                'storeId': storeId,
            },
            query: {
                'phoneNumber': phoneNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `가게를 찾을 수 없음`,
            },
        });
    }
    /**
     * 가게 정보 삭제
     * 가게 정보를 삭제합니다.
     * @param phoneNumber
     * @param storeId
     * @returns ApiResponse 삭제 성공
     * @throws ApiError
     */
    public delete(
        phoneNumber: string,
        storeId: number,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/store/{storeId}',
            path: {
                'storeId': storeId,
            },
            query: {
                'phoneNumber': phoneNumber,
            },
        });
    }
    /**
     * 사장님 정보 조회 (ID)
     * 사장님 ID로 정보를 조회합니다.
     * @param memberId
     * @returns ApiResponse 조회 성공
     * @throws ApiError
     */
    public get1(
        memberId: number,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/member/{memberId}',
            path: {
                'memberId': memberId,
            },
            errors: {
                404: `사장님을 찾을 수 없음`,
            },
        });
    }
    /**
     * 사장님 정보 수정
     * 사장님 정보를 수정합니다.
     * @param memberId
     * @param requestBody
     * @returns ApiResponse 수정 성공
     * @throws ApiError
     */
    public update1(
        memberId: number,
        requestBody: MemberReq,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/v1/member/{memberId}',
            path: {
                'memberId': memberId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `사장님을 찾을 수 없음`,
            },
        });
    }
    /**
     * 사장님 정보 삭제
     * 사장님 정보를 삭제합니다.
     * @param memberId
     * @returns ApiResponse 삭제 성공
     * @throws ApiError
     */
    public delete1(
        memberId: number,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/v1/member/{memberId}',
            path: {
                'memberId': memberId,
            },
        });
    }
    /**
     * 가게 정보 등록
     * 가게 기본 정보를 등록합니다.
     *
     * - storeName: 가게 이름
     * - serviceIndustry: 업종 (KOREAN, CHINESE, JAPANESE, WESTERN, CAFE, CHICKEN, PIZZA, BURGER, BAKERY, OTHER)
     * - dong: 동 주소 (예: "성수동")
     * - openingDate: 개업일 (YYYY-MM-DD)
     * - gu: 구 주소 (선택, 예: "성동구")
     * - brandCode: 브랜드 코드 (선택, 0: 일반, 1: 프랜차이즈)
     *
     * **참고:** 매출 데이터는 별도 API(/api/v1/revenue)로 등록합니다.
     *
     * @param phoneNumber
     * @param requestBody
     * @returns ApiResponse 등록 성공
     * @throws ApiError
     */
    public create(
        phoneNumber: string,
        requestBody: StoreReq,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/store',
            query: {
                'phoneNumber': phoneNumber,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `잘못된 요청`,
            },
        });
    }
    /**
     * 월별 매출 데이터 등록
     * 사장님이 특정 월의 매출 및 고객 통계 데이터를 입력합니다.
     *
     * - storeId: 가게 ID
     * - year: 년도 (1950~2100)
     * - month: 월 (1~12)
     * - monthlyRevenue: 월 매출액 (원)
     * - deliverySalesRatio: 배달 매출 비율 (%, 0.0~100.0)
     * - maleCustomer2030Ratio: 남성 2030대 고객 비중 (%, 0.0~100.0)
     * - maleCustomer40PlusRatio: 남성 40대 이상 고객 비중 (%, 0.0~100.0)
     * - returningCustomerRatio: 재방문 고객 비중 (%, 0.0~100.0)
     *
     * **참고:**
     * - 남성 2030대 + 남성 40대 이상 비중의 합은 100% 이하여야 합니다.
     *
     * @param requestBody 월별 매출 데이터 입력 요청
     * @returns ApiResponse 매출 데이터 등록 성공
     * @throws ApiError
     */
    public createRevenue(
        requestBody: StoreRevenueReq,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/revenue',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `잘못된 요청 (필수 필드 누락 또는 형식 오류)`,
                404: `가게를 찾을 수 없음`,
            },
        });
    }
    /**
     * 폐업 예측
     * 가맹점의 상세 정보를 받아 해당 가맹점의 폐업 위험도를 예측합니다.
     *
     * **필수 정보:**
     * - 가맹점 ID (storeId)
     * - 현재 분기 (quarter)
     * - 운영 개월 수 (monthsOfOperation)
     *
     *
     * @param requestBody
     * @returns ApiResponse 예측 성공
     * @throws ApiError
     */
    public predict(
        requestBody: PredictReq,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/predict',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `잘못된 요청 (유효하지 않은 파라미터)`,
                404: `가맹점을 찾을 수 없음`,
                500: `서버 내부 오류`,
            },
        });
    }
    /**
     * 사장님 등록
     * 사장님 정보를 등록합니다.
     *
     * - name: 사장님 이름
     * - phoneNumber: 전화번호 (010-1234-5678 형식)
     *
     * **참고:** 전화번호는 중복될 수 없습니다.
     *
     * @param requestBody
     * @returns ApiResponse 등록 성공
     * @throws ApiError
     */
    public create1(
        requestBody: MemberReq,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/member',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `잘못된 요청 (중복된 전화번호 또는 형식 오류)`,
            },
        });
    }
    /**
     * 가게 상권 분석
     * 특정 가게의 상권을 분석합니다.
     *
     * **분석 기준:**
     * - 가게 ID를 통해 업종 및 상권 정보 조회
     * - 지정된 분기의 매출 데이터 분석
     * - 과거 분기 트렌드 비교 (기본 8분기)
     *
     * **요청 본문 (MarketAnalysisReq):**
     * - `storeId`: 분석할 가게 ID (필수)
     * - `quarter`: 분석 기준 분기, YYYYQQ 형식 (예: 202401 = 2024년 1분기)
     * - `count`: 조회할 과거 분기 수 (1-20, 기본값: 8)
     *
     * @param requestBody
     * @returns ApiResponse 상권 분석 성공
     * @throws ApiError
     */
    public analysis(
        requestBody: MarketAnalysisReq,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/v1/analysis',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `잘못된 요청 (유효하지 않은 파라미터)`,
                404: `가게를 찾을 수 없음`,
                500: `서버 내부 오류`,
            },
        });
    }
    /**
     * 사장님 전화번호로 가게 목록 조회
     * 사장님의 전화번호로 해당 사장님이 소유한 모든 가게를 조회합니다. (JPA 1:N 관계 활용)
     * @param phoneNumber
     * @returns ApiResponse 조회 성공
     * @throws ApiError
     */
    public getStoresByPhoneNumber(
        phoneNumber: string,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/store/member/{phoneNumber}',
            path: {
                'phoneNumber': phoneNumber,
            },
            errors: {
                404: `해당 전화번호로 등록된 가게를 찾을 수 없음`,
            },
        });
    }
    /**
     * 가게의 월별 매출 데이터 조회
     * 특정 가게의 모든 월별 매출 및 고객 통계 데이터를 조회합니다.
     * 최신 월부터 과거 순으로 정렬되어 반환됩니다.
     *
     * @param storeId
     * @returns ApiResponse 매출 데이터 조회 성공
     * @throws ApiError
     */
    public getRevenuesByStoreId(
        storeId: number,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/revenue/{storeId}',
            path: {
                'storeId': storeId,
            },
            errors: {
                404: `가게를 찾을 수 없거나 매출 데이터가 없음`,
            },
        });
    }
    /**
     * 사장님 정보 조회 (전화번호)
     * 전화번호로 사장님 정보를 조회합니다.
     * @param phoneNumber
     * @returns ApiResponse 조회 성공
     * @throws ApiError
     */
    public getByPhoneNumber(
        phoneNumber: string,
    ): CancelablePromise<ApiResponse> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/v1/member/phone/{phoneNumber}',
            path: {
                'phoneNumber': phoneNumber,
            },
            errors: {
                404: `해당 전화번호로 등록된 사장님을 찾을 수 없음`,
            },
        });
    }
}
