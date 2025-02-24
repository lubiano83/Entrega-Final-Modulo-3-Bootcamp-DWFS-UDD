export default function nosotros() {

    function updateImage() {
        const imgElement = document.getElementById("nosotros-img");
        if (!imgElement) return;
        if (window.innerWidth >= 1280) {
            imgElement.src = "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fenjoy-the-app.webp?alt=media&token=ce0e204e-0c22-4e27-bb7e-f0e0e54b1858";
        } else {
            imgElement.src = "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fenjoy-the-app-orange.webp?alt=media&token=7a71068e-e22d-4306-97bb-c9caf6f2a403";
        }
    }

    window.addEventListener("resize", updateImage);
    updateImage();

    return `
        <section class="w-screen flex justify-center items-center gap-8 flex-wrap px-8 min-h-screen scroll-mt-28 xl:scroll-mt-2 xl:pl-64" id="nosotros">
            <img id="nosotros-img" src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fenjoy-the-app.webp?alt=media&token=ce0e204e-0c22-4e27-bb7e-f0e0e54b1858" alt="imagen enjoy the app" class="max-w-xl w-3/4 min-w-72">
            <article class="flex flex-col gap-4 sm:max-w-xl md:max-w-xl lg:max-w-xl custom:max-w-md xl:max-w-md 2xl:max-w-md w-3/4 min-w-72">
                <strong class="text-xl text-orange-500 xl:text-blue-500">Nuestra visión:</strong>
                <h3>En Enjoy The App, creemos que la tecnología debe estar al servicio de las personas y los negocios, ofreciendo herramientas prácticas que hagan la vida más sencilla y eficiente. Nuestro objetivo es convertirnos en un socio estratégico para nuestros clientes, ayudándolos a alcanzar sus metas mediante soluciones tecnológicas que marquen la diferencia.</h3>
                <strong class="text-xl text-orange-500 xl:text-blue-500">Hacia dónde apuntamos:</strong>
                <h3>Nuestra visión a largo plazo es convertirnos en líderes del desarrollo de software en sectores clave, como la industria automotriz, la gestión empresarial y la optimización de procesos en pequeñas y medianas empresas. Queremos ser reconocidos por ofrecer soluciones tecnológicas que no solo funcionan, sino que también transforman la manera en que operan nuestros clientes.</h3>
            </article>
        </section>
    `;
}