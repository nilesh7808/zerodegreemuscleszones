import React from 'react';
import '../css/map.css'

const Map = () => {
    return (
        <div className='container mb-4' stytle={{height :'5em'}}>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe class="gmap_iframe" width="100%" frameborder="0" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Zero degree Muscles Zone&amp;t=&amp;z=19&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <a href="https://piratebay-proxys.com/">More Directions for other countries</a>
                </div>
            </div>
        </div>
    )
}

export default Map