generate = function(){ 
    html2canvas($('#surveyResult'), {
        onrendered: function(canvas){
            html2canvasSuccess(canvas);
        }
    });
}

var canvasShiftImage=function(oldCanvas, shiftAmt, realPdfPageHeight){
    shiftAmt = parseInt(shiftAmt) || 0;
    if(shiftAmt <= 0){ return oldCanvas; }

    var newCanvas = document.createElement('canvas');
    newCanvas.height = Math.min(oldCanvas.height - shiftAmt, realPdfPageHeight);
    newCanvas.width = oldCanvas.width;
    var ctx = newCanvas.getContext('2d');

    var img = new Image();
    img.src = oldCanvas.toDataURL();
    ctx.drawImage(img, 0, shiftAmt, img.width, img.height, 0, 0, img.width, img.height);

    return newCanvas;
}

var html2canvasSuccess = function(canvas){
    var pdf = new jsPDF('l','px'),
        pdfInternals = pdf.internal,
        pdfPageSize = pdfInternals.pageSize,
        pdfScaleFactor = pdfInternals.scaleFactor,
        pdfPageWidth = pdfPageSize.width,
        pdfPageHeight = pdfPageSize.height,
        totalPdfHeight = 0,
        htmlPageHeight = canvas.height,
        htmlScaleFactor = canvas.width / (pdfPageWidth * pdfScaleFactor);

    while(totalPdfHeight < htmlPageHeight){
        var newCanvas = canvasShiftImage(canvas, totalPdfHeight, pdfPageHeight * pdfScaleFactor);
        pdf.addImage(newCanvas, 'png', 0, 0, pdfPageWidth, 0, null, 'NONE'); //note the format doesn't seem to do anything... I had it at 'pdf' and it didn't care

        totalPdfHeight += (pdfPageHeight * pdfScaleFactor * htmlScaleFactor);

        if(totalPdfHeight < htmlPageHeight){ pdf.addPage(); }
    }

    pdf.save('test.pdf');
};

