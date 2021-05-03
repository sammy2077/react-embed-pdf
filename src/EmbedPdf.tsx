import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/print/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { SpecialZoomLevel, Viewer, ViewerProps, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import React from 'react';

type IProps = {
    classname?: string;
} & ViewerProps;

const EmbedPdf: React.FC<IProps> = ({ classname, fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    return (
        <div className={classname}>
            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.7.570/build/pdf.worker.js">
                <Viewer
                    fileUrl={fileUrl}
                    defaultScale={SpecialZoomLevel.PageFit}
                    plugins={[defaultLayoutPluginInstance]}
                />
            </Worker>
        </div>
    );
};
export default EmbedPdf;
