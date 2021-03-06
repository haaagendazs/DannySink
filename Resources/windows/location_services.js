W.LocationServices = function() {
  var win = UI.Win({
    title:'Location'
  });
  
  // Define table and table data.
  var tableData = new Array();
  var rowCurrentPosition = Ti.UI.createTableViewRow({title:'Current Position', hasChild:true});
  var rowHeading = Ti.UI.createTableViewRow({title:'Heading', hasChild:true});
  var rowMapBasic = Ti.UI.createTableViewRow({title:'Basic Map', hasChild:true});
  var rowMapForwardGeo = Ti.UI.createTableViewRow({title:'Map by Location', hasChild:true});
  tableData.push(rowCurrentPosition);
  tableData.push(rowHeading);
  tableData.push(rowMapBasic);
  tableData.push(rowMapForwardGeo);  
  
  var table = Ti.UI.createTableView({
    data:tableData
  });
  
  win.add(table);
  
  /**
   * Event Listeners.
   */
  rowCurrentPosition.addEventListener('click', function(e) {
    TabGroup.currentTab.open(W.LocationPosition());
  });
  rowHeading.addEventListener('click', function(e) {
    TabGroup.currentTab.open(W.LocationHeading());
  });
  rowMapBasic.addEventListener('click', function(e) {
    TabGroup.currentTab.open(W.MapBasic());
  });
  rowMapForwardGeo.addEventListener('click', function(e) {
    TabGroup.currentTab.open(W.MapForwardGeo());
  })
  
  return win;
}