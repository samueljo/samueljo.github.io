function changeProject(e) {
  const data = e.currentTarget.dataset.key;

  const selectedList = $(e.currentTarget);
  let selectedItem;
  items.each(function (idx, el) {
    if (el.dataset.key === data) { selectedItem = $(el); }
  });

  list.removeClass('list-selected');
  items.addClass('hidden');

  selectedList.addClass('list-selected');
  selectedItem.removeClass('hidden');
}

const list = $('.list li');
const items = $('.project-content > li');

list.on('click', changeProject);
