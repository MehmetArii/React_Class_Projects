import React from 'react'


export type coffee={
    id: number;
    title: string;
    description: string;
    ingredients: string | string[];
    image: string;
}
export type Props = {
    kahve: coffee;
}

const Card = ({kahve}:Props) => {
    const ingredients = typeof kahve.ingredients === 'string' ? kahve.ingredients.split(', ') : kahve.ingredients;
  return (
    <div><div className='flex flex-col m-4 shadow rounded-xl bg-white'>
      <img className="rounded-t-xl" src={kahve.image}></img>
      <div className='flex flex-col p-4'>
      <span className='text-xl'>{kahve.title}</span>
      <span className='text-base text-slate-500'>{kahve.description}</span>
      <span className='flex gap-4'>{ingredients.map((x) => (
        <span className='text-orange-500 bg-orange-100 px-2 py-0 rounded border border-orange-500'>{x}</span>))}</span>
      </div>
    </div></div>
  )
}

export default Card