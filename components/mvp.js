export default function mvp() {

        function updateImage() {
            const imgElement = document.getElementById("mvp-img");
            if (!imgElement) return;
            if (window.innerWidth >= 1280) {
                imgElement.src = "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fmvp.webp?alt=media&token=7d517e3f-5458-42ce-b5c3-15ca6dd08d76";
            } else {
                imgElement.src = "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fmvp-orange.webp?alt=media&token=9f92a2fa-cd34-42ff-8e62-881a0bfcae72";
            }
        }
    
        window.addEventListener("resize", updateImage);
        updateImage();

    return (
        `
            <section class="w-screen flex justify-center items-center gap-8 flex-wrap pb-8 px-8 min-h-screen scroll-mt-28 xl:scroll-mt-6 xl:pl-64" id="mvp">
                <img id="mvp-img" src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fmvp.webp?alt=media&token=7d517e3f-5458-42ce-b5c3-15ca6dd08d76" alt="MVP enjoy the app" class="max-w-xl w-3/4 min-w-72">
                <article class="flex flex-col gap-4 sm:max-w-xl md:max-w-xl lg:max-w-sm xl:max-w-sm w-3/4 min-w-72">
                    <strong class="text-xl text-orange-500 xl:text-blue-500">Haz crecer tu negocio con nosotros:</strong>
                    <h3>En Enjoy The App, sabemos que cada negocio tiene desafíos únicos y oportunidades que pueden marcar la diferencia entre quedarse atrás o liderar en su industria. Por eso, nos especializamos en soluciones tecnológicas innovadoras y personalizadas que no solo abordan tus necesidades actuales, sino que también te preparan para el futuro. Si tienes una idea revolucionaria o un problema que te impide avanzar, estamos aquí para escucharte, entender tus objetivos y trabajar juntos en una solución que transforme tu visión en realidad. Desde aplicaciones móviles hasta plataformas web completas, nuestro equipo combina experiencia técnica, creatividad y un enfoque centrado en el cliente para ofrecer resultados que importan.</h3>
                </article>
            </section>
        `
    )
};