const hoveredItems = document.querySelectorAll('.hover-items');
const middleItem = document.querySelector('.middle-item');
const peopleNetWrap = document.querySelector('.people-net-wrap');

hoveredItems?.forEach((hoveredItem) => {
    hoveredItem.addEventListener('mouseover', () => {
        middleItem.classList.add('hover')
    })
    hoveredItem.addEventListener('mouseout', () => {
        middleItem.classList.remove('hover')
    })
});

middleItem.addEventListener('mouseover', () => {
    peopleNetWrap.classList.add('active')
})
middleItem.addEventListener('mouseout', () => {
    peopleNetWrap.classList.remove('active')
})