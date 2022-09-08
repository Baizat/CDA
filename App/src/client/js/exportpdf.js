var base64Img = null;
imgToBase64("./src/images/logo2.png", function(base64) {
  base64Img = base64;
});
margins = {
  top: 70,
  bottom: 40,
  left: 30,
  width: 550
};

generate = function(flg) {
  //   var pdf = new jsPDF('p', 'pt', 'a4');
  //   pdf.setFontSize(18);
  //   //jsPDFAPI.fromHTML = function (HTML, x, y, settings, callback, margins)
  //   pdf.fromHTML(document.getElementById('surveyResult'),
  //     margins.left, // x coord
  //     margins.top,
  //     {
  //       // y coord
  //       width: margins.width// max width of content on PDF
  //     },function(dispose) {
  //       headerFooterFormatting(pdf)
  //     },
  //     margins);

  //   var iframe = document.createElement('iframe');
  //   iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
  //   document.body.appendChild(iframe);

  //   iframe.src = pdf.output('datauristring');

  // var pdf =  new jsPDF('p', 'pt', 'a4');
  // pdf.html(document.getElementById('surveyResult'), {callback: function(pdf) {
  //   var iframe = document.createElement('iframe');
  //   iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
  //   document.body.appendChild(iframe);
  //   iframe.src = pdf.output('datauristring');

  // }});

  // var hidden = document.getElementById('toVisible');
  // hidden.style.display = 'block';
  var opt = {
    margin: [34, 10, 18, 10],
    // margin: [43, 10, 18, 10],

    filename: "calc-result.pdf",

    image: { type: "jpeg", quality: 1 },
    html2canvas: { dpi: 72, letterRendering: true },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
      filters: ["ASCIIHexEncode"]
    }

    // this option avoid breaking the survey on an element
    // , pagebreak: { mode: 'avoid-all' }
  };

  // var data = '<div id="surveyResult" class="ac-pnl-ltr"><div class="result"><div class="collapsible active"> <h3 class="sec-head" style="background-color:#2E4A9D;color: #ffffff;line-height: 2em">Bugeting</h3> <div class="sec-summary"><h3>Grade : B - Fair</h3><p>You are budgeting and keeping some control of your expenses, with some household involvement</p></div><div class="content" style="background-color: rgb(200, 200, 230)"><ul><li>You have 1 or 2 credit cards. This is a manageable number of credit cards so long as you are using them for good reason. Aim to stay in control of your financial life by paying your credit cards in full on time and avoiding the pitfalls of debt. See our guide on credit cards for more.</li><li>None of your salary goes towards credit and debt payments every month. If you have no outstanding credit or debts, this is an excellent position to be in. Focus on maximizing your regular savings and aim not to let debt payments go above 35% of your salary.</li><li>You normally feel fine with your monthly bills. This shows you have a general confidence with your financial management. Be sure to set a monthly budget and manage expenses at the times of year when your bills become harder to manage.</li><li>You have no debts. To have no obligations is a good position from which to achieve financial success. Be sure to plan well before taking on any new debts, ensuring they are for good reason and will impact you positively in the future.</li></ul><p><strong>Recommended CDA Financial Awareness Resources </strong></p><ul><li>Articles: Managing Debt, Introduction to Credit Cards</li><li>Guides: Steps to Borrowing, Managing Debt, Using Credit Cards Wisely</li><li>Video: Introduction to Credit Cards</li></ul></div></div><div class="collapsible active"><h3 class="sec-head" style="background-color:#2E4A9D;color: #ffffff;line-height: 2em;">Debt and Credit Cards</h3><div class="sec-summary"><h3>Grade : B - Fair</h3><p>Your debts and credit cards are well managed with occasional challenges</p></div><div class="content" style="background-color: rgb(200, 200, 230)"><ul><li>You have 1 or 2 credit cards. This is a manageable number of credit cards so long as you are using them for good reason. Aim to stay in control of your financial life by paying your credit cards in full on time and avoiding the pitfalls of debt. See our guide on credit cards for more.</li><li>None of your salary goes towards credit and debt payments every month. If you have no outstanding credit or debts, this is an excellent position to be in. Focus on maximizing your regular savings and aim not to let debt payments go above 35% of your salary.</li><li>You normally feel fine with your monthly bills. This shows you have a general confidence with your financial management. Be sure to set a monthly budget and manage expenses at the times of year when your bills become harder to manage.</li><li>You have no debts. To have no obligations is a good position from which to achieve financial success. Be sure to plan well before taking on any new debts, ensuring they are for good reason and will impact you positively in the future.</li></ul><p><strong>Recommended CDA Financial Awareness Resources </strong></p><ul><li>Articles: Managing Debt, Introduction to Credit Cards</li><li>Guides: Steps to Borrowing, Managing Debt, Using Credit Cards Wisely</li><li>Video: Introduction to Credit Cards</li></ul></div></div></div></div>';
  //var newData= $(data).find('div').removeClass('collapsible active content')[0].innerHTML;

  var dir = document
    .getElementsByTagName("html")[0]
    .getAttribute("dir")
    .toLowerCase();
  //console.log(dir);
  var rptContainer = document.createElement("div");
  rptContainer.setAttribute("style", "width:793 px;");
  var rptHeaderHtml = document.getElementById("rpthead");
  rptHeaderHtml.setAttribute(
    "style",
    "font-family: 'Dubai-Regular', Helvetica, sans-serif;margin-bottom:2rem;"
  );
  //console.log($(rptHeaderHtml));
  var rptContainerClone = rptHeaderHtml.cloneNode(true);
  $(rptContainerClone)
    .find(".emailtxt")
    .remove();

  rptContainer.appendChild(rptContainerClone);

  var data = document.getElementById("surveyResult");
  var dataClone = data.cloneNode(true);
  console.log("sec heads");
  var secs = $(dataClone)
    .find(".sec-head")

    .attr(
      "style",
      "background-color:#55657D;color: #ffffff;font-size:1.2 rem;padding: 0 .7em .5em .7em; margin:0"
    );

  console.log(secs);
  var spanBullet = document.createElement("span");

  $(spanBullet)
    .attr(
      "style",
      dir == "ltr"
        ? "margin-left:-30px;padding-right:20px;"
        : "margin-right:-30px;padding-left:20px;"
    )
    .html("&#9679;");
  //'&#9679;'
  var cleanHtml = $(dataClone)
    .find("div")
    .removeClass("collapsible active content sec-head")
    .find("li")
    .prepend(spanBullet).prevObject[0];

  //[0].innerHTML;

  $(cleanHtml)
    .find("ul")
    .attr(
      "style",
      "list-style: none;margin:0;padding:10x 20px 10px 30px;margin:10x 30px 10px 20px;"
    );
  $(cleanHtml)
    .find("li")
    .attr("style", "padding:3px 7px;list-style-type: none;");

  rptContainer.appendChild(cleanHtml);

  console.log(rptContainer);

  if (flg == 1) {
    html2pdf()
      .set(opt)
      .from(rptContainer)
      .toPdf()
      .get("pdf")
      .then(pdfObject => {
        // you can add headers or footers here...
        headerFooterFormatting(pdfObject, dir);
        pdfObject.autoPrint();
        window.open(pdfObject.output("bloburl"), "_blank");
      });
  } else {
    html2pdf()
      .set(opt)
      .from(rptContainer)
      .toPdf()
      .get("pdf")
      .then(pdfObject => {
        // you can add headers or footers here...
        headerFooterFormatting(pdfObject, dir);
      })
      .save();
  }
};

