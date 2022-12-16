/**
 * @file  Main component with feature panels.
 */

'use strict';

import React from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import Container from 'react-bootstrap/Container';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import FeaturePanelFrame from './FeaturePanelFrame';
import { InspectionData } from '../types';
import { defaultLayout } from './defaultLayout';
import { defaultInspectionData } from './defaultInspectionData';

interface Props {
  inspectionData: InspectionData;
}

const ResponsiveGridLayout = WidthProvider(Responsive);

const InspectionPanel = (props: Props) => {

  /* If props.inspectionData is invalid or has no elements, render default
   * empty panels generated from defaultInspectionData.
   *
   * If props.inspectionData is valid and has elements, render panels
   * containing the data.
   */
  let inspectionData = defaultInspectionData;
  if (props.inspectionData && props.inspectionData.length > 0) {
    inspectionData = props.inspectionData;
  }

  /* Generate panels as array of components mapping inspectionData.
   */
  const FeaturePanels: JSX.Element[] = inspectionData.map((f, i) => (
    <div key={i.toString()}>
      <FeaturePanelFrame
        key={i.toString()}
        name={f.name}
        quality={f.quality}
        measurements={f.measurements}
      />
    </div>
  ));

  return (
    <>
      <Container fluid className='pt-3 pb-0'>
        <Breadcrumb>
          <Breadcrumb.Item active bsPrefix='ps-3'>Part A</Breadcrumb.Item>
        </Breadcrumb>

        <ResponsiveGridLayout
          measureBeforeMount={true}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 24, md: 24, sm: 24, xs: 24, xxs: 24 }}
          rowHeight={60}
          layouts={defaultLayout}
          draggableHandle='.panel-title-text'
        >
          {FeaturePanels}
        </ResponsiveGridLayout>
      </Container>
    </>
  );
};

export default InspectionPanel;
