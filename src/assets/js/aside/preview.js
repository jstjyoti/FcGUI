function _createFrame() {
    let dlgWraper = document.createElement('div'),
        dlg = document.createElement("div"),
        nav = document.createElement("div"),
        btnClose = document.createElement("button"),
        tblContainer = document.createElement("div"),
        tbl = document.createElement("table");
    dlgWraper.className = 'spreadsheet-wraper';
    dlg.className = 'spreadsheet-container';
    tblContainer.className = 'tbl-container';
    btnClose.className = 'btn btn-close';
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
    nav.appendChild(btnClose);
    dlg.appendChild(nav);
    tblContainer.appendChild(tbl);
    dlg.appendChild(tblContainer);
    dlgWraper.appendChild(dlg);
    document.body.appendChild(dlgWraper);
    return tbl;
}

function _fillTable(tbl, csv) {
    let tr, td, cellTag = 'th';
    csv.forEach((line, lineNo) => {
        tr = document.createElement("tr");

        if (lineNo > 0) {
            cellTag = 'td';
        }

        td = document.createElement(cellTag);
        td.className = 'row-idx';
        
        td.innerHTML = lineNo > 0 ? lineNo : '';
        
        tr.appendChild(td);

        line.forEach((col, colIdx) => {
            td = document.createElement(cellTag);
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

