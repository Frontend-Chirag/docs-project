import path from 'path';
import puppeteer from 'puppeteer';


export async function POST(req: Request,) {
    try {

        const { htmlContent, Filename } = await req.json();

        if (!htmlContent) {
            return new Response('HTML content is required', { status: 400 });
        }

        console.log(htmlContent, Filename)

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(htmlContent, { waitUntil: 'domcontentloaded' });

        const tiptapCss = path.join(process.cwd(), 'src', 'app', 'tiptap.css');
        console.log('CSS', tiptapCss);

        page.addStyleTag({ path: tiptapCss });

        const pdfBuffer = await page.pdf({
            path: `${Filename}.pdf`,
            format: 'A4',
            printBackground: true,
        });

        await browser.close();
        

        return new Response(pdfBuffer, {
            headers: {
                'Content-Type': 'application/pdf',
                'Content-Disposition': `attachment; filename=${Filename}.pdf`,
            },
        });

    } catch (error) {
        console.error('Error generating PDF:', error);
        return new Response('Internal Server Error', { status: 500 });
    }
}
