document.addEventListener("DOMContentLoaded", () => {
    const toggleImageOnHover = (item) => {
        const img = item.querySelector('img');
        const defaultSrc = img.src;
        const activeSrc = defaultSrc.replace('.png', '--active.png')
            .replace('.webp', '--active.webp')
            .replace('.avif', '--active.avif');

    }
})
