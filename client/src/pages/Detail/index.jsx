import React from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { getDetail, clearDetail } from '../../redux/actions'
import { useParams } from "react-router-dom"
import styled from "styled-components"

export const Detalles = () => {
  const { id } = useParams(); 

  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(getDetail(id));
    return () => {
      dispatch(clearDetail())
    }
  },[dispatch, id])


  const detalle=useSelector((state)=>state.videogame)
  
  return (
    <Conteiner>
      <CardConteiner>
        <h2>Detalles:</h2>
        <h3>{detalle.name}</h3>
        <ImgConteiner>
          <Imagen src={detalle.image} alt="no hay" />
        </ImgConteiner>
            <p>Generos: {detalle.genres?.map(g => g).join("-")}</p>
        <p>{detalle.released}</p>
        <p>{detalle.description}</p>
      </CardConteiner>
    </Conteiner>
  );
}
const Conteiner = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
`
const CardConteiner = styled.div`
  width:350px;
  height:350px;
`
const ImgConteiner = styled.div`
display:flex;
  width:180px;
  height:180px;
`

const Imagen = styled.img`
  object-fit:contain;
`