function printDoc(doc) {
  console.log(doc);
  var tempFrame = $("#pdfdoc")[0],
    tempFrameWindow =
      tempFrame.contentDocument || tempFrame.contentWindow.document;

  tempFrameWindow.body.innerHTML = doc.output();
  tempFrame.contentWindow.print();
}
function headerFooterFormatting(doc, pgdir) {
  var totalPages = doc.internal.getNumberOfPages();

  for (var i = totalPages; i >= 1; i--) {
    //make this page, the current page we are currently working on.
    doc.setPage(i);
    // if (i == 1) {
    header(doc, pgdir);
    if (i != 1) {
      doc.setDrawColor(162, 165, 105);
      doc.setLineWidth(0.2);
      doc.line(10, 30, doc.internal.pageSize.getWidth() - 10, 30);
    }
    //}
    // else {
    //   doc.setFontSize(22);
    //   doc.text("Financial Health Check Calculator", 10, 30);
    // }

    footer(doc, i, totalPages);
  }
}

function header(doc, pgdir) {
  // doc.setFontSize(30);
  // doc.setTextColor(40);
  // doc.setFontStyle('normal');
  //   console.log('PAGE DIR : '+ pgdir);

  // doc.setFontSize(22);
  if (base64Img) {
    if (pgdir == "rtl") {
      //     console.log('EXECUTE RTL CODE');
      doc.addImage(base64Img, "PNG", 123, 10, 77, 15);

      /*  doc.text(["حاسبة كشف الصحة المالية"], 10, 32, {
        lang: "ar",
        align: "right"
      });*/

      // doc.addFont("Amiri-Regular.ttf", "Amiri", "normal");
      // doc.setFont("Amiri");

      // doc.text(
      //   "حاسبة كشف الصحة المالي",
      //   doc.internal.pageSize.getWidth() - 10,
      //   32,
      //   { lang: "ar", align: "right" }
      // );
    } else {
      // console.log('EXECUTE LTR CODE');
      doc.addImage(base64Img, "PNG", 10, 10, 77, 15);
      // doc.text("Financial Health Check Calculator", 10, 32);
    }
  }
  // doc.line(10, 36, doc.internal.pageSize.getWidth() - 10, 37);

  // doc.text("CDA Financial Health Check Report", margins.left + 50, 40 );

  //doc.line(3, 12, margins.width + 10,12); // horizontal line
}

// You could either use a function similar to this or pre convert an image with for example http://dopiaza.org/tools/datauri
// http://stackoverflow.com/questions/6150289/how-to-convert-image-into-base64-string-using-javascript
function imgToBase64(url, callback, imgVariable) {
  if (!window.FileReader) {
    callback(null);
    return;
  }
  var xhr = new XMLHttpRequest();
  xhr.responseType = "blob";
  xhr.onload = function() {
    var reader = new FileReader();
    reader.onloadend = function() {
      imgVariable = reader.result.replace("text/xml", "image/png");
      callback(imgVariable);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open("GET", url);
  xhr.send();
}

function footer(doc, pageNumber, totalPages) {
  var str = "Page " + pageNumber + " of " + totalPages;
  doc.setFontSize(10);
  // console.log(doc.internal.pageSize.getWidth());
  doc.text(str, 10, doc.internal.pageSize.getHeight() - 10);
  doc.text(
    curday("/"),
    doc.internal.pageSize.getWidth() - 30,
    doc.internal.pageSize.getHeight() - 10
  );
}

var curday = function(sp) {
  today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //As January is 0.
  var yyyy = today.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;
  return dd + sp + mm + sp + yyyy;
};
