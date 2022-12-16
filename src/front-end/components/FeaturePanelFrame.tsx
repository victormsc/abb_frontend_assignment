/**
 * @file  Panel frame with title bar containing panel name and icons.
 */

'use strict';

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import QualityIcon from './QualityIcon';
import MeasurementsTable from './MeasurementsTable';
import { FeatureData } from '../types';

interface Props extends FeatureData {};

const FeaturePanelFrame = (props: Props) => {

  /* CSS class to color the title bar based on the quality of the feature.
   */
  const bgColorClass =
    props.quality === 'ok'
      ? 'bg-color-ok'
      : props.quality === 'warning'
      ? 'bg-color-warning'
      : 'bg-color-error';

  return (
    <div className='panel-container'>
      <div className={'panel-title-bar ' + bgColorClass}>
        <div className='panel-title-circle-icon-container'>
          <FontAwesomeIcon icon={faCircle} size='lg' className='text-white' />
        </div>
        <div className='panel-title-text'>{props.name}</div>
        <div className='panel-title-quality-icon-container'>
          <QualityIcon quality={props.quality} alwaysWhite={true} />
        </div>
      </div>
      <div className='panel-widget-container'>
        <MeasurementsTable
          measurements={props.measurements}
        />
      </div>
    </div>
  );
};

export default FeaturePanelFrame;
