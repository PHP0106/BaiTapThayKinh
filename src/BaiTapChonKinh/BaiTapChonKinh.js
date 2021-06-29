import React, { Component } from 'react'

import style from './BaiTapChonKinh.module.css'

export default class BaiTapChonKinh extends Component {

    mangGlasses = [
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "G8850U Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 2,
            "price": 50,
            "name": "GUCCI G8759H",
            "url": "./glassesImage/v2.png",
            "desc": "G8759H Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 3,
            "price": 30,
            "name": "DIOR D6700HQ",
            "url": "./glassesImage/v3.png",
            "desc": "D6700HQ Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 4,
            "price": 70,
            "name": "DIOR D6005U",
            "url": "./glassesImage/v4.png",
            "desc": "D6005U Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 5,
            "price": 40,
            "name": "PRADA P8750",
            "url": "./glassesImage/v5.png",
            "desc": "P8750 Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 6,
            "price": 60,
            "name": "PRADA P9700",
            "url": "./glassesImage/v6.png",
            "desc": "P9700 Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 7,
            "price": 80,
            "name": "FENDI F8750",
            "url": "./glassesImage/v7.png",
            "desc": "F8750 Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 8,
            "price": 100,
            "name": "FENDI F8500",
            "url": "./glassesImage/v8.png",
            "desc": "F8500 Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },
        {
            "id": 9,
            "price": 60,
            "name": "FENDI F4300",
            "url": "./glassesImage/v9.png",
            "desc": "F4300 Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        }
    ]


    state = {
        glasses:
        {
            "id": 1,
            "price": 30,
            "name": "GUCCI G8850U",
            "url": "./glassesImage/v1.png",
            "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
        },

    }

    renderGlasses = () => {
        return this.mangGlasses.map((glasses, index) => {
            return <div className="col-2 my-3" key={index}>

                <img onClick={() => {
                    this.xemChiTiet(glasses);
                }} src={glasses.url} alt="..." className="w-100 p-1 m-1 " style={{ border: "1px solid black" }}></img>

            </div>
        });
    }

    xemChiTiet = (glassduocClick) => {
        this.setState({
            glasses: glassduocClick
        })
    }


    render() {
        let { glasses } = this.state;
        return (
            <div >
                <div style={{
                    backgroundImage: `url("./glassesImage/background.jpg")`, backgroundRepeat: 'no-repeat',
                    height: '700px', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'
                }} >
                    <div className=" bg">
                        <h5 className="text-center text-white font-weight-500 p-4" style={{ background: '#160f0d96' }}>TRY GLASSES APP ONLINE</h5>
                        <div className="row" >
                            <div className="col-6">
                                <div className="w-25 mt-4 mr-5 float-right" style={{ position: "relative" }}>
                                    <img className="w-100" src="./glassesImage/model.jpg" alt="...">
                                    </img>
                                    <div className="text">
                                        <h6 className="py-1 pl-1 m-0" style={{ color: "blue", fontSize: "12px", fontWeight: "700" }}>GUCCI G8850U</h6>
                                        <p className="text-white m-1" style={{ fontSize: "9px", fontWeight: "700" }}>G8850U Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                    </div>
                                    <div className="img">
                                        <img className="w-100" src="./glassesImage/v1.png" alt="...">
                                        </img>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="w-25 mt-4 ml-5 img_left" style={{ position: "relative" }}>
                                    <img className="w-100" src="./glassesImage/model.jpg" alt="...">
                                    </img>
                                    <div className="text">
                                        <h6 className="py-1 pl-1 m-0" style={{ color: "blue", fontSize: "12px", fontWeight: "700" }}>{glasses.name}</h6>
                                        <p className="text-white m-1" style={{ fontSize: "9px", fontWeight: "700" }}>{glasses.desc}</p>
                                    </div>
                                    <div className="img">
                                        <img className="w-100" src={glasses.url} alt="...">
                                        </img>
                                    </div>
                                </div>


                            </div>

                        </div>

                        <div className="container  mt-5" style={{ background: "white", width: "40%" }}>
                            <div className="row">

                                {this.renderGlasses()}


                            </div>

                        </div>
                    </div>


                </div>
            </div>

        )
    }
}
