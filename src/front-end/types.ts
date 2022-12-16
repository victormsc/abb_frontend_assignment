/**
 * @file Type definitions.
 */

export type QualityValue = 'ok' | 'warning' | 'error';

export interface FeatureMeasurement {  
    control: string;
    dev: number;
    devOutTol: number;
    quality: QualityValue;
};

export interface FeatureData {  
    name: string;
    quality: QualityValue;
    measurements: FeatureMeasurement[];
};

export interface InspectionData extends Array<FeatureData> {};

