import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { SpecialZoomLevel, Viewer, ViewerProps } from '@react-pdf-viewer/core';
import React, { PureComponent } from 'react';

type IProps = {
    classname?: string;
} & ViewerProps;
export default class EmedPdf extends PureComponent<IProps> {
    render() {
        return (
            <div className={this.props.classname}>
                <Viewer fileUrl={this.props.fileUrl} defaultScale={SpecialZoomLevel.PageFit} plugins={[]} />
            </div>
        );
    }
}
