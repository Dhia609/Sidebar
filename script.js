
      let isSidebarOpen = false;

document.querySelector('.sidebar-toggle').addEventListener('click', () => {
  if (isSidebarOpen) {
    document.body.classList.remove('sidebar-revealed');
  } else {
    document.body.classList.add('sidebar-revealed');
  }
  isSidebarOpen = !isSidebarOpen;
});

var sidebar = document.querySelector('.sidebar-container');
var sidebarToggle = document.querySelector('.sidebar-toggle');

sidebarToggle.addEventListener('click', function () {
  sidebar.classList.toggle('visible');
});


const sidebarList = document.querySelector('.sidebar-list');

sidebarList.addEventListener('click', function(event) {
    let target = event.target;

    while (target !== this) {
        if (target.matches('.sidebar-list-item')) {
            const sublist = target.querySelector('.sublist');

            if (sublist) {
                sublist.classList.toggle('visible');
            }

            break;
        }

        target = target.parentElement;
    }
});

