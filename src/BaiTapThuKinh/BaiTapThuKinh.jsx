import React, { Component } from 'react'
import dataGlasses from '../Data/dataGlasses.json'
export default class BaiTapThuKinh extends Component {
    state = {

        glassesModel: {
            "id": 0,
            "price": 0,
            "name": "",
            "url": "",
            "desc": "",

        }
    }


    renderGlassList = () => {
        return dataGlasses.map((glassItem, index) => {
            return <img alt='...' onClick={() => { this.changeGlasses(glassItem) }} key={index} src={glassItem.url} style={{ width: '120px', cursor: 'pointer' }} className='border border-width-1 ml-2 p-2' />

        })
    }

    changeGlasses = (newGlass) => {
        this.setState({

            glassesModel: newGlass

        })
    }

    render() {

        const styleGlasses = {
            width: '180px',
            top: '90px',
            right: '65px',
            opacity: '0.7',

        }

        return (
            <div style={{ backgroundImage: 'url(./img/background.jpg)', backgroundSize: 'cover', backgroundPosition: 'center center', minHeight: '1000px' }}>
                <div style={{ backgroundColor: 'rgba(0,0,0,.8)', minHeight: '1000px' }}>
                    <h3 className='text-center text-white  bg-secondary p-3'>TRY GLASSES APP ONLINE</h3>
                    <div className='container text-center'>
                        <div className='row justify-content-center'>
                            <div className='col-6 align-self-center'>
                                <div className=' ' style={{ width: '310px' }} >
                                    <div class="card ">
                                        <img src='./img/model.jpg' class="card-img" alt="..." />
                                        <img style={styleGlasses} src='./img/v1.png' alt='...' className='position-absolute ' />
                                        <div class="card-img-overlay pt-5"  >

                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />


                                            <div style={{ backgroundColor: 'rgba(255,127,9,.5)', }} className='px-4 mt-3 '>
                                                <h3 className='text-primary'>GUCCI G8850U </h3>
                                                <p>Light pink square lenses define these sunglasses, ending with amother of pearl effect tip.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-6 align-self-center'>
                                <div className='w-50 m-5'>
                                    <div class="card ">
                                        <img src='./img/model.jpg' class="card-img" alt="" />
                                        <img style={styleGlasses} src={this.state.glassesModel.url} alt='...' className='position-absolute ' />
                                        <div class="card-img-overlay pt-5"  >

                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />
                                            <br />


                                            <div style={{ backgroundColor: 'rgba(255,127,9,.5)', }} className='px-4 mt-3'>
                                                <h3 className='text-primary'>{this.state.glassesModel.name} </h3>
                                                <p>{this.state.glassesModel.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='container '>
                            <div className='bg-light container mt-5 d-flex p-5 justify-content-center'>
                                {this.renderGlassList()}
                            </div>
                        </div>
                    </div>

                </div>

            </div >
        )
    }
}
