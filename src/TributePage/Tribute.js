import React, { Component } from 'react'


class TributePage extends Component {
    render() {
        return (
            <div className='main'>

                <h1 id="title">Lata Mangeshkar</h1>
                <p>"Queen of Melody", "Nightingale of India", "Voice of the Millennium</p>

                <img id="image" alt="Lata Mangeshkar image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Lata_Mangeshkar_-_still_29065_crop.jpg/330px-Lata_Mangeshkar_-_still_29065_crop.jpg" />
                <h3>Lata Mangeshkar (28 September 1929 – 6 February 2022)</h3>
                <figcaption id="img-caption" >The Padma Bhushan is the third-highest civilian award in
                    the Republic of India, preceded by the Bharat Ratna and the Padma Vibhushan and followed by the Padma Shri. Instituted on 2 January 1954, the award is given for "distinguished service of a high order.</figcaption>

                <h3>Here's a Lata Mangeshkar Biography.</h3>

                <i>Lata Mangeshkar born as Hema Mangeshkar; 28 September 1929 – 6 February 2022) was an Indian playback singer and occasional music composer. She is widely considered to have been one of the greatest and most influential singers in India. Her
                    contribution to the Indian music industry in a career spanning seven decades gained her honorific titles such as the "Queen of Melody", "Nightingale of India", "Voice of the Millennium"</i>



                <h5>
                    If you have time, you should read more about this incredible Singer being on his <a id="tribute-link" target="_blank" href="https://en.wikipedia.org/wiki/Lata_Mangeshkar">Information From Wikipedia </a>.
                </h5>
            </div>
        );

    }
}
export default TributePage;




