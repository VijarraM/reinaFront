import NavBar from "../components/NavBar";

export default function Example() {
  return (
    <>
      <NavBar />
      <form>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-start-2 sm:col-span-2">
                <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nombre
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="Nombre del Cliente"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Teléfono
                </label>
                <div className="mt-2">
                  <input
                    type="tel"
                    name="teléfono"
                    id="teléfono"
                    autoComplete="tel"
                    placeholder="Número Telefónico"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-start-2 sm:col-span-1">
                <label htmlFor="tipo-entrega" className="block text-sm font-medium leading-6 text-gray-900">
                  Estado del Pago
                </label>
                <div className="mt-2">
                  <select
                    id="tipo-entrega"
                    name="tipo-entrega"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>No Pagado</option>
                    <option>Pagado</option>
                  </select>
                </div>
              </div>
              <div className=" sm:col-span-1">
                <label htmlFor="tipo-entrega" className="block text-sm font-medium leading-6 text-gray-900">
                  Método de Entrega
                </label>
                <div className="mt-2">
                  <select
                    id="tipo-entrega"
                    name="tipo-entrega"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Retiro en Local</option>
                    <option>Envió a Domicilio</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="tipo-entrega" className="block text-sm font-medium leading-6 text-gray-900">
                  Preferencia de Horario
                </label>
                <div className="mt-2">
                  <select
                    id="tipo-entrega"
                    name="tipo-entrega"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Ninguna</option>
                    <option>Enviar por la Mañana</option>
                    <option>Enviar por la Tarde</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="tipo-entrega" className="block text-sm font-medium leading-6 text-gray-900">
                  Hora Envío
                </label>
                <div className="mt-2">
                  <input
                    id="tipo-entrega"
                    type="time"
                    name="tipo-entrega"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  ></input>
                </div>
              </div>

              <div className="sm:col-start-2 sm:col-span-2">
                <label htmlFor="tipo-entrega" className="block text-sm font-medium leading-6 text-gray-900">
                  Fecha de Retiro/Envío
                </label>
                <div className="mt-2">
                  <input
                    id="tipo-entrega"
                    type="date"
                    name="tipo-entrega"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  ></input>
                </div>
              </div>
              <div className=" sm:col-span-2">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Dirección
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="Dirección"
                    id="Dirección"
                    autoComplete="street-address"
                    placeholder="Calle y Número"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="sm:col-span-2 sm:col-start-3">
                <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                  Productos
                </label>
                <div className="mt-2">
                  <textarea
                    type="text"
                    name="city"
                    id="city"
                    autoComplete="address-level2"
                    placeholder="Nombre del Producto y Cantidad"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button type="button" className="text-lg font-semibold leading-6 text-gray-900 py-2 px-4">
            Cancelar
          </button>
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Guardar
          </button>
        </div>
      </form>
    </>
  );
}
