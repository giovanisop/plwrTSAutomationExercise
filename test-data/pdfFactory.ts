import { PDFDocument } from 'pdf-lib';
import fs from 'fs';
import path from 'path';

const TMP_DIR = path.join(__dirname, 'tmp');

export async function createSamplePdf(fileName = 'sample.pdf'): Promise<string> {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    page.drawText('Sample PDF for upload test', { x: 50, y: page.getHeight() - 50 });

    fs.mkdirSync(TMP_DIR, { recursive: true });
    const filePath = path.join(TMP_DIR, fileName);
    fs.writeFileSync(filePath, await pdfDoc.save());

    return filePath;
}

export async function deleteSamplePdf(filePath: string) {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
}
