import React, { useState } from "react";
import Swal from "sweetalert2";
import NavBar from "../components/NavBar";

export default function Example() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [quantity, setQuantity] = useState("");
  const [unit, setUnit] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = async (event) => {
    const { value } = event.target;
    setSearchTerm(value);

    // Realizar la consulta a la API
    try {
      const response = await fetch(`http://localhost:3000/products?name=${value}`);
      const data = await response.json();
      console.log(data);
      setSuggestions(data.data); // Suponiendo que la API devuelve resultados en un formato específico
    } catch (error) {
      console.error("Error al obtener sugerencias de productos:", error);
    }
  };

  const handleProductSelect = (selectedProduct) => {
    // Limpiar las sugerencias después de seleccionar un producto
    setSuggestions([]);
    setSearchTerm(selectedProduct);
  };

  const handleAddToTable = () => {
    // Verificar si la cantidad, unidad de medida y producto están seleccionados
    if (quantity && unit && searchTerm) {
      const newData = {
        quantity: quantity,
        unit: unit,
        product: searchTerm,
        description: description,
      };
      setTableData([...tableData, newData]);

      // Limpiar los campos después de agregar a la tabla
      setSearchTerm("");
      setQuantity("");
      setUnit("");
      setDescription("");

      // Mostrar SweetAlert indicando que el producto ha sido agregado
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Se agrego el producto a la tabla",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire("Faltan completar campos", "Por favor selecciona cantidad, unidad de medida y producto.", "error");
    }
  };

  const handleCancel = () => {
    setSearchTerm(""); // Limpiar el campo de búsqueda
    setQuantity(""); // Limpiar el campo de cantidad
    setUnit(""); // Limpiar el campo de unidad
    setDescription(""); // Limpiar el campo de descripción
    setTableData([]); // Limpiar la tabla
  };

  const handleSave = async () => {
    // Aquí puedes agregar la lógica para enviar los datos al backend
    console.log("Guardar");
  };
  const handleDelete = (index) => {
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      const updatedTableData = tableData.filter((_, i) => i !== index);
      setTableData(updatedTableData);
    }
  };

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
                    <option>Seleccionar</option>
                    <option>No Pagado</option>
                    <option>Pagado</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="tipo-entrega" className="block text-sm font-medium leading-6 text-gray-900">
                  Método de Entrega
                </label>
                <div className="mt-2">
                  <select
                    id="tipo-entrega"
                    name="tipo-entrega"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Seleccionar</option>
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
                    <option>Seleccionar</option>
                    <option>Enviar por la Mañana</option>
                    <option>Enviar por la Tarde</option>
                    <option>Ninguna</option>
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
              <div className="sm:col-span-2">
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
              <div className="sm:col-span-1 sm:col-start-2">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Cantidad
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="0"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Unidad de Medida
                </label>
                <div className="mt-2">
                  <select
                    id="tipo-entrega"
                    name="tipo-entrega"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                    value={unit}
                    onChange={(e) => setUnit(e.target.value)}
                  >
                    <option>Seleccionar</option>
                    <option>KG</option>
                    <option>Unidades</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Producto
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder="Buscar Producto"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <ul>
                    {suggestions.map((product) => (
                      <li key={product.id} onClick={() => handleProductSelect(product.name)}>
                        {product.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                  Descripción
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="detalle del pedido"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div className=" mt-6 flex items-center justify-center gap-x-6">
              <button
                type="button"
                onClick={handleAddToTable}
                className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                + Agregar
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-[calc(25% * 4)]">
            <table className="w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[25%]"
                  >
                    Cantidad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[25%]"
                  >
                    Unidad de medida
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[25%]"
                  >
                    Producto
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[25%]"
                  >
                    Descripción
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  ></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {tableData.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap w-[25%]">{item.quantity}</td>
                    <td className="px-6 py-4 whitespace-nowrap w-[25%]">{item.unit}</td>
                    <td className="px-6 py-4 whitespace-nowrap w-[25%]">{item.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap w-[25%]">{item.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap w-[25%]">
                      {/* <button className="mr-2" onClick={() => handleEdit(index)}>
                        Editar
                      </button> */}
                      <button onClick={() => handleDelete(index)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center gap-x-6">
          <button
            type="button"
            className="text-lg font-semibold leading-6 text-gray-900 py-2 px-4"
            onClick={handleCancel}
          >
            Cancelar
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Guardar
          </button>
        </div>
      </form>
    </>
  );
}
