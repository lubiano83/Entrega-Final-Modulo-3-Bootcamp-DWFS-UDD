export default function menu() {
    return (
        `
            <div class="w-full flex justify-evenly items-center gap-2 flex-wrap bg-blue-300 text-white py-1 px-2 xl:flex-col xl:justify-evenly xl:items-center xl:w-56 xl:h-screen xl:bg-blue-500">
                <a href="#inicio" class="hover:text-gray-700"><strong>Inicio</strong></a>
                <a href="#nosotros" class="hover:text-gray-700"><strong>Nosotros</strong></a>
                <a href="#productos" class="hover:text-gray-700"><strong>Productos</strong></a>
                <a href="#mvp" class="hover:text-gray-700"><strong>MvP</strong></a>
            </div>
        `
    )
};