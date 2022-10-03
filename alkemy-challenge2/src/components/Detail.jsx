//Librerías
import React from 'react'
import { Navigate } from 'react-router-dom';
import axios from 'axios';
//Hooks
import { useEffect, useState } from 'react';
//Componentes
import Header from './Header';
import Footer from './Footer';
//Estilos
import '../CSS/detail.css'


const Detail = () => {
  const [dataDetail, setDataDetail] = useState(null)
  const token = sessionStorage.getItem('myToken')
  const query = new URLSearchParams(window.location.search)
  // console.log(query)
  let movieId = query.get('movieId')
  // console.log(movieId)
  
  useEffect(()=>{
    const endPoint = `https://api.themoviedb.org/3/movie/${movieId}?api_key=00fdd0d3547154c950ca12d7fc54f1de&language=en-US`
    axios.get(endPoint)
      .then((res)=>{
        // console.log(res.data)
        const dataMovie = res.data
        console.log(dataMovie)
        setDataDetail(dataMovie)
        console.log(dataDetail)
      })
  },[setDataDetail])

  
  return (
    <>
      {!token && <Navigate to="/"/>}
      {!dataDetail && <p>Cargando...</p>}
      {dataDetail &&
      <>
      <Header/>
      <div className='containerDetail'>
        <h2>Titulo: {dataDetail.original_title}</h2>
        <div className='containerImgDetail'>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500/${dataDetail.poster_path}`} alt="#" />
          </div>
          <div>
            <h3>Fecha de estreno: {dataDetail.release_date}</h3>
            <h3>Reseña:</h3>
            <p>{dataDetail.overview}</p>
            <h3>Géneros:</h3>
            <ul>
              {dataDetail.genres.map(gen => <li key={gen.id}>{gen.name}</li>)}
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
      </>
      }
    </>
  )
}

export default Detail