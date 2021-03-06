W.UiDeepDive = function () {
  // Fill a table with data.
  var tableData = [];
  
  // Table Things.
  tableData.push(Ti.UI.createTableViewRow({
    header:'Table Things',
    title:'Object Literals as rows',
    hasChild:true,
    win:'W.TableObjectLiteral'
  }));
  tableData.push(Ti.UI.createTableViewRow({
    title:'Table Sections',
    hasChild:true,
    win:'W.TableSections'
  }));
  
  // Scroll Views.
  tableData.push(Ti.UI.createTableViewRow({
    header:'Scroll Views',
    title:'Scroll View',
    hasChild:true,
    win:'W.ScrollView'
  }));
  tableData.push(Ti.UI.createTableViewRow({
    title:'Scrollable View',
    hasChild:true,
    win:'W.ScrollableView'
  }));
  
  // Gestures.
  tableData.push(Ti.UI.createTableViewRow({
    header:'Gestures',
    title:'Gestures',
    hasChild:true,
    win:'W.Gestures'
  }));
  
  // Animation.
  tableData.push(Ti.UI.createTableViewRow({
    header:'Animations',
    title:'Animations',
    hasChild:true,
    win:'W.Animations'
  }));
  
  // Basic Web Views.
  tableData.push(Ti.UI.createTableViewRow({
    header:'Web Views',
    title:'Basic Web View',
    hasChild:true,
    win:'W.WebviewBasic'
  }));
  
  // Advanced Web Views.
  tableData.push(Ti.UI.createTableViewRow({
    title:'Advanced Web View',
    hasChild:true,
    win:'W.WebviewAdvanced'
  }));  

  // Create a table for the nav group window.
  // Add table rows to table.
  var table = Titanium.UI.createTableView({
      data:tableData,
      style:Ti.UI.iPhone.TableViewStyle.GROUPED
  });

  // Create the window for the navigation group.
  var winNavGroup = UI.Win({navBarHidden:true,backgroundColor:'#CCCCCC',});
  
  // Add the table data to the nav group window.
  winNavGroup.add(table);

  // Create a Navigation Group and set winNavGroup as the first window to show up.
  var navGroup = Ti.UI.iPhone.createNavigationGroup({
    window: winNavGroup,
  });
  // Create the root window for this section.
  var win = Ti.UI.createWindow({title:'UI Deep Dive'});
  
  // Add the navGroup to the root window.
  win.add(navGroup);
  
  // Scroll to a specific row.
  table.scrollToIndex(tableData.length - 4);
  
  /**
   *  Event Listeners
   */
  table.addEventListener('click', function(e) {
    Ti.API.log('Window associated with this row: ' + (e.rowData.win || 'none'));
    // If this row has a window associated with it, open it.
    if (e.rowData.win !== undefined) {
      // I know eval is evil, but I don't know how to do this otherwise.
      var win = eval(e.rowData.win + '()');
      
      // Open this window in the current tab.
      // currentTab is a tab object and gets set in an 
      // event handler in tabgroup.js.
      TabGroup.currentTab.open(win);
      
      // Alternative, to open a window in a specific
      // tab, use the tab index of the global Tab object.
      // Tab[1].open(win);
    }
  });
  
  return win;
}
