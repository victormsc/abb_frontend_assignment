
import { InspectionData } from '../types';

/**
 * Default inspection data to show empty panels while waiting for the first
 * data push from server.
 */
export const defaultInspectionData: InspectionData = [
    {
      name: 'FEATURE 1',
      quality: 'ok',
      measurements: []
    },
    {
      name: 'FEATURE 2',
      quality: 'ok',
      measurements: []
    },
    {
      name: 'FEATURE 3',
      quality: 'ok',
      measurements: []
    },
    {
      name: 'FEATURE 4',
      quality: 'ok',
      measurements: []
    },
    {
      name: 'FEATURE 5',
      quality: 'ok',
      measurements: []
    },
    {
      name: 'FEATURE 6',
      quality: 'ok',
      measurements: []
    }
  ];