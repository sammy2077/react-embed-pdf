import React, { PureComponent } from 'react'
import '@react-pdf-viewer/core/lib/styles/index.css';
import { SpecialZoomLevel, Viewer, Worker } from '@react-pdf-viewer/core';


type IProps={
    url:string
}
export default class EmedPdf extends PureComponent<IProps> {
    render() {
        return (
            <div>
                 <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.min.js">
                                <Viewer fileUrl={this.props.url} defaultScale={SpecialZoomLevel.PageFit} plugins={[]} />
                            </Worker>
            </div>
        )
    }
}
