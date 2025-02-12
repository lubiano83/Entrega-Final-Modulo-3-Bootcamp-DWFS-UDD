/* Componentes */

const content = {};

content.logo = `<a href="https://lubiano83.github.io/Entrega-Final-Modulo-3-Bootcamp-DWFS-UDD/">
                    <h1 class="text-white font-bold italic text-2xl flex justify-center items-center gap-1 cursor-pointer hover:text-gray-700">
                        <p>Enjoy</p>
                        <p>The</p>
                        <p class="pl-1">App</p>
                    </h1>
                </a>`;

content.links = `<div class="flex justify-center items-center gap-2">
                    <a href="https://api.whatsapp.com/send?phone=56988310042" target="_blank" alt="whatsapp" rel="noopener noreferrer">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fwhatsapp-svgrepo-com.svg?alt=media&token=c2666812-926b-47df-b181-359949d8fefd" alt="linkedin enjoy the app" class="h-7 w-7 cursor-pointer hover:scale-110">
                    </a>
                    <a href="https://github.com/lubiano83" target="_blank">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fgithub-svgrepo-com.svg?alt=media&token=9e2599df-42e4-49e8-a6ed-62c9271a8f86" alt="github enjoy the app" class="h-7 w-7 cursor-pointer hover:scale-110">
                    </a>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-pablo-lubiano-08559b9a/" target="_blank">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Flinkedin-logo-svgrepo-com.svg?alt=media&token=5a103763-09de-4085-b0ba-1fa5dcf109aa" alt="linkedin enjoy the app" class="h-7 w-7 cursor-pointer hover:scale-110">
                    </a>
                 </div>`;

content.menu = `<div class="w-full flex justify-evenly items-center gap-2 flex-wrap bg-blue-300 text-white py-1 px-2">
                    <a href="#inicio" class="hover:text-gray-700">Inicio</a>
                    <a href="#nosotros" class="hover:text-gray-700">Nosotros</a>
                    <a href="#productos" class="hover:text-gray-700">Productos</a>
                    <a href="#mvp" class="hover:text-gray-700">MvP</a>
                </div>`;

content.inicio = `<section class="flex flex-col justify-center items-center gap-4 max-w-5xl w-3/4 min-w-72 min-h-screen scroll-mt-4 xl:scroll-mt-2" id="inicio">
                    <strong class="text-2xl text-blue-500">¡Bienvenidos a Enjoy The App!</strong>
                    <h3>En Enjoy The App nos especializamos en desarrollo de software a medida, creando soluciones innovadoras que resuelven problemas reales y simplifican los procesos de nuestros clientes. Nuestra misión es transformar ideas en aplicaciones eficientes y funcionales, potenciando negocios de todos los tamaños con tecnología de vanguardia.</h3>
                </section>`;

content.nosotros = `<section class="w-screen flex justify-center items-center gap-8 flex-wrap px-8 min-h-screen scroll-mt-28 xl:scroll-mt-2" id="nosotros">
                        <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fenjoy-the-app.webp?alt=media&token=ce0e204e-0c22-4e27-bb7e-f0e0e54b1858" alt="imagen enjoy the app" class="max-w-xl w-3/4 min-w-72">
                        <article class="flex flex-col gap-4 sm:max-w-xl md:max-w-xl lg:max-w-xl custom:max-w-md xl:max-w-md 2xl:max-w-md w-3/4 min-w-72">
                            <strong class="text-xl text-blue-500">Nuestra visión:</strong>
                            <h3>En Enjoy The App, creemos que la tecnología debe estar al servicio de las personas y los negocios, ofreciendo herramientas prácticas que hagan la vida más sencilla y eficiente. Nuestro objetivo es convertirnos en un socio estratégico para nuestros clientes, ayudándolos a alcanzar sus metas mediante soluciones tecnológicas que marquen la diferencia.</h3>
                            <strong class="text-xl text-blue-500">Hacia dónde apuntamos:</strong>
                            <h3>Nuestra visión a largo plazo es convertirnos en líderes del desarrollo de software en sectores clave, como la industria automotriz, la gestión empresarial y la optimización de procesos en pequeñas y medianas empresas. Queremos ser reconocidos por ofrecer soluciones tecnológicas que no solo funcionan, sino que también transforman la manera en que operan nuestros clientes.</h3>
                        </article>
                    </section>`;

content.productos = `<section class="w-screen flex flex-col justify-center items-center gap-4 min-h-screen scroll-mt-24" id="productos">
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
            </section>`;

content.fin = `<section class="w-screen flex justify-center items-center gap-8 flex-wrap pb-8 px-8 min-h-screen scroll-mt-28 xl:scroll-mt-6" id="mvp">
                    <img src="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/image-v2%2Fmvp.webp?alt=media&token=7d517e3f-5458-42ce-b5c3-15ca6dd08d76" alt="MVP enjoy the app" class="max-w-xl w-3/4 min-w-72">
                    <article class="flex flex-col gap-4 sm:max-w-xl md:max-w-xl lg:max-w-sm xl:max-w-sm w-3/4 min-w-72">
                        <strong class="text-xl text-blue-500">Haz crecer tu negocio con nosotros:</strong>
                        <h3>En Enjoy The App, sabemos que cada negocio tiene desafíos únicos y oportunidades que pueden marcar la diferencia entre quedarse atrás o liderar en su industria. Por eso, nos especializamos en soluciones tecnológicas innovadoras y personalizadas que no solo abordan tus necesidades actuales, sino que también te preparan para el futuro. Si tienes una idea revolucionaria o un problema que te impide avanzar, estamos aquí para escucharte, entender tus objetivos y trabajar juntos en una solución que transforme tu visión en realidad. Desde aplicaciones móviles hasta plataformas web completas, nuestro equipo combina experiencia técnica, creatividad y un enfoque centrado en el cliente para ofrecer resultados que importan.</h3>
                    </article>
                </section>`;

content.contacto = `<div class="flex flex-col justify-center items-start">
                        <strong>Contacto:</strong>
                        <a href="https://www.google.com/maps?q=-32.93157378484028, -71.54853937985632" class="hover:text-gray-700" target="_blank">
                            <h3>Calle del Sol 85, Concon</h3>
                        </a>
                        <a href="mailto:lubiano83@gmail.com" class="hover:text-gray-700">
                            <h3>lubiano83@gmail.com</h3>
                        </a>
                        <a href="tel:+56988310042" class="hover:text-gray-700">
                            <h3>+56988310042</h3>
                        </a>
                    </div>`;

content.equipo = `<div class="flex flex-col">
                    <strong>Nuestro Equipo:</strong>
                    <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-3e2be.appspot.com/o/Jose%CC%81%20Pablo%20Lubiano%202.pdf?alt=media&token=faec1926-76bb-4369-aff6-933b12d17711" target="_blank" class="hover:text-gray-700 cursor-pointer">
                        José Pablo Lubiano - FS
                    </a>
                </div>`;
              
// Emulate a mini template engine:
document.addEventListener('DOMContentLoaded', () => {
  let html = document.body.innerHTML;
  Object.entries(content).forEach(([tag, data]) => {
    html = html.replaceAll(`{${tag}}`, data);
  });
  document.body.innerHTML = html;
}); // Esto lo vi en una prueba tecnica por si acaso, simplemente lo modifique como se me ocurrio utilizarlo a mi jaja
