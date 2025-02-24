export default function productos() {

    function updateImages() {
        document.querySelectorAll("[data-img]").forEach((imgElement) => {
            const imageType = imgElement.getAttribute("data-img");
            const isXL = window.innerWidth >= 1280; // Detecta si la pantalla es XL

            // Lista de imágenes con su versión para XL y móvil
            const images = {
                "desarrollo-mobile": {
                    xl: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fdesarrollo-mobile.webp?alt=media",
                    mobile: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fmobil-orange.webp?alt=media&token=eb019ac2-9ad7-4a4a-bba6-025e3e928e2a"
                },
                "restorant": {
                    xl: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Frestorant.webp?alt=media",
                    mobile: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Frestorant-orange.webp?alt=media&token=8b9981d1-1f40-43fb-b899-3471a624fbed"
                },
                "stock": {
                    xl: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fstock.webp?alt=media",
                    mobile: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fstock-orange.webp?alt=media&token=d3fad0cd-3cf6-4ddd-8014-7f32469fa578"
                },
                "reservas": {
                    xl: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Freservas.webp?alt=media",
                    mobile: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fcalendario-orange.webp?alt=media&token=d8ba21f3-ab02-411b-957d-e8dfb2fcb9c3"
                },
                "desarrollo-web": {
                    xl: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fdesarrollo-web.webp?alt=media",
                    mobile: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fweb-orange.webp?alt=media&token=14ccf6fc-cbf0-4c46-97fb-7131b6f76fad"
                },
                "gestion-empresarial": {
                    xl: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fgestion-empresarial.webp?alt=media",
                    mobile: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fempresa-orange.webp?alt=media&token=c976801e-9dd9-466d-83c6-ddd03682f7dd"
                },
                "ecommerce": {
                    xl: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fecommerce.webp?alt=media",
                    mobile: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fecommerce-orange.webp?alt=media&token=e5103073-34c3-4df1-96e7-fe51c1c1d1b1"
                },
                "automatizacion": {
                    xl: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fautomatizacion.webp?alt=media",
                    mobile: "https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fautomatizacion-orange.webp?alt=media&token=36601f05-5342-4c29-94b5-7ef90f20c92e"
                }
            };

            // Cambiar la imagen según el tamaño de la pantalla
            imgElement.src = isXL ? images[imageType].xl : images[imageType].mobile;
        });
    }

    // Ejecutar la actualización de imágenes al cargar la página y cuando la ventana se redimensione
    window.addEventListener("resize", updateImages);
    updateImages(); // Ejecutar al inicio

    return (
        `
            <section class="w-screen flex flex-col justify-center items-center gap-4 min-h-screen scroll-mt-24 xl:scroll-mt-0 xl:pl-64" id="productos">
                <strong class="text-2xl text-orange-500 xl:text-blue-500">Nuestros Productos:</strong>
                <div class="w-full flex justify-center items-start gap-6 flex-wrap">
                    <!-- Mobile -->
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img data-img="desarrollo-mobile" src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fdesarrollo-mobile.webp?alt=media&token=3bc37a31-78c4-4765-94a7-171ee90f7c3c" alt="Desarrollo de Aplicaciones Móviles" class="w-72 aspect-square">
                        <strong class="text-orange-500 xl:text-blue-500 text-lg">Desarrollo de Aplicaciones Móviles:</strong>
                        <h3>Creación de apps personalizadas para Android y iOS. Un mockup de una pantalla de smartphone con una app en uso.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-300 xl:bg-blue-300 text-white flex items-start justify-center p-2 text-left overflow-auto max-h-full">Desarrollamos aplicaciones móviles con React Native, garantizando experiencias fluidas y eficientes en dispositivos iOS y Android. Para los estilos, utilizamos Tailwind CSS, lo que nos permite crear interfaces modernas, reutilizables y fáciles de mantener. En cuanto a la base de datos, trabajamos con MongoDB o MySQL, dependiendo de los requerimientos del proyecto. Optamos por MongoDB cuando se necesita flexibilidad en la estructura de datos, mientras que MySQL es ideal para proyectos con relaciones bien definidas. El backend lo desarrollamos con Express.js, asegurando APIs rápidas y escalables. También integramos Firebase como solución de almacenamiento de archivos o, en algunos casos, como backend, dependiendo de las necesidades del proyecto.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img data-img="restorant" src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Frestorant.webp?alt=media&token=cf480c4c-2f4e-4d04-afd2-7c000c156163" alt="Soluciones para Restaurantes y Pubs" class="w-72 aspect-square">
                        <strong class="text-orange-500 xl:text-blue-500 text-lg">Soluciones para Restaurantes y Pubs:</strong>
                        <h3>Apps para que los clientes ordenen y paguen desde su celular mediante códigos QR. Una mesa de restaurante con un QR en pantalla.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-300 xl:bg-blue-300 text-white flex items-start justify-center p-2 text-left overflow-auto max-h-full">Desarrollamos aplicaciones para restaurantes y pubs, combinando React Native para la experiencia del cliente y Next.js para la administración. Esto nos permite ofrecer interfaces fluidas y eficientes tanto en dispositivos móviles como en plataformas web. Para los estilos, utilizamos Tailwind CSS, asegurando un diseño moderno y adaptable. En cuanto al almacenamiento, integramos Firebase para gestionar imágenes y otros archivos de manera eficiente. El backend lo desarrollamos con Express.js, garantizando APIs rápidas y escalables. Además, trabajamos con MongoDB o MySQL, eligiendo la base de datos más adecuada según las necesidades del negocio.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img data-img="stock" src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fstock.webp?alt=media&token=a042a1f9-26a7-4c7f-a75d-a4e14c6a6461" alt="Aplicaciones de Gestión de Bodegas" class="w-72 aspect-square">
                        <strong class="text-orange-500 xl:text-blue-500 text-lg">Aplicaciones de Gestión de Bodegas:</strong>
                        <h3>Apps que optimizan la gestión de inventarios con escaneo de códigos. Un almacén con un lector de códigos de barras en tu dispositivo mobil.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-300 xl:bg-blue-300 text-white flex items-start justify-center p-2 text-left overflow-auto max-h-full">Desarrollamos aplicaciones de gestión de bodegas con React Native, permitiendo un control eficiente del inventario desde dispositivos móviles. Utilizamos Tailwind CSS para los estilos, asegurando interfaces intuitivas y adaptables a distintos tamaños de pantalla. La aplicación se integra con Firebase para el almacenamiento de archivos, facilitando el manejo de imágenes y documentos relacionados con el inventario. El backend lo desarrollamos con Express.js, proporcionando APIs rápidas y escalables. Además, trabajamos con MongoDB o MySQL, eligiendo la base de datos más adecuada según las necesidades del sistema de gestión.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img data-img="reservas" src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Freservas.webp?alt=media&token=f53052b6-0e79-4c0e-a465-7d1a8c93615b" alt="Sistemas para Reservas y Turnos" class="w-72 aspect-square">
                        <strong class="text-orange-500 xl:text-blue-500 text-lg">Sistemas para Reservas y Turnos:</strong>
                        <h3>Herramientas para gestionar reservas en tiempo real para empresas como gimnasios, spas o clínicas. Un calendario digital o un sistema de reservas.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-300 xl:bg-blue-300 text-white flex items-start justify-center p-2 text-left overflow-auto max-h-full">Desarrollamos sistemas de reservas y gestión de turnos con React Native, ofreciendo una experiencia fluida e intuitiva para los usuarios. Utilizamos Tailwind CSS para los estilos, asegurando interfaces modernas y adaptables a cualquier dispositivo. La aplicación se integra con Firebase para el almacenamiento de datos y archivos, facilitando una gestión eficiente de la información. El backend está desarrollado con Express.js, garantizando una API rápida y escalable. Además, trabajamos con MongoDB o MySQL, seleccionando la base de datos más adecuada según los requerimientos del negocio.</h3>
                    </article>
                    <!-- Web -->
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img data-img="desarrollo-web" src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fdesarrollo-web.webp?alt=media&token=17a39d88-0ada-4304-9d73-d57f44bb8991" alt="Plataformas Web Personalizadas" class="w-72 aspect-square">
                        <strong class="text-orange-500 xl:text-blue-500 text-lg">Plataformas Web Personalizadas:</strong>
                        <h3>Desarrollo de plataformas web dinámicas y responsivas para negocios. Un monitor mostrando un dashboard empresarial.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-300 xl:bg-blue-300 text-white flex items-start justify-center p-2 text-left overflow-auto max-h-full">Desarrollamos plataformas web personalizadas con React.js, creando experiencias dinámicas y eficientes para los usuarios. Utilizamos Tailwind CSS para los estilos, asegurando un diseño moderno, responsivo y fácil de mantener. Integramos Firebase para almacenamiento y otras funcionalidades cuando es necesario, proporcionando soluciones escalables y seguras. También desarrollamos un backend con Express.js, garantizando una API rápida y flexible. Para la base de datos, trabajamos con MongoDB o MySQL, eligiendo la opción más adecuada según los requerimientos del proyecto.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img data-img="gestion-empresarial" src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fgestion-empresarial.webp?alt=media&token=6cf3f5a8-35a7-4e87-b106-6a913fe1a20b" alt="Software de Gestión Empresarial" class="w-72 aspect-square">
                        <strong class="text-orange-500 xl:text-blue-500 text-lg">Software de Gestión Empresarial:</strong>
                        <h3>Sistemas de gestión de inventarios, ventas y finanzas. Un software con gráficos y reportes.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-300 xl:bg-blue-300 text-white flex items-start justify-center p-2 text-left overflow-auto max-h-full">Desarrollamos software de gestión empresarial con Next.js, ofreciendo soluciones optimizadas para la administración y el control de procesos internos. Utilizamos Tailwind CSS para los estilos, asegurando una interfaz moderna, responsiva y fácil de usar. Integramos Firebase como solución de almacenamiento, permitiendo una gestión eficiente de archivos y datos en la nube. El backend está desarrollado con Express.js, garantizando una API robusta y escalable. Además, trabajamos con MySQL para gestionar la información empresarial de manera segura y estructurada.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img data-img="ecommerce" src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fecommerce.webp?alt=media&token=dff2fce0-dbdc-452b-bbf3-ef8a7dfe830c" alt="Soluciones de E-commerce" class="w-72 aspect-square">
                        <strong class="text-orange-500 xl:text-blue-500 text-lg">Soluciones de E-commerce:</strong>
                        <h3>Creación de tiendas online completas con sistemas de gestión de pedidos y pagos. Un carrito de compras digital o una tienda virtual.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-300 xl:bg-blue-300 text-white flex items-start justify-center p-2 text-left overflow-auto max-h-full">Desarrollamos e-commerce con Next.js, optimizando el rendimiento, la seguridad y el SEO para mejorar la visibilidad en buscadores. Utilizamos Tailwind CSS para los estilos, asegurando un diseño moderno y responsivo. Integramos Firebase para el almacenamiento de imágenes y otros archivos, facilitando una gestión eficiente del contenido. El backend lo desarrollamos con Express.js, proporcionando una API rápida y segura. Además, utilizamos MongoDB como base de datos, garantizando escalabilidad y eficiencia en la gestión de pedidos, inventario y pagos.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img data-img="automatizacion" src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fautomatizacion.webp?alt=media&token=ba0dc44b-ac94-42be-8112-8fbc732f6838" alt="Automatización de Procesos" class="w-72 aspect-square">
                        <strong class="text-orange-500 xl:text-blue-500 text-lg">Automatización de Procesos:</strong>
                        <h3>Herramientas para optimizar procesos repetitivos y ahorrar tiempo. Iconos de engranajes o un flujo de trabajo digital.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-orange-300 xl:bg-blue-300 text-white flex items-start justify-center p-2 text-left overflow-auto max-h-full">Desarrollamos soluciones de automatización de procesos con Next.js y React Native, optimizando flujos de trabajo y reduciendo tareas repetitivas para mejorar la productividad empresarial. Utilizamos Tailwind CSS para crear interfaces modernas, intuitivas y eficientes. Integramos Firebase para el almacenamiento de archivos y datos, facilitando la gestión centralizada de la información. El backend está desarrollado con Express.js, encargándose del procesamiento y la lógica de negocio. Además, implementamos bases de datos en MongoDB o MySQL, seleccionando la opción más adecuada según las necesidades del proyecto.</h3>
                    </article>
                </div>
            </section>
        `
    )
};