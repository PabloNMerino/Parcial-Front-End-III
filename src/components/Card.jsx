import Styles from './cardStyle.module.css'

const Card = (props) => {
    return (
        <div className={Styles.boxCard}>
            <h2></h2>
            <p> <span className={Styles.text}>Nombre Ingresado:</span> {props.nombre}</p>
            <p><span className={Styles.text}>Banda Ingresada:</span> {props.banda}</p>
        </div>
    )
}

export default Card;