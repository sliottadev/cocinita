import Header from '../header/Header'
import ImageBanner from './components/image_banner/ImageBanner'
import './DetailsScreen.css'

function DetailsScreen() {
    return (
        <div className='datails_screen'>
            <div>
                <Header className="datailsScreen__header"/>
            </div>
            <div>
                <ImageBanner/>
            </div>
            <div className='details_container'>
                <h1>Pija al Escabeche</h1>
                <div>                    
                    <h5>Ingredientes</h5>
                    <ul>
                        <li>Pija</li>
                        <li>Vinagre</li>
                        <li>Morron</li>
                        <li>Ajo</li>
                    </ul>
                </div>
                <div>                    
                   <h5>Instrucciones</h5>
                   <p>1. Cortarle la pija a tu viejo cuando duerme</p>
                   <p>2. Poner la pija (de tu viejo) en el freezer a menos que la uses en el momento</p>
                   <p>3. Sacar el Prepucio. NOTA: se puede utilizar para hacer rabas de prepucio</p>
                   <p>4. Cortas la pija en juliana, se agrega el resto de los ingredientes en un frasco</p>
                   <p>5. Luego de marinar por algunos dias ya esta lista para compartir en familia como cuando eras chico</p>
                </div>
            </div>
        </div>
    )
}

export default DetailsScreen
