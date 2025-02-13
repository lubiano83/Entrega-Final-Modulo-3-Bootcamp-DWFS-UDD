export default function productos() {
    return (
        `
            <section class="w-screen flex flex-col justify-center items-center gap-4 min-h-screen scroll-mt-24" id="productos">
                <strong class="text-2xl text-blue-500">Nuestros Productos:</strong>
                <div class="w-full flex justify-center items-start gap-6 flex-wrap">
                    <!-- Mobile -->
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fdesarrollo-mobile.webp?alt=media&token=3bc37a31-78c4-4765-94a7-171ee90f7c3c" alt="desarrollo mobile enjoy the app" class="w-72 aspect-square">
                        <strong class="text-blue-500 text-lg">Desarrollo de Aplicaciones Móviles:</strong>
                        <h3>Creación de apps personalizadas para Android y iOS. Un mockup de una pantalla de smartphone con una app en uso.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-300 text-white flex items-center justify-center p-2 text-left">Desarrollamos aplicaciones móviles con React Native, utilizando Tailwind para estilos. Para la base de datos, trabajamos con MongoDB o MySQL, y el backend se desarrolla con Express.js, integrando Firebase para almacenamiento o autenticación, etc.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Frestorant.webp?alt=media&token=cf480c4c-2f4e-4d04-afd2-7c000c156163" alt="restorant enjoy the app" class="w-72 aspect-square">
                        <strong class="text-blue-500 text-lg">Soluciones para Restaurantes y Pubs:</strong>
                        <h3>Apps para que los clientes ordenen y paguen desde su celular mediante códigos QR. Una mesa de restaurante con un QR en pantalla.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-300 text-white flex items-center justify-center p-2 text-left">Desarrollamos aplicaciones para restaurantes y pubs con React Native para la funcionalidad de los clientes y Next.js para la administración. Utilizamos Tailwind para los estilos, integrando Firebase para autenticación o almacenamiento, etc. El backend se desarrolla con Express.js y trabajamos con bases de datos MongoDB o MySQL según los requerimientos del negocio.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fstock.webp?alt=media&token=a042a1f9-26a7-4c7f-a75d-a4e14c6a6461" alt="restorant enjoy the app" class="w-72 aspect-square">
                        <strong class="text-blue-500 text-lg">Aplicaciones de Gestión de Bodegas:</strong>
                        <h3>Apps que optimizan la gestión de inventarios con escaneo de códigos. Un almacén con un lector de códigos de barras en tu dispositivo mobil.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-300 text-white flex items-center justify-center p-2 text-left">Desarrollamos aplicaciones de gestión de bodegas con React Native, utilizando Tailwind para los estilos. La aplicación se integra con Firebase para almacenamiento o autenticación, etc. El backend se desarrolla con Express.js y bases de datos en MongoDB o MySQL para gestionar el inventario de manera eficiente.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Freservas.webp?alt=media&token=f53052b6-0e79-4c0e-a465-7d1a8c93615b" alt="restorant enjoy the app" class="w-72 aspect-square">
                        <strong class="text-blue-500 text-lg">Sistemas para Reservas y Turnos:</strong>
                        <h3>Herramientas para gestionar reservas en tiempo real para empresas como gimnasios, spas o clínicas. Un calendario digital o un sistema de reservas.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-300 text-white flex items-center justify-center p-2 text-left">Desarrollamos sistemas de reservas y gestión de turnos con React Native, utilizando Tailwind para los estilos. La aplicación se integra con Firebase para autenticación o almacenamiento de datos, etc, con un backend en Express.js y bases de datos en MongoDB o MySQL según los requerimientos del negocio.</h3>
                    </article>
                    <!-- Web -->
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fdesarrollo-web.webp?alt=media&token=17a39d88-0ada-4304-9d73-d57f44bb8991" alt="desarrollo web enjoy the app" class="w-72 aspect-square">
                        <strong class="text-blue-500 text-lg">Plataformas Web Personalizadas:</strong>
                        <h3>Desarrollo de plataformas web dinámicas y responsivas para negocios. Un monitor mostrando un dashboard empresarial.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-300 text-white flex items-center justify-center p-2 text-left">Desarrollamos plataformas web personalizadas con React.js, utilizando Tailwind para los estilos. Integramos Firebase para almacenamiento y otras funcionalidades si es necesario. Además, podemos desarrollar un backend con Express.js y utilizar bases de datos en MongoDB o MySQL según los requerimientos del proyecto.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fgestion-empresarial.webp?alt=media&token=6cf3f5a8-35a7-4e87-b106-6a913fe1a20b" alt="restorant enjoy the app" class="w-72 aspect-square">
                        <strong class="text-blue-500 text-lg">Software de Gestión Empresarial:</strong>
                        <h3>Sistemas de gestión de inventarios, ventas y finanzas. Un software con gráficos y reportes.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-300 text-white flex items-center justify-center p-2 text-left"> Desarrollamos software de gestión empresarial con Next.js, utilizando Tailwind para los estilos. Integramos Firebase como almacenamiento y el backend está construido con Express.js, utilizando bases de datos MySQL para una gestión eficiente y segura de la información empresarial.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fecommerce.webp?alt=media&token=dff2fce0-dbdc-452b-bbf3-ef8a7dfe830c" alt="restorant enjoy the app" class="w-72 aspect-square">
                        <strong class="text-blue-500 text-lg">Soluciones de E-commerce:</strong>
                        <h3>Creación de tiendas online completas con sistemas de gestión de pedidos y pagos. Un carrito de compras digital o una tienda virtual.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-300 text-white flex items-center justify-center p-2 text-left">Desarrollamos e-commerce con Next.js, priorizando SEO y seguridad. Utilizamos Tailwind para los estilos e integramos Firebase para almacenamiento. El backend lo desarrollamos con Express.js y la base de datos con MongoDB, garantizando escalabilidad y eficiencia en la gestión de pedidos y pagos.</h3>
                    </article>
                    <article class="group relative flex flex-col p-2 gap-4 w-72 hover:shadow-md hover:shadow-gray-700 aspect-[1/1.8] overflow-hidden">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fautomatizacion.webp?alt=media&token=ba0dc44b-ac94-42be-8112-8fbc732f6838" alt="restorant enjoy the app" class="w-72 aspect-square">
                        <strong class="text-blue-500 text-lg">Automatización de Procesos:</strong>
                        <h3>Herramientas para optimizar procesos repetitivos y ahorrar tiempo. Iconos de engranajes o un flujo de trabajo digital.</h3>
                        <h3 class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-300 text-white flex items-center justify-center p-2 text-left">Desarrollamos soluciones de automatización de procesos con Next.js y React Native, integrando Firebase para almacenamiento y notificaciones. Utilizamos Tailwind para una interfaz moderna y eficiente, mientras que el backend en Express.js se encarga del procesamiento y lógica de negocio. Implementamos bases de datos en MongoDB o MySQL según las necesidades del proyecto, optimizando flujos de trabajo, reduciendo tareas repetitivas y mejorando la productividad empresarial.</h3>
                    </article>
                </div>
            </section>
        `
    )
};