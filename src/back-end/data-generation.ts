/**
 * @file Functions to mockup the generation of measurements.
 */

import { FeatureMeasurement, QualityValue, InspectionData } from './types';

/**
 * Generate an pseudorandom integer number between 0 and 10.
 */
const genetateRandomNumber = () => Math.round(Math.random() * 10);

/**
 * Randomly generate a string 'ok' | 'warning' | 'error' representing the
 * quality of a measurement.
 */
const genetateRandomQuality = (): QualityValue => {
  const qual: QualityValue[] = ['ok', 'warning', 'error'];
  return qual[Math.floor(Math.random() * 3)];
};

/**
 * Randomly generates an array of objects representing one or more measurements
 * of x, y, z and Diameter.
 *
 * @param numMeasurements number of measurements to generate.
 *
 * @returns array of measurements or [] if numMeasurements < 1.
 */
const genetateRandomMeasurements = (
  numMeasurements: number
): FeatureMeasurement[] => {
  let measurements = [];

  if (numMeasurements > 0) {
    for (let i = 0; i < numMeasurements; i++) {
      measurements.push(
        {
          control: 'x',
          dev: genetateRandomNumber(),
          devOutTol: genetateRandomNumber(),
          quality: genetateRandomQuality()
        },
        {
          control: 'y',
          dev: genetateRandomNumber(),
          devOutTol: genetateRandomNumber(),
          quality: genetateRandomQuality()
        },
        {
          control: 'z',
          dev: genetateRandomNumber(),
          devOutTol: genetateRandomNumber(),
          quality: genetateRandomQuality()
        },
        {
          control: 'Diameter',
          dev: genetateRandomNumber(),
          devOutTol: genetateRandomNumber(),
          quality: genetateRandomQuality()
        }
      );
    }
  }

  return measurements;
};

/**
 * Randomly generates an array of measurements for six features.
 */
export const generateRandomInspectionData = (): InspectionData => {
  return [
    {
      name: 'FEATURE 1',
      quality: genetateRandomQuality(),
      measurements: genetateRandomMeasurements(6)
    },
    {
      name: 'FEATURE 2',
      quality: genetateRandomQuality(),
      measurements: genetateRandomMeasurements(1)
    },
    {
      name: 'FEATURE 3',
      quality: genetateRandomQuality(),
      measurements: genetateRandomMeasurements(1)
    },
    {
      name: 'FEATURE 4',
      quality: genetateRandomQuality(),
      measurements: genetateRandomMeasurements(3)
    },
    {
      name: 'FEATURE 5',
      quality: genetateRandomQuality(),
      measurements: genetateRandomMeasurements(1)
    },
    {
      name: 'FEATURE 6',
      quality: genetateRandomQuality(),
      measurements: genetateRandomMeasurements(1)
    }
  ];
};
