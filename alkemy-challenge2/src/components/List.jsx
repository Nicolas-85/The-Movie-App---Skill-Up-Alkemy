//Librerías
import { Link, Navigate, useNavigate } from 'react-router-dom';
import swAlert from '@sweetalert/with-react'
import axios from 'axios';
//Hooks
import { useEffect, useState } from 'react';
//Componentes
import Header from './Header';
import Footer from './Footer';
//Esilos
import '../CSS/list.css'


const List = ()=> {
    const apiKey = '00fdd0d3547154c950ca12d7fc54f1de'
    const navigate = useNavigate()

    const [dataMovies, setDataMovies] = useState([])//Lo seteamos como array vacío porque la info que recibimos es un array.

    useEffect(()=>{
        const token = sessionStorage.getItem('myToken')
        // console.log(token)
        if(token === null){
            navigate('/')
        }
    },[])

    const token = sessionStorage.getItem('myToken')
    
    useEffect(()=>{
        const endPoint = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`
        axios.get(endPoint)
            .then((res)=> {
                const apiData = res.data.results
                // console.log(apiData)
                setDataMovies(apiData)
            })
            .catch((error)=>{
                swAlert(<h2>Problemas con la comunicación, intente más tarde!.</h2>)
                console.log(error)
            })
    }, [setDataMovies]) //dependencia que queremos que escuche el cambio para aplicar la función arriba.

    // const handleClick = (id)=>{
    //     return ()=>{
    //         navigate(`/detail/${id}`)
    //     }
    // }

    return(
        <>
        {!token && <Navigate to="/"/>}
        <Header/>
        <div className='containerColumn'>
            {dataMovies.map((oneMovie, index)=>{
                return(
                    <div className='col col1' key={index}>
                        <div className='card'>
                            <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} alt="#"/>
                            <div>
                                <h5>{(oneMovie.title || oneMovie.name).substring(0, 27)}...</h5>
                                <div className='pAndBtn'>
                                    <p>{oneMovie.overview.substring(0, 100)}...</p>
                                    <button>
                                        <Link to={`/detail?movieId=${oneMovie.id}`} className="linkButton">Ver más</Link> {/*Pasamos un 
                                                                                                    query string en la ruta.*/}
                                    </button>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        <Footer/>

        
        

        </>
    )
}

export default List
