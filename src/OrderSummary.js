import './OrderSummary.css'
import EncabezadoConSubtítulo from './EncabezadoConSubtítulo'
import ImagenCabecera from './ImagenCabecera';
import PlanProducto from './PlanProducto';
import BotonPrimario from './BotonPrimario';
import BotonSecundario from './BotonSecundario';


function OrderSummary() {
  return (
    < >
      <section className='oderSummary_contenedor'>
        <ImagenCabecera />
        <EncabezadoConSubtítulo />
        <PlanProducto planAnual precio={59.99} />
        <BotonPrimario label='Procee to Payment' />
        <BotonSecundario label='Cancel Order' />
      </section>
    </>
  )
}


export default OrderSummary;
