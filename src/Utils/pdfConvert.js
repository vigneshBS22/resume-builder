import jsPDF from 'jspdf';
import * as htmlToImage from 'html-to-image';

export const onButtonClick = () => {
  let domElement = document.getElementById('my-node');
  htmlToImage
    .toPng(domElement, 500, 600)
    .then(function (dataUrl) {
      const pdf = new jsPDF();
      pdf.addImage(dataUrl, 'PNG', 1, 1);
      pdf.save('download.pdf');
    })
    .catch(function (error) {
      console.error('oops, something went wrong!', error);
    });
};
