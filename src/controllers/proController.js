import httpClient from "./httpClient";

const END_POINT = "/api/propiedades";

const listarPropiedades = () => httpClient.get(END_POINT);

const listaPropiedadTipo = (code) => httpClient.get(END_POINT + "/" + code); // /api/products/1001

const crearPropiedad = (product) => httpClient.post(END_POINT, product);

export {
    listarPropiedades,
    listaPropiedadTipo,
    crearPropiedad
}