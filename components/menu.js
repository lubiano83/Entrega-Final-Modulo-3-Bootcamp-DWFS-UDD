export default function menu() {
    return (
        `
            <div class="w-full flex justify-evenly items-center gap-2 flex-wrap bg-orange-300 text-white py-1 px-2 xl:flex-col xl:justify-evenly xl:items-center xl:w-56 xl:h-screen xl:bg-blue-500">
                <a href="#inicio" class="hover:text-gray-700">Inicio</a>
                <a href="#nosotros" class="hover:text-gray-700">Nosotros</a>
                <a href="#productos" class="hover:text-gray-700">Productos</a>
                <a href="#mvp" class="hover:text-gray-700">MvP</a>
            </div>
        `
    )
};