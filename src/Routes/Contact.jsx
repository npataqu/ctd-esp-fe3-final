
import Form from '../Components/Form'
import { useGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
 
  const { theme } = useGlobal();

  const contactStyles = {
    background: theme.background,
    color: theme.font,
  };
  return (
    <div className='div-contactos' style={contactStyles}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact