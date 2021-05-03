import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { SpecialZoomLevel, Viewer, ViewerProps, Worker } from '@react-pdf-viewer/core';
import React, { PureComponent } from 'react';

type IProps = {
    classname?: string;
} & ViewerProps;

export default class EmbedPdf extends PureComponent<IProps> {
    render() {
        return (
            <div className={this.props.classname}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.js">
                    <Viewer fileUrl={this.props.fileUrl} defaultScale={SpecialZoomLevel.PageFit} plugins={[]} />
                </Worker>
            </div>
        );
    }
}
