/**
 * @file Table component to show measurements.
 */

'use strict';

import React, { useMemo } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import QualityIcon from './QualityIcon';
import { FeatureMeasurement } from '../types';

interface Props {
  measurements: FeatureMeasurement[];
}
  
/* Auxiliar component to render a "vertical subtable".
 */
const SubTable = (props: Props) => {
  /* Maybe not necessary because measurements is the only property of props.
   */
  const DataRows: JSX.Element[] = useMemo(() => {
    return props.measurements.map((m, i) => (
      <tr key={i}>
        <td>{m.control}</td>
        <td style={{ textAlign: 'center' }}>{m.dev}</td>
        <td style={{ textAlign: 'center' }}>{m.devOutTol}</td>
        <td>
          <QualityIcon quality={m.quality} />
        </td>
      </tr>
    ));
  }, [props.measurements]);

  return (
    <Table>
      <thead>
        <tr>
          <th>Control</th>
          <th>Dev</th>
          <th>Dev Out Tol</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{DataRows}</tbody>
    </Table>
  );
};


const MeasurementsTable = (props: Props) => {

  const len = props.measurements.length;

  if (len === 0) {
    return null;
  }

  const middleIdx = Math.ceil(len/2);

  /* "Dirty" shortcut to get the apparence in the provided example:
   *
   * If the number of measurements is greater than 5, layout the table in two
   * subtables side by side.
   * 
   * If the number of measurements is less than 6, layout the table in a single
   * vertical table.
   * 
   */
  return len / 3 < 5 ? (
    <SubTable measurements={props.measurements} />
  ) : (
    <Container>
      <Row>
        <Col>
          <SubTable measurements={props.measurements.slice(0, middleIdx)} />
        </Col>
        <Col>
          <SubTable measurements={props.measurements.slice(middleIdx, len)} />
        </Col>
      </Row>
    </Container>
  );
};

export default MeasurementsTable;
