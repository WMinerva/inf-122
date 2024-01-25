"use client";
import Image from "next/image";
import style from "./photo.module.css";
import { useState, useEffect } from "react";
function Photo() {
  const [perrito, setPerrito] = useState("/vercel.svg");
  // const url = "https://dog.ceo/api/breeds/image/random";
  const url = "https://pokeapi.co/api/v2/pokemon/eevee";
  const [estado, setEstado] = useState("Esperando");
  const [habilidad, setHabilidad] = useState("Habilidad");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // setPerrito(data.message),
        setPerrito(data.sprites.front_default);
        setEstado(data.species.name);
        setHabilidad(data.abilities[0].ability.name);
        // setEstado(data.status);
      });
  }, []);
  return (
    <div className={style.contenedor}>
      <h1> {estado}</h1>
      <h1> {habilidad}</h1>
      <Image src={perrito} width="500" height="500" />
    </div>
  );
}
export default Photo;
