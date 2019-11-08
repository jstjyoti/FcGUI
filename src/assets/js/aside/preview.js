function _createFrame() {
  let dlgWraper = document.createElement('div'),
      dlg = document.createElement("div"),
      nav = document.createElement("div"),
      btnClose = document.createElement("button"),
      tblContainer = document.createElement("div"),
      colorDiv = document.createElement("div"),
      fileName = document.createElement('div'),
      fileNameTxt = document.createElement('span'),
      pallets = ['#007bff36', '#ff2d575d', '#ffbc2d5d', '#57ff2d2f'],
      tbl = document.createElement("table");
  dlgWraper.className = 'spreadsheet-wraper';
  dlg.className = 'spreadsheet-container';
  tblContainer.className = 'tbl-container';
  btnClose.className = 'btn btn-close';
  colorDiv.className = 'pallets';

  let ico = document.createElement('span');
  ico.className = 'fa fa-remove';
  btnClose.appendChild(ico);

  tbl.id = 'tbl-csv';
  tbl.className = 'tbl';
  btnClose.onclick = () => {
      dlgWraper.style = 'display: none';
      dlg.style = 'display:none';
  }



  nav.className = 'nav clearfix';
  fileName.className = 'filename';
  fileNameTxt.innerHTML = '&nbsp;' + document.getElementById('fileText').innerHTML;
  ico = document.createElement('span');
  ico.className = 'fa fa-file';
  fileName.appendChild(ico);
  fileName.appendChild(fileNameTxt);
  nav.appendChild(fileName);
  nav.appendChild(btnClose);
  dlg.appendChild(nav);
  tblContainer.appendChild(tbl);
  dlg.appendChild(tblContainer);
  pallets.forEach((color, idx) => {
      let span = document.createElement('span');
      span.className = 'colorhint';
      span.style = 'background-color:' + color + ';';
      if(idx === 0){
          span.innerHTML = 'X';
      }else{
          span.innerHTML = 'Y';
      }
      colorDiv.appendChild(span);
  });
  dlg.appendChild(colorDiv);
  dlgWraper.appendChild(dlg);
  document.body.appendChild(dlgWraper);
  return tbl;
}

function _fillTable(tbl, csv) {
  let tr, td, cellTag = 'th', dictIdx = [], pallets = 3;
  tbl.innerHTML = '';
  csv.forEach((line, lineNo) => {
      tr = document.createElement("tr");

      if (lineNo > 0) {
          cellTag = 'td';
      }

      td = document.createElement(cellTag);
      td.className = 'row-idx';
      
      td.innerHTML = lineNo > 0 ? lineNo : 'SL';
      
      tr.appendChild(td);

      line.forEach((col, colIdx) => {
          td = document.createElement(cellTag);
          console.log(selectedX, selectedY, colIdx);
          if(lineNo === 0){
              dictIdx.push(col);
          }

          if(dictIdx.indexOf(selectedX) === colIdx){
              td.className = 'selected-x';
          }
          if(selectedY.map(s => dictIdx.indexOf(s)).includes(colIdx)){
              td.className = 'selected-y-' + (colIdx % pallets);
          }
          td.innerHTML = col;
          tr.appendChild(td);
      });
      tbl.appendChild(tr);
  });
}

function previewCSV() {
  let tbl = document.getElementById("tbl-csv");
  if (!tbl) {
      tbl = _createFrame();
  }else{
      tbl.parentNode.parentNode.removeAttribute('style');
      tbl.parentNode.parentNode.parentNode.removeAttribute('style');
  }
  if (datacsv !== undefined) {
      _fillTable(tbl, data);
  }
}
