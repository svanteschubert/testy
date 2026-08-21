function activateCurrentTab(tabName) {
  var p = window.parent;
  while (p)
  {
    if (p.frames['navigationbar']) {
      p.frames['navigationbar'].activateTab(tabName);
      break;
    }
    if (p == p.parent)
      break;
      
    p = p.parent;
  }
}

function activateTab(reportName) 
{
	var tabs = document.getElementsByClassName('tab');
	var index;
	for (index = 0; index < tabs.length; ++index) {
		var d = tabs[index];
		if (d.id == ('report_' + reportName)) {
			d.className += ' disableClick';
			var active = d.getElementsByTagName("img")[0].getAttribute('ACTIVE-SRC');
			d.getElementsByTagName("img")[0].src = active;
		} else {
			d.className = 'tab';
			var inactive = d.getElementsByTagName("img")[0].getAttribute('INACTIVE-SRC');
			d.getElementsByTagName("img")[0].src = inactive;
		}
		
	}
}

function SetDefaultNavigationContent()
{
	var tabs = window.frames['navigationbar'].document.getElementsByClassName("tab");
	var ref = tabs[0].getAttribute("href");
	
	document.getElementsByName("navcontent")[0].src = ref;
}