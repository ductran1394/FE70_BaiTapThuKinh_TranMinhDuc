import React, { Component } from 'react'
import GlassesList from './GlassesList'


let glassesJson = [
  {
    "id": 1,
    "price": 30,
    "name": "GUCCI G8850U",
    "url": "./img/glassesImage/v1.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 2,
    "price": 50,
    "name": "GUCCI G8759H",
    "url": "./img/glassesImage/v2.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 3,
    "price": 30,
    "name": "DIOR D6700HQ",
    "url": "./img/glassesImage/v3.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 4,
    "price": 70,
    "name": "DIOR D6005U",
    "url": "./img/glassesImage/v4.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 5,
    "price": 40,
    "name": "PRADA P8750",
    "url": "./img/glassesImage/v5.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 6,
    "price": 60,
    "name": "PRADA P9700",
    "url": "./img/glassesImage/v6.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 7,
    "price": 80,
    "name": "FENDI F8750",
    "url": "./img/glassesImage/v7.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 8,
    "price": 100,
    "name": "FENDI F8500",
    "url": "./img/glassesImage/v8.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  },
  {
    "id": 9,
    "price": 60,
    "name": "FENDI F4300",
    "url": "./img/glassesImage/v9.png",
    "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
  }
]

export default class
  extends Component {

  state = {
    glassesDefault: {
      "id": 1,
      "price": 30,
      "name": "GUCCI G8850U",
      "url": "./img/glassesImage/v1.png",
      "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
  }


  changeGlasses = (newGlasses) => {
    this.setState(
      { glassesDefault: newGlasses }
    )
  }

  render() {

    let { id, price, name, url, desc } = this.state.glassesDefault;
    return (
      <div style={{ backgroundImage: "url(./img/glassesImage/background.jpg)", minHeight: "1200px", backgroundRepeat: "no-repeat", backgroundSize: "100%" }}>
        <div style={{ backgroundColor: "rgba(0,0,0,0.5", minHeight: "1200px" }}>
          <h3 style={{ backgroundColor: "rgba(0,0,0,0.6", padding: "50px 0px" }} className='text-center text-light'>TRY GLASSES APP ONLINE</h3>
          <div className='container'>
            <div className='row mt-5'>

              <div className='col-6 text-center'>
                <img src='./img/glassesImage/model.jpg' style={{ width: "200px" }} />
              </div>

              <div className='col-6 text-center' style={{ position: "relative" }}>
                <img src='./img/glassesImage/model.jpg' style={{ width: "200px", position: "relative" }} />
                <img src={url} style={{ position: "absolute", width: "116px", right: "228px", top: "58px", opacity: "0.5" }} />
                <div style={{ position: "absolute", width: "200px", height: "90px", right: "185px", top: "153px", backgroundColor: "rgba(243,190,149,0.5", padding: "8px" }}>
                  <p className='text-left font-weight-bold' style={{ color: "rgb(155,127,216)", marginBottom: "2px" }}>{name}</p>
                  <p className='text-left' style={{ fontSize: "12px" }}>{desc}</p>
                </div>
              </div>

            </div>

            <div style={{ backgroundColor: "white", width: "100%", height: "auto", marginTop: "100px" }}>
              <GlassesList arrProduct={glassesJson} changeGlasses={this.changeGlasses} />
            </div>

          </div>

        </div>
      </div>
    )
  }
}
