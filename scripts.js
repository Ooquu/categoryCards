document.addEventListener("DOMContentLoaded", () => {

    const handlerChangeImageOnHover = () => {
        const listItems = document.querySelectorAll('.categories__list-item');

        listItems.forEach(item => {
            const pictureDefault = item.querySelector('.categories__list-item-link-article-figure-picture');
            const pictureActive = item.querySelector('.categories__list-item-link-article-figure-picture--active');

            item.addEventListener('mouseenter', () => {
                if (pictureDefault) {
                    pictureDefault.classList.add('d-none');
                    pictureDefault.classList.remove('d-flex');
                }
                if (pictureActive) {
                    pictureActive.classList.add('d-flex');
                    pictureActive.classList.remove('d-none');
                }
            });

            item.addEventListener('mouseleave', () => {
                if (pictureDefault) {
                    pictureDefault.classList.remove('d-none');
                    pictureDefault.classList.add('d-flex');
                }
                if (pictureActive) {
                    pictureActive.classList.add('d-none');
                    pictureActive.classList.remove('d-flex');
                }
            });
        });
    };


    const handlerChangeLeafPositionOnItemHover = () => {
        const listItems = document.querySelectorAll('.categories__list-item');
        const pictureLeaf = document.querySelector('.categories-container__picture--leaf');
        const pictureLeafSmall = document.querySelector('.categories-container__image--leaf-small');

        const isMobile = () => {
            return window.innerWidth >= 1024;
        }

        listItems.forEach((item, index) => {
            item.addEventListener('mouseenter', () => {
                if (isMobile()) {
                    const shift = (index % 5 + 1) * 0.5;

                    pictureLeaf.style.left = `calc(-10% + ${shift}%)`;
                    pictureLeafSmall.style.left = `calc(67% + ${shift}%)`;
                }
            });
            item.addEventListener('mouseleave', () => {
                if (isMobile()) {
                    pictureLeaf.style.left = '';
                    pictureLeafSmall.style.left = '67%';
                }
            });
        });
    }



    handlerChangeImageOnHover();
    handlerChangeLeafPositionOnItemHover();
});