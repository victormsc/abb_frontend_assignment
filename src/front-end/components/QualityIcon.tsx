/**
 * @file Component with an icon representing the quality of the measurements. 
 */

'use strict';

import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import {
  faCheckCircle,
  faCircleXmark
} from '@fortawesome/free-regular-svg-icons';
import { QualityValue } from '../types';

interface Props {
  quality: QualityValue;
  alwaysWhite?: boolean;
}

const QualityIcon = (props: Props) => {
  return (
    <FontAwesomeIcon
      icon={
        props.quality === 'ok'
          ? faCheckCircle
          : props.quality === 'warning'
          ? faCircleExclamation
          : faCircleXmark
      }
      size='lg'
      className={
        props.alwaysWhite ? 'text-white' : props.quality === 'ok'
        ? 'text-success'
        : props.quality === 'warning'
        ? 'text-warning'
        : 'text-danger'
      }
    />
  );
};

export default QualityIcon;
